import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// This configuration is tailored for deployment to GitHub Pages.
//
// - We remove the Replit runtime error overlay plugin because it relies on
//   top‑level await and CommonJS modules, which caused build failures in
//   earlier attempts. Vite's built‑in overlay provides sufficient runtime
//   error reporting during development.
// - The `root` option points to the `client` directory where `index.html`
//   and all front‑end code live. This lets Vite resolve module paths
//   relative to `client`.
// - `build.outDir` writes the production build into a top‑level `dist`
//   folder. GitHub Pages expects static assets at the repository root of
//   the deployment branch, so writing directly to `dist` (rather than
//   `dist/public`) simplifies publishing.
// - The `base` option is dynamic. When `command === 'serve'`, Vite runs
//   the dev server at the root (`/`) so assets load correctly in local
//   development. When `command === 'build'`, it prefixes all asset URLs
//   with the repository name (`/design-aware-frontend/`) so the site
//   functions from `https://USERNAME.github.io/design-aware-frontend/`.

export default defineConfig(({ command }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  base: command === 'serve' ? '/' : '/design-aware-frontend/',
}));