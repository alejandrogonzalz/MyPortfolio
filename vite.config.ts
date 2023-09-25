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
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes("node_modules")) {
    //         return id
    //           .toString()
    //           .split("node_modules/")[1]
    //           .split("/")[0]
    //           .toString();
    //       }
    //     },
    //   },
    // },
    chunkSizeWarningLimit: 700,
  },
});
