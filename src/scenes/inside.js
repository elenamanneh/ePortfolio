import { scaleFactor, dialogueData } from "../constants";
import { k } from "../kaboomCtx";
import { displayDialogue, setCamScale, playWalkAnim } from "../utils";

/*
 * inside scene
 */
k.scene("inside", async () => {
  /*
   * Scene setup: track last scene and prepare UI hints
   */
  window.lastScene = "inside";
  const textboxContainer = document.getElementById("textbox-container");
  document.getElementById("move-note").style.display = "block";

  /*
   * Load and position the interior map
   */
  const mapData = await (await fetch("/spritesheets/map.json")).json();
  const map = k.add([k.sprite("map"), k.pos(0, 0), k.scale(scaleFactor)]);

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

  /*
   * Process map layers: boundaries, spawnpoints, and doors
   */
  for (const layer of mapData.layers) {
    if (layer.name === "boundaries") {
      layer.objects.forEach((boundary) => {
        map.add([
          k.area({
            shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
          }),
          k.body({ isStatic: true }),
          k.pos(boundary.x, boundary.y),
          boundary.name,
        ]);

        if (boundary.name === "exit") {
          /*
           * Exit collision: return to outside scene
           */
          player.onCollide("exit", () => {
            k.go("outside");
          });
        } else if (boundary.name) {
          /*
           * Interactable collision: show dialogue for each object
           */
          player.onCollide(boundary.name, () => {
            player.isInDialogue = true;
            const key = boundary.name;

            /*
             * Attach link handlers after typewriter completes
             */
            const onTypingDone = () => {
              if (key === "desk") {
                document
                  .getElementById("experience-link-inside")
                  ?.addEventListener(
                    "click",
                    () => {
                      document.getElementById("close")?.click();
                      k.go("experience");
                    },
                    { once: true },
                  );
              } else if (key === "cs-degree") {
                document
                  .getElementById("education-link-inside")
                  ?.addEventListener(
                    "click",
                    () => {
                      document.getElementById("close")?.click();
                      k.go("education");
                    },
                    { once: true },
                  );
              } else if (key === "bookshelf") {
                document
                  .getElementById("projects-link-inside")
                  ?.addEventListener(
                    "click",
                    () => {
                      document.getElementById("close")?.click();
                      k.go("projects");
                    },
                    { once: true },
                  );
              }
              textboxContainer.removeEventListener("typingDone", onTypingDone);
            };
            textboxContainer.addEventListener("typingDone", onTypingDone, {
              once: true,
            });

            /*
             * Display dialogue with typewriter animation
             */
            displayDialogue(dialogueData[key], () => {
              player.isInDialogue = false;
            });
          });
        }
      });
      continue;
    }

    if (layer.name === "spawnpoints") {
      for (const entity of layer.objects) {
        if (entity.name === "player") {
          player.pos = k.vec2(entity.x * scaleFactor, entity.y * scaleFactor);
          k.add(player);
          break;
        }
      }
    }

    if (layer.name === "doors") {
      /*
       * Render door overlays above player
       */
      k.add([
        k.sprite("map_doors"),
        k.pos(0, 0),
        k.scale(scaleFactor),
        k.z(10),
      ]);
    }
  }

  /*
   * Camera scaling and centering on player
   */
  setCamScale(k);
  k.onResize(() => setCamScale(k));
  k.onUpdate(() => {
    k.camPos(player.pos.x, player.pos.y + 100);
  });

  /*
   * Mouse-driven movement and walk animations
   */
  k.onMouseDown((btn) => {
    if (btn !== "left" || player.isInDialogue) return;
    const target = k.toWorld(k.mousePos());
    player.moveTo(target, player.speed);
    const angle = player.pos.angle(target);
    const low = 50,
      high = 125;
    // Up
    if (angle > low && angle < high) {
      playWalkAnim(player, "up");
      return;
    }
    // Down
    if (angle < -low && angle > -high) {
      playWalkAnim(player, "down");
      return;
    }
    // Right
    if (Math.abs(angle) > high) {
      playWalkAnim(player, "right");
      return;
    }
    // Left
    if (Math.abs(angle) < low) {
      playWalkAnim(player, "left");
      return;
    }
  });
  const stop = () => {
    switch (player.direction) {
      case "up":
        player.play("idle-up");
        break;
      case "down":
        player.play("idle-down");
        break;
      default:
        player.play("idle-side");
        break;
    }
  };
  k.onMouseRelease(stop);
  k.onKeyRelease(stop);

  /*
   * Keyboard movement via arrow keys
   */
  k.onKeyDown(() => {
    const dirs = ["right", "left", "up", "down"].map(k.isKeyDown);
    if (dirs.filter(Boolean).length !== 1 || player.isInDialogue) return;
    // Right
    if (dirs[0]) {
      playWalkAnim(player, "right");
      player.move(player.speed, 0);
      return;
    }
    // Left
    if (dirs[1]) {
      playWalkAnim(player, "left");
      player.move(-player.speed, 0);
      return;
    }
    // Up
    if (dirs[2]) {
      playWalkAnim(player, "up");
      player.move(0, -player.speed);
      return;
    }
    // Down
    if (dirs[3]) {
      playWalkAnim(player, "down");
      player.move(0, player.speed);
      return;
    }
  });
});
