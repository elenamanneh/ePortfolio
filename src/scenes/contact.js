import { contactContent, returnPrompt } from "../constants";
import { k } from "../kaboomCtx";
import { displayDialogue } from "../utils";
// import { navigate } from "../router";
import { onOutsideChoice, stopCloseKey } from "./outside";

let onEsc;

k.scene("contact", () => {
  // ─── 1) CLEAN UP ANY LEFTOVER OUTSIDE HANDLERS ────────────────
  if (onOutsideChoice) {
    window.removeEventListener("keydown", onOutsideChoice);
  }
  if (stopCloseKey) {
    document.removeEventListener("keydown", stopCloseKey, true);
  }

  // ─── 2) SHOW OUR CONTACT DIALOGUE ─────────────────────────────
  document.getElementById("move-note").style.display = "none";
  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  // unified cleanup + navigation
  const cleanAndExit = () => {
    // remove fullscreen styles
    ui.classList.remove("fullscreen");

    // tear down *this* scene’s handlers
    window.removeEventListener("keydown", onEsc);
    if (onOutsideChoice) {
      window.removeEventListener("keydown", onOutsideChoice);
    }
    if (stopCloseKey) {
      document.removeEventListener("keydown", stopCloseKey, true);
    }

    // finally navigate back
    k.go(window.lastScene || "outside");
  };

  displayDialogue(
    contactContent + returnPrompt,
    cleanAndExit,
    true
  );

  // ─── 3) WIRE ESCAPE TO CLOSE ───────────────────────────────────
  onEsc = (e) => {
    if (e.key === "Escape") {
      document.getElementById("close")?.click();
    }
  };
  window.addEventListener("keydown", onEsc);

  setTimeout(() => {
    const backBtn = document.getElementById("back-btn");
    if (backBtn) {
      backBtn.onclick = () => {
        document.getElementById("close")?.click();
      };
    }
  }, 0);
});
