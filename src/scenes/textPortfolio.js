import { portfolioMenu, returnPrompt } from "../constants";
import { k } from "../kaboomCtx";
import { displayDialogue, cleanAndExit } from "../utils";

/*
 * textPortfolio scene
 */
k.scene("textPortfolio", () => {
  /*
   * Record last scene and prepare fullscreen UI
   */
  window.lastScene = "textPortfolio";
  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  /*
   * Initialize navigation state and key handlers
   */
  let nextScene = null;
  let onKey;
  let onEsc;

  /*
   * Display menu content and cleanup on close
   */
  displayDialogue(
    portfolioMenu + returnPrompt,
    () => {
      window.removeEventListener("keydown", onKey);
      cleanAndExit(ui, onEsc, null, null, nextScene);
    },
    true
  );

  /*
   * Handle click navigation for menu options
   */
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

  /*
   * Handle number key shortcuts for menu navigation
   */
  onKey = (e) => {
    if (e.key === "1") {
      nextScene = "education";
      document.getElementById("close")?.click();
    }
    if (e.key === "2") {
      nextScene = "experience";
      document.getElementById("close")?.click();
    }
    if (e.key === "3") {
      nextScene = "projects";
      document.getElementById("close")?.click();
    }
  };
  window.addEventListener("keydown", onKey);

  /*
   * Handle Escape key to return outside
   */
  onEsc = (e) => {
    if (e.key === "Escape") {
      nextScene = "outside";
      document.getElementById("close")?.click();
    }
  };
  window.addEventListener("keydown", onEsc);

  /*
   * Bind Back button to return outside
   */
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
