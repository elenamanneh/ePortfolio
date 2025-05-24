import { contactContent, returnPrompt } from "../constants";
import { k } from "../kaboomCtx";
import { displayDialogue } from "../utils";
// import { navigate } from "../router";
import { onOutsideChoice, stopCloseKey } from "./outside";

let onEsc;

k.scene("contact", () => {
  // ─── 1) CLEAN UP ANY LEFTOVER OUTSIDE HANDLERS ────────────────
  if (onOutsideChoice) {
    window.removeEventListener("keydown", onOutsideChoice);
  }
  if (stopCloseKey) {
    document.removeEventListener("keydown", stopCloseKey, true);
  }

  // ─── 2) SHOW OUR CONTACT DIALOGUE ─────────────────────────────
  document.getElementById("move-note").style.display = "none";
  const ui = document.getElementById("textbox-container");
  ui.classList.add("fullscreen");

  displayDialogue(
    contactContent + returnPrompt,
    () => {
      ui.classList.remove("fullscreen");
      k.go(window.lastScene || "outside");
    },
    true
  );

  // ─── 3) WIRE ESCAPE TO CLOSE ───────────────────────────────────
  onEsc = (e) => {
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
