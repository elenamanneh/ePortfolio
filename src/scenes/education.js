import { educationContent, returnPrompt } from "../constants";
import { k }                        from "../kaboomCtx";
import { displayDialogue }         from "../utils";
import { navigate } from "../router";

k.scene("education", () => {
    const ui = document.getElementById("textbox-container");
    ui.classList.add("fullscreen");   // enlarge the box & hide Close button via your CSS

    const content = educationContent + returnPrompt;

    // show education content from constants.js instantly
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
