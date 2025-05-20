let activeInterval = null;
let onKeyPressHandler = null;

export function displayDialogue(text, onDisplayEnd, instant = false) {
  const dialogueUI  = document.getElementById("textbox-container");
  const dialogue    = document.getElementById("dialogue");
  const closeBtn    = document.getElementById("close");

  // 1) clear any in-flight typing
  if (activeInterval) {
    clearInterval(activeInterval);
    activeInterval = null;
  }

  // 2) reset content & show UI
  dialogue.innerHTML      = "";
  dialogueUI.style.display = "block";

  const effectiveInstant = instant || dialogueUI.classList.contains("fullscreen");

  // 3) start fresh typing (or dump text instantly)
  // if (instant) {
  if (effectiveInstant) {
    dialogue.innerHTML = text;
  } else {
    let i = 0, out = "";
    activeInterval = setInterval(() => {
      if (i < text.length) {
        out += text[i++];
        dialogue.innerHTML = out;
      } else {
        clearInterval(activeInterval);
        activeInterval = null;
      }
    }, 5);
  }

  // 4) remove old click & key handlers so they don’t accumulate
  closeBtn.replaceWith(closeBtn.cloneNode(true));
  const newClose = document.getElementById("close");

  if (onKeyPressHandler) {
    document.removeEventListener("keypress", onKeyPressHandler);
  }

  // 5) wire up the new handlers
  function finish() {
    // on close: clear any typing, hide UI, call your callback
    if (activeInterval) {
      clearInterval(activeInterval);
      activeInterval = null;
    }
    onDisplayEnd();
    dialogueUI.style.display = "none";
    dialogue.innerHTML = "";

    const canvas = document.querySelector("canvas");
    canvas?.focus();
  }

  newClose.addEventListener("click", finish);

  onKeyPressHandler = (e) => {
    if (e.code === "Enter" || e.code === "KeyQ") {
      newClose.click();
    }
  };
  document.addEventListener("keypress", onKeyPressHandler);
}

 

// set camera scale based on window size
export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
        k.camScale(k.vec2(1));
        return;
    }
    k.camScale(k.vec2(1.3));
}

// utils.js (add these at the bottom)

const walkAnims = {
  up:    "walk-up",
  down:  "walk-down",
  left:  "walk-side",
  right: "walk-side",
};

const idleAnims = {
  up:    "idle-up",
  down:  "idle-down",
  left:  "idle-side",
  right: "idle-side",
};

/**
 * Start the correct “walking” animation for `direction` 
 * but only if it isn’t already playing.
 */
export function playWalkAnim(player, direction) {
  const anim = walkAnims[direction];
  if (player.curAnim() !== anim) {
    // flip for left
    player.flipX = (direction === "left");
    player.play(anim);
  }
  player.direction = direction;
}

/**
 * Switch to the idle animation for the last known `direction`.
 */
export function playIdleAnim(player) {
  const anim = idleAnims[player.direction] || "idle-down";
  player.play(anim);
}
