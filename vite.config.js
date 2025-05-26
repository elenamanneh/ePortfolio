import { defineConfig } from "vite"

export default defineConfig({
  base: "/ePortfolio/",
  build: {
    minify: "terser",
  },
});