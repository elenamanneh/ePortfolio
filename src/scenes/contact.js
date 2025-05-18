import { contactContent, returnPrompt } from "../constants";
import { k }               from "../kaboomCtx";
import { displayDialogue } from "../utils";

k.scene("contact", () => {
  document.getElementById("move-note").style.display = "none";

  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  const content = contactContent + returnPrompt;

  // show instantly, content comes from constants.js
  displayDialogue(content, () => {
    ui.classList.remove("fullscreen");
    k.go("outside");
  }, true);

  // Escape to close & return
  const onEsc = (e) => {
    if (e.key === "Escape") {
      document.getElementById("close").click();
      window.removeEventListener("keydown", onEsc);
    }
  };
  window.addEventListener("keydown", onEsc);
});
