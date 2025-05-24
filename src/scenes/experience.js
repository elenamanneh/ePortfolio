// import { experienceContent, returnPrompt } from "../constants";
import { k }                         from "../kaboomCtx";
// import { displayDialogue }          from "../utils";
// src/scenes/experience.js

import { experienceContent, returnPrompt } from "../constants";
import { displayDialogue, cleanAndExit }  from "../utils";

k.scene("experience", () => {
  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  // 1) keep a reference to our Escape listener
  let onEsc;

  // 2) show content, then shared cleanup + nav → textPortfolio
  displayDialogue(
    experienceContent + returnPrompt,
    () => cleanAndExit(ui, onEsc, /*onOutside*/ undefined, /*stopCloseKey*/ undefined, "textPortfolio"),
    /* instant = */ true
  );

  // 3) wire Escape → click Close
  onEsc = (e) => {
    if (e.key === "Escape") {
      document.getElementById("close")?.click();
    }
  };
  window.addEventListener("keydown", onEsc);

  // 4) back-button fires the same “close” path
  setTimeout(() => {
    const backBtn = document.getElementById("back-btn");
    if (backBtn) {
      backBtn.onclick = () => {
        document.getElementById("close")?.click();
      };
    }
  }, 0);
});
