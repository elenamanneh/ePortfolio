/*
 * projects.js
 * Scene for displaying project list with details and handling cleanup
 */
import { k } from "../kaboomCtx";
import { projects, projectsHeader, returnPrompt } from "../constants";
import { displayDialogue, cleanAndExit } from "../utils";

/*
 * projects scene
 */
k.scene("projects", () => {
  /*
   * Prepare UI: show fullscreen dialogue container
   */
  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  /*
   * Build HTML content for each project
   */
  const projectDetails = projects
    .map(
      (p) => `
      <details>
        <summary>${p.name}</summary>
        <ul>
          ${p.description.map((line) => `<li>${line}</li>`).join("")}
        </ul>
        ${p.github ? `<p><a href="${p.github}" target="_blank">GitHub Repo</a></p>` : ""}
      </details>
    `,
    )
    .join("");

  const content = `
    ${projectsHeader}
    ${projectDetails}
    ${returnPrompt}
  `;

  /*
   * Display projects content and cleanup on close
   */
  let onEsc;
  displayDialogue(content, () => cleanAndExit(ui, onEsc), true);

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
   * Bind Back button to close dialog
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
