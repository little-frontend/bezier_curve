import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV !== "development"
      ? `https://${pkg.author}.github.io/${pkg.name}/`
      : "/",
  plugins: [vue()],
});
