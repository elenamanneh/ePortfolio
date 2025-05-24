import { scaleFactor, dialogueData, doorPrompt } from "../constants";
import { k } from "../kaboomCtx";
import { displayDialogue, setCamScale, playWalkAnim } from "../utils";
// import { navigate } from "../router";

export let onOutsideChoice;
export let stopCloseKey;

k.scene("outside", async () => {
  // ─── 1) CLEAN UP ANY OLD HANDLERS ────────────────────────────────
  if (onOutsideChoice) {
    window.removeEventListener("keydown", onOutsideChoice);
    onOutsideChoice = null;
  }
  if (stopCloseKey) {
    document.removeEventListener("keydown", stopCloseKey, true);
    stopCloseKey = null;
  }

  window.lastScene = "outside";

  // ─── 2) INITIAL SETUP ───────────────────────────────────────────
  document.getElementById("move-note").style.display = "none";

  const mapData = await (await fetch("/spritesheets/map_outside.json")).json();
  const map = k.add([
    k.sprite("map_outside"),
    k.anchor("center"),
    k.pos(0, 0),
    k.scale(scaleFactor),
  ]);

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

  // ─── 3) BOUNDARIES & DOOR INTERACTION ───────────────────────────
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

            // hide the Close button
            const textboxContainer = document.getElementById("textbox-container");
            const btnContainer = textboxContainer.querySelector(".btn-container");
            btnContainer.style.display = "none";

            // swallow Enter/Q
            stopCloseKey = (e) => {
              if (e.code === "Enter" || e.code === "KeyQ") {
                e.preventDefault();
                e.stopImmediatePropagation();
              }
            };
            document.addEventListener("keydown", stopCloseKey, true);

            // show the door prompt
            displayDialogue(doorPrompt, () => {
              // restore Close button & release swallow
              btnContainer.style.display = "";
              document.removeEventListener("keydown", stopCloseKey, true);
              stopCloseKey = null;

              // remove old key listener
              if (onOutsideChoice) {
                window.removeEventListener("keydown", onOutsideChoice);
                onOutsideChoice = null;
              }

              player.isInDialogue = false;
              dialogueTriggered = false;
              if (nextScene) k.go(nextScene);
            });

            // wire up the buttons (overwriting any old handlers)
            const exploreBtn = document.getElementById("opt-explore");
            if (exploreBtn) {
              exploreBtn.onclick = () => {
                console.log("inside");
                nextScene = "inside";
                document.getElementById("close").click();
              };
            }
            const textBtn = document.getElementById("opt-text");
            if (textBtn) {
              textBtn.onclick = () => {
                nextScene = "textPortfolio";
                document.getElementById("close").click();
              };
            }

            // global key choices
            onOutsideChoice = (e) => {
              if (!player.isInDialogue) return;
              if (e.key === "1") {
                nextScene = "inside";
                document.getElementById("close").click();
              }
              if (e.key === "2") {
                nextScene = "textPortfolio";
                document.getElementById("close").click();
              }
            };
            window.addEventListener("keydown", onOutsideChoice);
          });
        }
      }
      continue;
    }

    // ─── 4) SPAWNPOINTS ──────────────────────────────────────────────
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

  // ─── 5) CAMERA & RESIZE ──────────────────────────────────────────
  setCamScale(k);
  k.onResize(() => setCamScale(k));
  k.onUpdate(() => k.camPos(player.pos.x, player.pos.y + 100));

  // ─── 6) MOUSE MOVEMENT & ANIMATIONS ─────────────────────────────
  k.onMouseDown((btn) => {
    if (btn !== "left" || player.isInDialogue) return;
    const target = k.toWorld(k.mousePos());
    player.moveTo(target, player.speed);
    const angle = player.pos.angle(target);
    const low = 50, high = 125;
    if (angle > low && angle < high) { playWalkAnim(player, "up"); return; }
    if (angle < -low && angle > -high) { playWalkAnim(player, "down"); return; }
    if (Math.abs(angle) > high) { playWalkAnim(player, "right"); return; }
    if (Math.abs(angle) < low) { playWalkAnim(player, "left"); return; }
  });
  const stop = () => {
    if (player.direction === "up") player.play("idle-up");
    else if (player.direction === "down") player.play("idle-down");
    else player.play("idle-side");
  };
  k.onMouseRelease(stop);
  k.onKeyRelease(stop);

  // ─── 7) ARROW-KEY MOVEMENT ───────────────────────────────────────
  k.onKeyDown(() => {
    if (player.isInDialogue) return;
    const dirs = ["right", "left", "up", "down"].map(k.isKeyDown);
    if (dirs.filter(Boolean).length !== 1) return;
    if (dirs[0]) { playWalkAnim(player, "right"); player.move(player.speed, 0); }
    if (dirs[1]) { playWalkAnim(player, "left");  player.move(-player.speed, 0); }
    if (dirs[2]) { playWalkAnim(player, "up");    player.move(0, -player.speed); }
    if (dirs[3]) { playWalkAnim(player, "down");  player.move(0, player.speed); }
  });
});
