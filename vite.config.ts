import { defineConfig } from "vite";

import viteCompression from "vite-plugin-compression";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  server: {
    host: true,
  },
  build: {
    emptyOutDir: true,
    minify: true,
    chunkSizeWarningLimit: 500,
  },
});
