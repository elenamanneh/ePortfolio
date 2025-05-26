import { k } from "./kaboomCtx";

let activeInterval = null;
let onKeyPressHandler = null;

/*
 * displayDialogue
 * Displays text in the dialogue UI with optional typewriter animation
 * @param {string}   text           HTML/text to show in the dialogue
 * @param {Function} onDisplayEnd   Callback to run when the dialogue is closed
 * @param {boolean}  instant        If true, bypass typewriter and show text instantly
 */
export function displayDialogue(text, onDisplayEnd, instant = false) {
  const dialogueUI  = document.getElementById("textbox-container");
  const dialogue    = document.getElementById("dialogue");
  const closeBtn    = document.getElementById("close");

  // clear any ongoing typewriter animation
  if (activeInterval) {
    clearInterval(activeInterval);
    activeInterval = null;
  }

  // reset content and show UI
  dialogue.innerHTML = "";
  dialogueUI.style.display = "block";

  const effectiveInstant = instant || dialogueUI.classList.contains("fullscreen");

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
        const dialogueUI = document.getElementById("textbox-container");
        dialogueUI.dispatchEvent(new CustomEvent("typingDone"));
      }
    }, 5);
  }

  // replace old close handler
  closeBtn.replaceWith(closeBtn.cloneNode(true));
  const newClose = document.getElementById("close");

  if (onKeyPressHandler) {
    document.removeEventListener("keypress", onKeyPressHandler);
  }

  /*
   * finish
   * Hides the dialogue UI and invokes the onDisplayEnd callback
   */
  function finish() {
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

  /*
   * onKeyPressHandler
   * Closes the dialogue on Enter, Q, or Escape key press
   */
  onKeyPressHandler = (e) => {
    if (e.code === "Enter" || e.code === "KeyQ" || e.code === "Escape") {
      newClose.click();
    }
  };
  document.addEventListener("keypress", onKeyPressHandler);
}

/*
 * setCamScale
 * Adjusts camera scale based on aspect ratio
 * @param {object} k  Kaboom instance
 */
export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
        k.camScale(k.vec2(1));
        return;
    }
    k.camScale(k.vec2(1.3));
}

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

/*
 * playWalkAnim
 * Plays the walking animation for a direction if not already playing
 * @param {object} player     Player game object
 * @param {string} direction  Direction key (up, down, left, right)
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

/*
 * playIdleAnim
 * Switches to the idle animation for the player's last known direction
 * @param {object} player  Player game object
 */
export function playIdleAnim(player) {
  const anim = idleAnims[player.direction] || "idle-down";
  player.play(anim);
}

/*
 * cleanAndExit
 * Removes dialog-related listeners, hides the UI, and navigates to another scene
 * @param {HTMLElement} ui            Dialogue container element
 * @param {Function}    onEsc         Escape key listener
 * @param {Function?}   onOutside     Outside-choice listener
 * @param {Function?}   stopCloseKey  Key-swallowing listener
 * @param {string?}     overrideScene Scene to go to (defaults to lastScene)
 */
export function cleanAndExit(ui, onEsc, onOutside, stopCloseKey, overrideScene) {
  if (onEsc)        window.removeEventListener("keydown", onEsc);
  if (onOutside)    window.removeEventListener("keydown", onOutside);
  if (stopCloseKey) document.removeEventListener("keydown", stopCloseKey, true);

  ui.classList.remove("fullscreen");
  document.getElementById("textbox-container").style.display = "none";

  const dest = overrideScene ?? window.lastScene ?? "outside";
  k.go(dest);
}
