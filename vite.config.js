import { defineConfig } from "vite";

export default defineConfig({
  // GitHub Pages: set base to '/<repo-name>/' after repo is created if needed
  base: "./",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
