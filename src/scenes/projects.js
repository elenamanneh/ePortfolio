// import { projects, projectsHeader, returnPrompt } from "../constants";
import { k }                                   from "../kaboomCtx";
// import { displayDialogue }                     from "../utils";
// src/scenes/projects.js

import { projects, projectsHeader, returnPrompt } from "../constants";
import { displayDialogue, cleanAndExit }         from "../utils";

k.scene("projects", () => {
  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  // 1) which scene to return to
  let onEsc;

  // 2) build the HTML
  const projectDetails = projects
    .map((p) => `
      <details>
        <summary>${p.name}</summary>
        <ul>
          ${p.description.map((line) => `<li>${line}</li>`).join("")}
        </ul>
        ${p.github ? `<p><a href="${p.github}" target="_blank">GitHub Repo</a></p>` : ""}
      </details>
    `)
    .join("");

  const content = `
    ${projectsHeader}
    ${projectDetails}
    ${returnPrompt}
  `;

  // 3) show dialogue, then shared cleanup → back to textPortfolio
  displayDialogue(
    content,
    () => cleanAndExit(ui, onEsc, /* onOutside */ undefined, /* stopCloseKey */ undefined, "textPortfolio"),
    true
  );

  // 4) Escape to close
  onEsc = (e) => {
    if (e.key === "Escape") {
      document.getElementById("close")?.click();
    }
  };
  window.addEventListener("keydown", onEsc);

  // 5) Back-button → same “close” path
  setTimeout(() => {
    const backBtn = document.getElementById("back-btn");
    if (backBtn) {
      backBtn.onclick = () => {
        document.getElementById("close")?.click();
      };
    }
  }, 0);
});
