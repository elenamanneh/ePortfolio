import { k } from "./kaboomCtx";

/*
 * loadAssets
 * Loads all sprites and configures the global background color
 */
export function loadAssets() {
  // player sprite sheet
  k.loadSprite(
    "player_spritesheet",
    "./spritesheets/spritesheet_demo_player.png",
    {
      sliceX: 39,
      sliceY: 31,
      anims: {
        "idle-down": 952,
        "walk-down": { from: 952, to: 955, loop: true, speed: 8 },
        "idle-side": 991,
        "walk-side": { from: 991, to: 994, loop: true, speed: 8 },
        "idle-up": 1030,
        "walk-up": { from: 1030, to: 1033, loop: true, speed: 8 },
      },
    },
  );

  // interior map
  k.loadSprite("map", "./spritesheets/map.png");

  // door overlays
  k.loadSprite("map_doors", "./spritesheets/map_doors.png");

  // outside background
  k.loadSprite("map_outside", "./spritesheets/map_bg.png");

  // global background color
  k.setBackground(k.Color.fromHex("#313131"));
}
