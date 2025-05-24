// src/scenes/textPortfolio.js
import { portfolioMenu, returnPrompt }   from "../constants";
import { k }                             from "../kaboomCtx";
import { displayDialogue, cleanAndExit } from "../utils";

k.scene("textPortfolio", () => {

  window.lastScene = "textPortfolio";

  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  let nextScene = null;
  let onKey, onEsc;

  // 1) Show dialogue, then cleanup + nav → pass nextScene
  displayDialogue(
    portfolioMenu + returnPrompt,
    () => {
      window.removeEventListener("keydown", onKey);
      // pass nextScene into our helper
      cleanAndExit(ui, onEsc, /*onOutside*/ null, /*stopCloseKey*/ null, nextScene);
    },
    /* instant = */ true
  );

  // 2) Click handlers
  document.getElementById("opt-edu")?.addEventListener("click", () => {
    nextScene = "education";
    document.getElementById("close")?.click();
  });
  document.getElementById("opt-exp")?.addEventListener("click", () => {
    nextScene = "experience";
    document.getElementById("close")?.click();
  });
  document.getElementById("opt-proj")?.addEventListener("click", () => {
    nextScene = "projects";
    document.getElementById("close")?.click();
  });

  // 3) Keyboard shortcuts
  onKey = (e) => {
    if (e.key === "1") { nextScene = "education";  document.getElementById("close")?.click(); }
    if (e.key === "2") { nextScene = "experience"; document.getElementById("close")?.click(); }
    if (e.key === "3") { nextScene = "projects";   document.getElementById("close")?.click(); }
  };
  window.addEventListener("keydown", onKey);

  // 4) Escape always → outside
  onEsc = (e) => {
    if (e.key === "Escape") {
      nextScene = "outside";
      document.getElementById("close")?.click();
    }
  };
  window.addEventListener("keydown", onEsc);

  // 5) Back-button
  setTimeout(() => {
    const backBtn = document.getElementById("back-btn");
    if (backBtn) {
      backBtn.onclick = () => {
        nextScene = "outside";
        document.getElementById("close")?.click();
      };
    }
  }, 0);
});
