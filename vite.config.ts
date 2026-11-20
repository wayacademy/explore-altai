import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// base: './' keeps every asset path relative, so the build runs from any folder
// (an artifact preview, Vercel, or plain static hosting).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: { assetsInlineLimit: 0 },
});
