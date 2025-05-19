import { experienceContent, returnPrompt } from "../constants";
import { k }                         from "../kaboomCtx";
import { displayDialogue }          from "../utils";
import { navigate } from "../router";

k.scene("experience", () => {
    const ui = document.getElementById("textbox-container");
    ui.classList.add("fullscreen");

    const content = experienceContent + returnPrompt;

    // show experience content from constants.js instantly
    displayDialogue(content, () => {
      ui.classList.remove("fullscreen");
      navigate("textPortfolio");
    }, true);

    // allow Escape to close and return
    const onEsc = (e) => {
      if (e.key === "Escape") {
        document.getElementById("close").click();
        window.removeEventListener("keydown", onEsc);
      }
    };
    window.addEventListener("keydown", onEsc);
});
