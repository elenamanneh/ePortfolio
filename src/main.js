import { k }          from "./kaboomCtx";
import { loadAssets } from "./assets";

loadAssets();           // load sprites & set background
import "./scenes/outside";
import "./scenes/inside";
import "./scenes/textPortfolio";
import "./scenes/education";
import "./scenes/experience";
import "./scenes/projects";
import "./scenes/contact";
k.go("outside");

// wire up the Contact Me link
document.getElementById("contact-link")?.addEventListener("click", () => {
    k.go("contact");
  });
  

