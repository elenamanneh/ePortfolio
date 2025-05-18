import { scaleFactor, dialogueData, doorPrompt } from "../constants";
import { k } from "../kaboomCtx";
import { displayDialogue, setCamScale } from "../utils";

k.scene("outside", async () => {

  document.getElementById("move-note").style.display = "none";

  // load and position the exterior map
  const mapData = await (await fetch("/spritesheets/map_outside.json")).json();
  const map = k.add([
    k.sprite("map_outside"),
    k.anchor("center"),
    k.pos(0, 0),
    k.scale(scaleFactor),
  ]);

  // create the player entity
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

  // set up boundaries and interactions
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
            // use shared prompt
            displayDialogue(doorPrompt, () => {
              player.isInDialogue = false;
              dialogueTriggered = false;
              if (nextScene) k.go(nextScene);
            });

            const choose = (scene) => {
              nextScene = scene;
              document.getElementById("close").click();
            };

            setTimeout(() => {
              document.getElementById("opt-explore")
                .addEventListener("click", () => choose("inside"));
              document.getElementById("opt-text")
                .addEventListener("click", () => choose("textPortfolio"));
            }, doorPrompt.length * 5 + 50);

            window.addEventListener("keydown", (e) => {
              if (!player.isInDialogue) return;
              if (e.key === "1") choose("inside");
              if (e.key === "2") choose("textPortfolio");
            });
          });
        }
      }
      continue;
    }

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

  // camera and controls
  setCamScale(k);
  k.onResize(() => setCamScale(k));
  k.onUpdate(() => k.camPos(player.pos.x, player.pos.y + 100));

  k.onMouseDown((btn) => {
    if (btn !== "left" || player.isInDialogue) return;
    const target = k.toWorld(k.mousePos());
    player.moveTo(target, player.speed);
    const angle = player.pos.angle(target);
    const low = 50, high = 125;
    if (angle > low && angle < high) {
      player.play("walk-up"); player.direction = "up"; return;
    }
    if (angle < -low && angle > -high) {
      player.play("walk-down"); player.direction = "down"; return;
    }
    if (Math.abs(angle) > high) {
      player.flipX = false;
      player.play("walk-side"); player.direction = "right";
      return;
    }
    if (Math.abs(angle) < low) {
      player.flipX = true;
      player.play("walk-side"); player.direction = "left";
    }
  });

  const stop = () => {
    if (player.direction === "up") player.play("idle-up");
    else if (player.direction === "down") player.play("idle-down");
    else player.play("idle-side");
  };
  k.onMouseRelease(stop);
  k.onKeyRelease(stop);

  k.onKeyDown(() => {
    const dirs = ["right","left","up","down"].map(k.isKeyDown);
    if (dirs.filter(Boolean).length !== 1 || player.isInDialogue) return;
    if (dirs[0]) { player.flipX=false; player.play("walk-side"); player.direction="right"; player.move(player.speed,0); return; }
    if (dirs[1]) { player.flipX=true;  player.play("walk-side"); player.direction="left"; player.move(-player.speed,0); return; }
    if (dirs[2]) { player.play("walk-up"); player.direction="up"; player.move(0,-player.speed); return; }
    if (dirs[3]) { player.play("walk-down"); player.direction="down"; player.move(0,player.speed); }
  });
});
