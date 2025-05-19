import { k } from "./kaboomCtx";

/**
 * Map from URL path → Kaboom scene name.
 */
const pathToScene = {
  "/":                "outside",
  "/inside":          "inside",
  "/portfolio":       "textPortfolio",
  "/education":       "education",
  "/experience":      "experience",
  "/projects":        "projects",
  "/contact":         "contact",
};

/**
 * Map from scene → URL path (inverse of above).
 */
const sceneToPath = Object.entries(pathToScene)
  .reduce((acc, [path, scene]) => (acc[scene] = path, acc), {});

/**
 * Figure out which scene to show based on current location.pathname.
 * Defaults to outside.
 */
export function getSceneFromPath() {
  return pathToScene[window.location.pathname] || "outside";
}

/**
 * Navigate to a scene _and_ push a new history entry.
 * If the path is the same as current, just k.go without pushing.
 */
export function navigate(scene) {
  const path = sceneToPath[scene] || "/";
  k.go(scene);
  if (window.location.pathname !== path) {
    window.history.pushState({ scene }, "", path);
  }
}

// when users click back/forward
window.addEventListener("popstate", (evt) => {
  const scene = (evt.state && evt.state.scene) || getSceneFromPath();
  k.go(scene);
});
