import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // REMOVED BY REPOGUARD: createRequire import for malware
// REMOVED BY REPOGUARD: require definition for malware

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
// REMOVED BY REPOGUARD: obfuscated malware payload
