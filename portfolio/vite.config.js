import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: "/", // Important for static asset paths
  build: {
    outDir: "dist", 
  },
});
