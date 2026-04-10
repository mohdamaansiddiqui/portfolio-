import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three'],
          fiber: ['@react-three/fiber'],
          drei: ['@react-three/drei', '@react-three/postprocessing'],
          physics: ['@react-three/cannon', '@react-three/rapier'],
          gsap: ['gsap', '@gsap/react'],
          ui: ['react-icons', 'react-fast-marquee'],
        },
      },
    },
  },
});
