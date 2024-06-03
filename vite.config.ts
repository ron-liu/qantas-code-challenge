/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Read the base URL from the environment variable or use '/' as default
const baseUrl = process.env.BASE_URL || "/";

// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl,
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.js"], // if you want a setup file
  },
});
