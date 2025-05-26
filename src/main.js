import { k } from "./kaboomCtx";
import { loadAssets } from "./assets";

/*
 * Load sprites and set background
 */
loadAssets();

import "./scenes/outside";
import "./scenes/inside";
import "./scenes/textPortfolio";
import "./scenes/education";
import "./scenes/experience";
import "./scenes/projects";
import "./scenes/contact";

/*
 * Initialize and navigate to the default scene
 */
window.lastScene = "outside";
k.go("outside");

/*
 * Handle 'Contact Me' click to navigate to the contact scene
 */
document.getElementById("contact-link")?.addEventListener("click", () => {
  k.go("contact");
});
