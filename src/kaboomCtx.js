import kaboom from "kaboom";

/*
 * Configure and create the Kaboom instance
 */
export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
});
