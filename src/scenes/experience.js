import { k } from "../kaboomCtx";
import { experienceContent, returnPrompt } from "../constants";
import { displayDialogue, cleanAndExit } from "../utils";

/*
 * experience scene
 */
k.scene("experience", () => {
  /*
   * Prepare UI: show fullscreen dialogue container
   */
  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  /*
   * Display experience content with shared cleanup on close
   */
  let onEsc;

  displayDialogue(
    experienceContent + returnPrompt,
    () => cleanAndExit(ui, onEsc),
    true,
  );

  /*
   * Close dialog on Escape key
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
