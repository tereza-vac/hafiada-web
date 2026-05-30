import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// When deploying to a custom domain (e.g. hafiada.cz) keep base as "/".
// When deploying to GitHub Pages project site (tereza-vac.github.io/hafiada-web/)
// run the build with BASE_PATH=/hafiada-web/.
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
