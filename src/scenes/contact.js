import { contactContent, returnPrompt } from "../constants";
import { k } from "../kaboomCtx";
import { displayDialogue, cleanAndExit } from "../utils";
// import { navigate } from "../router";
import { onOutsideChoice, stopCloseKey } from "./outside";

let onEsc;

k.scene("contact", () => {
  // 1) CLEAN UP ANY LEFTOVER OUTSIDE HANDLERS
  if (onOutsideChoice) {
    window.removeEventListener("keydown", onOutsideChoice);
  }
  if (stopCloseKey) {
    document.removeEventListener("keydown", stopCloseKey, true);
  }

  // 2) SHOW OUR CONTACT DIALOGUE
  document.getElementById("move-note").style.display = "none";
  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  // 3) DISPLAY + use the shared cleanup fn
  displayDialogue(
    contactContent + returnPrompt,
    () => cleanAndExit(ui, onEsc, onOutsideChoice, stopCloseKey),
    true
  );

  // 4) WIRE ESCAPE TO CLOSE
  onEsc = (e) => {
    if (e.key === "Escape") {
      document.getElementById("close")?.click();
    }
  };
  window.addEventListener("keydown", onEsc);

  // 5) BACK-BUTTON REUSE
  setTimeout(() => {
    const backBtn = document.getElementById("back-btn");
    if (backBtn) {
      backBtn.onclick = () => {
        document.getElementById("close")?.click();
      };
    }
  }, 0);
});
