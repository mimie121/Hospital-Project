import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/hospital-project/",  
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
});
