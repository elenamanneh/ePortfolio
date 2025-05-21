import { projects, projectsHeader, returnPrompt } from "../constants";
import { k }                                   from "../kaboomCtx";
import { displayDialogue }                     from "../utils";

k.scene("projects", () => {
  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  // build one <details> block per project
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

  // instant=true skips the typewriter
  displayDialogue(content, () => {
    ui.classList.remove("fullscreen");
    k.go("textPortfolio");
  }, true);

  // Escape to close and go back
  const onEsc = (e) => {
    if (e.key === "Escape") {
      document.getElementById("close").click();
      window.removeEventListener("keydown", onEsc);
    }
  };
  window.addEventListener("keydown", onEsc);

  setTimeout(() => {
    const backBtn = document.getElementById("back-btn");
    if (backBtn) {
      backBtn.onclick = () => {
        document.getElementById("close")?.click();
      };
    }
  }, 0);
});
