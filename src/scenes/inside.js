import { scaleFactor, dialogueData } from "../constants";
import { k } from "../kaboomCtx";
import { displayDialogue, setCamScale } from "../utils";

k.scene("inside", async () => {

  document.getElementById("move-note").style.display = "block";
  
  // load and position the interior map
  const mapData = await (await fetch("/spritesheets/map.json")).json();
  const map = k.add([
    k.sprite("map"),
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

  // iterate through map layers for boundaries and spawnpoints
  for (const layer of mapData.layers) {
    if (layer.name === "boundaries") {
      for (const boundary of layer.objects) {
        // add collision shapes
        map.add([
          k.area({ shape: new k.Rect(k.vec2(0), boundary.width, boundary.height) }),
          k.body({ isStatic: true }),
          k.pos(boundary.x, boundary.y),
          boundary.name,
        ]);

        // exit door: immediate scene change
        if (boundary.name === "exit") {
          player.onCollide("exit", () => {
            document.getElementById("close")?.click();
            player.isInDialogue = false;
            k.go("outside");
          });
        }
        // interactable object: show dialogue
        else if (boundary.name) {
          player.onCollide(boundary.name, () => {
            player.isInDialogue = true;
            displayDialogue(
              dialogueData[boundary.name],
              () => { player.isInDialogue = false; }
            );
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

    // render doors sprites above player
    if (layer.name === "doors") {
      k.add([
        k.sprite("map_doors"),
        k.pos(0, 0),
        k.scale(scaleFactor),
        k.z(10),
      ]);
    }
  }

  // camera behavior
  setCamScale(k);
  k.onResize(() => setCamScale(k));
  k.onUpdate(() => {
    k.camPos(player.pos.x, player.pos.y + 100);
  });

  // player movement via mouse
  k.onMouseDown((btn) => {
    if (btn !== "left" || player.isInDialogue) return;
    const target = k.toWorld(k.mousePos());
    player.moveTo(target, player.speed);
    const angle = player.pos.angle(target);
    const low = 50, high = 125;
    if (angle > low && angle < high) { player.play("walk-up"); player.direction="up"; return; }
    if (angle < -low && angle > -high) { player.play("walk-down"); player.direction="down"; return; }
    if (Math.abs(angle) > high) { player.flipX=false; player.play("walk-side"); player.direction="right"; return; }
    if (Math.abs(angle) < low) { player.flipX=true; player.play("walk-side"); player.direction="left"; return; }
  });

  // stop animations on release
  const stop = () => {
    switch (player.direction) {
      case "up":    player.play("idle-up");    break;
      case "down":  player.play("idle-down");  break;
      default:       player.play("idle-side");  break;
    }
  };
  k.onMouseRelease(stop);
  k.onKeyRelease(stop);

  // keyboard movement
  k.onKeyDown(() => {
    const dirs = ["right","left","up","down"].map(k.isKeyDown);
    if (dirs.filter(Boolean).length !== 1 || player.isInDialogue) return;
    if (dirs[0]) { player.flipX=false; player.play("walk-side"); player.direction="right"; player.move(player.speed,0); return; }
    if (dirs[1]) { player.flipX=true;  player.play("walk-side"); player.direction="left";  player.move(-player.speed,0); return; }
    if (dirs[2]) { player.play("walk-up"); player.direction="up"; player.move(0,-player.speed);       return; }
    if (dirs[3]) { player.play("walk-down"); player.direction="down"; player.move(0,player.speed); }
  });
});
