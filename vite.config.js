import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/1mdm-seller/", // IMPORTANT for GitHub Pages
});
