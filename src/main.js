import { k }          from "./kaboomCtx";
import { loadAssets } from "./assets";
import { getSceneFromPath, navigate } from "./router";

loadAssets();           // load sprites & set background
import "./scenes/outside";
import "./scenes/inside";
import "./scenes/textPortfolio";
import "./scenes/education";
import "./scenes/experience";
import "./scenes/projects";
import "./scenes/contact";
k.go(getSceneFromPath());

// wire up the Contact Me link
document.getElementById("contact-link")?.addEventListener("click", () => {
    navigate("contact");
  });
  

