import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        // eslint-disable-next-line no-undef
        main: path.resolve(__dirname, "index.html"),
      },
    },
    assetsDir: "assets",
  },
  publicDir: "public",
  // Configure asset handling for proper path resolution
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.svg"],
});
