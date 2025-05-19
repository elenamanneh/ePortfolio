import kaboom from "kaboom";

// initialize kaboom context
export const k = kaboom({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById("game"),
})