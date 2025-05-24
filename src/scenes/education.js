import { educationContent, returnPrompt } from "../constants";
import { k }                        from "../kaboomCtx";
// import { displayDialogue }         from "../utils";

// src/scenes/education.js

// import { educationContent, returnPrompt } from "../constants";
import { displayDialogue, cleanAndExit }  from "../utils";

k.scene("education", () => {
  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  // 1) hold onto our Escape‐listener so cleanAndExit can remove it
  let onEsc;

  // 2) show the content, and on close call our shared helper with override
  displayDialogue(
    educationContent + returnPrompt,
    () => cleanAndExit(ui, onEsc),
    true
  );

  // 3) wire Escape → click Close
  onEsc = (e) => {
    if (e.key === "Escape") {
      document.getElementById("close")?.click();
    }
  };
  window.addEventListener("keydown", onEsc);

  // 4) back‐button (if present) should also fire Close
  setTimeout(() => {
    const backBtn = document.getElementById("back-btn");
    if (backBtn) {
      backBtn.onclick = () => {
        document.getElementById("close")?.click();
      };
    }
  }, 0);
});
