// src/scenes/textPortfolio.js

import { portfolioMenu, returnPrompt }        from "../constants";
import { k }                    from "../kaboomCtx";
import { displayDialogue }      from "../utils";

k.scene("textPortfolio", () => {

  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  const content = portfolioMenu + returnPrompt;

  // 1) Show the menu with the type-writer effect
  displayDialogue(content, () => {
    // on close, clean up fullscreen and event listeners
    ui.classList.remove("fullscreen");
    window.removeEventListener("keydown", onKey);
    window.removeEventListener("keydown", onEsc);
  });

  // 2) After the text finishes typing, wire up tap/click handlers
  setTimeout(() => {
    document.getElementById("opt-edu")?.addEventListener("click", () => {
      document.getElementById("close").click();
      k.go("education");
    });
    document.getElementById("opt-exp")?.addEventListener("click", () => {
      document.getElementById("close").click();
      k.go("experience");
    });
    document.getElementById("opt-proj")?.addEventListener("click", () => {
      document.getElementById("close").click();
      k.go("projects");
    });
  }, portfolioMenu.length * 5 + 50);

  // 3) Keyboard shortcuts
  const onKey = (e) => {
    if (e.key === "1") {
      document.getElementById("close").click();
      k.go("education");
    }
    if (e.key === "2") {
      document.getElementById("close").click();
      k.go("experience");
    }
    if (e.key === "3") {
      document.getElementById("close").click();
      k.go("projects");
    }
  };
  window.addEventListener("keydown", onKey);

  // 4) Escape to return to outside
  const onEsc = (e) => {
    if (e.key === "Escape") {
      document.getElementById("close")?.click();
      k.go("outside");
    }
  };
  window.addEventListener("keydown", onEsc);
});
