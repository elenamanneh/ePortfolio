import { contactContent, returnPrompt } from "../constants";
import { k } from "../kaboomCtx";
import { displayDialogue, cleanAndExit } from "../utils";
import { onOutsideChoice, stopCloseKey } from "./outside";

let onEsc;

/*
 * contact scene
 */
k.scene("contact", () => {
  /*
   * Remove leftover handlers from outside scene
   */
  if (onOutsideChoice) {
    window.removeEventListener("keydown", onOutsideChoice);
  }
  if (stopCloseKey) {
    document.removeEventListener("keydown", stopCloseKey, true);
  }

  /*
   * Prepare UI for contact dialog
   */
  document.getElementById("move-note").style.display = "none";
  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  /*
   * Show contact content with shared cleanup
   */
  displayDialogue(
    contactContent + returnPrompt,
    () => cleanAndExit(ui, onEsc, onOutsideChoice, stopCloseKey),
    true,
  );

  /*
   * Handle Escape key to close dialog
   */
  onEsc = (e) => {
    if (e.key === "Escape") {
      document.getElementById("close")?.click();
    }
  };
  window.addEventListener("keydown", onEsc);

  /*
   * Wire Back button to close dialog
   */
  setTimeout(() => {
    const backBtn = document.getElementById("back-btn");
    if (backBtn) {
      backBtn.onclick = () => {
        document.getElementById("close")?.click();
      };
    }
  }, 0);
});
