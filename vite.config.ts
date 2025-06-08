import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          axios: ['axios'],
          emotion: ['@emotion/react', '@emotion/styled'],
          mui: ['@mui/icons-material', '@mui/material'],
          react: ['react', 'react-dom', 'react-router-dom'],
          'react-hook-form': ['react-hook-form', '@hookform/resolvers'],
          zod: ['zod'],
          zustand: ['zustand'],
        },
      },
    },
  },
});
