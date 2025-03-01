import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default Vite port, change if needed
  },
  build: {
    outDir: "dist", // Ensures output goes to dist folder
  },
});
