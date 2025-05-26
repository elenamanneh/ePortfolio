import { scaleFactor, doorPrompt } from "../constants";
import { k } from "../kaboomCtx";
import {
  displayDialogue,
  setCamScale,
  playWalkAnim,
  cleanAndExit
} from "../utils";

export let onOutsideChoice;
export let stopCloseKey;

/*
 * outside scene
 */
k.scene("outside", async () => {
  /*
   * Cleanup any previous event handlers
   */
  if (onOutsideChoice) {
    window.removeEventListener("keydown", onOutsideChoice);
    onOutsideChoice = null;
  }
  if (stopCloseKey) {
    document.removeEventListener("keydown", stopCloseKey, true);
    stopCloseKey = null;
  }

  /*
   * Record last scene and hide movement hint
   */
  window.lastScene = "outside";
  document.getElementById("move-note").style.display = "none";

  /*
   * Load exterior map and background sprite
   */
  const mapData = await (await fetch("/spritesheets/map_outside.json")).json();
  const map = k.add([
    k.sprite("map_outside"),
    k.anchor("center"),
    k.pos(0, 0),
    k.scale(scaleFactor),
  ]);

  /*
   * Create player entity with physics and animations
   */
  const player = k.make([
    k.sprite("player_spritesheet", { anim: "idle-down" }),
    k.area({ shape: new k.Rect(k.vec2(0, 3), 10, 10) }),
    k.body(),
    k.anchor("center"),
    k.pos(100, 100),
    k.scale(scaleFactor + 0.5),
    { speed: 250, direction: "down", isInDialogue: false },
    "player",
  ]);

  let dialogueTriggered = false;

  /*
   * Add collision boundaries and door interaction
   */
  for (const layer of mapData.layers) {
    if (layer.name === "boundaries") {
      for (const boundary of layer.objects) {
        map.add([
          k.area({ shape: new k.Rect(k.vec2(0), boundary.width, boundary.height) }),
          k.body({ isStatic: true }),
          k.pos(boundary.x, boundary.y),
          boundary.name,
        ]);

        if (boundary.name === "door") {
          player.onCollide("door", () => {
            if (dialogueTriggered || player.isInDialogue) return;
            dialogueTriggered = true;
            player.isInDialogue = true;

            let nextScene = null;
            const textboxContainer = document.getElementById("textbox-container");

            /*
             * Temporarily disable Close button until choice is made
             */
            const btnContainer = textboxContainer.querySelector(".btn-container");
            btnContainer.style.display = "none";

            /*
             * Prevent Enter/Q from closing dialogue prematurely
             */
            stopCloseKey = (e) => {
              if (e.code === "Enter" || e.code === "KeyQ") {
                e.preventDefault();
                e.stopImmediatePropagation();
              }
            };
            document.addEventListener("keydown", stopCloseKey, true);

            /*
             * Show door choice prompt and handle navigation on close
             */
            displayDialogue(doorPrompt, () => {
              btnContainer.style.display = "";
              cleanAndExit(
                textboxContainer,
                null,
                onOutsideChoice,
                stopCloseKey,
                nextScene
              );
              onOutsideChoice = null;
              stopCloseKey = null;
              player.isInDialogue = false;
              dialogueTriggered = false;
            });

            /*
             * Attach click handlers after typewriter finishes
             */
            textboxContainer.addEventListener("typingDone", () => {
              const explore = document.getElementById("opt-explore");
              const text = document.getElementById("opt-text");
              if (!explore || !text) {
                return;
              }
              explore.addEventListener("click", () => {
                nextScene = "inside";
                document.getElementById("close")?.click();
              }, { once: true });

              text.addEventListener("click", () => {
                nextScene = "textPortfolio";
                document.getElementById("close")?.click();
              }, { once: true });
            }, { once: true });

            /*
             * Handle keyboard choice 1/2
             */
            onOutsideChoice = (e) => {
              if (!player.isInDialogue) return;
              if (e.key === "1") {
                nextScene = "inside";
                document.getElementById("close")?.click();
              }
              if (e.key === "2") {
                nextScene = "textPortfolio";
                document.getElementById("close")?.click();
              }
            };
            window.addEventListener("keydown", onOutsideChoice);
          });
        }
      }
      continue;
    }

    /*
     * Set player spawnpoint
     */
    if (layer.name === "spawnpoints") {
      for (const entity of layer.objects) {
        if (entity.name === "player") {
          player.pos = k.vec2(
            entity.x * scaleFactor,
            entity.y * scaleFactor
          );
          k.add(player);
          break;
        }
      }
    }
  }

  /*
   * Configure camera scaling and centering
   */
  setCamScale(k);
  k.onResize(() => setCamScale(k));
  k.onUpdate(() => k.camPos(player.pos.x, player.pos.y + 100));

  /*
   * Mouse-based movement and walk animations
   */
  k.onMouseDown((btn) => {
    if (btn !== "left" || player.isInDialogue) return;
    const target = k.toWorld(k.mousePos());
    player.moveTo(target, player.speed);
    const angle = player.pos.angle(target);
    if (angle > 50   && angle < 125) playWalkAnim(player, "up");
    else if (angle < -50 && angle > -125) playWalkAnim(player, "down");
    else if (Math.abs(angle) > 125) playWalkAnim(player, "right");
    else playWalkAnim(player, "left");
  });
  const stop = () => {
    if (player.direction === "up")    player.play("idle-up");
    else if (player.direction === "down") player.play("idle-down");
    else player.play("idle-side");
  };
  k.onMouseRelease(stop);
  k.onKeyRelease(stop);

  /*
   * Arrow-key movement handling
   */
  k.onKeyDown(() => {
    if (player.isInDialogue) return;
    const dirs = ["right", "left", "up", "down"].map(k.isKeyDown);
    if (dirs.filter(Boolean).length !== 1) return;
    if (dirs[0]) { playWalkAnim(player, "right"); player.move(player.speed,   0); }
    if (dirs[1]) { playWalkAnim(player, "left");  player.move(-player.speed,  0); }
    if (dirs[2]) { playWalkAnim(player, "up");    player.move(0, -player.speed); }
    if (dirs[3]) { playWalkAnim(player, "down");  player.move(0,  player.speed); }
  });
});
