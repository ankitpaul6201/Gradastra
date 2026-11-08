import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      exclude: [
        /_framer-runtime\.js$/,
        /\/framer\/[A-Za-z0-9_-]+\.js$/,
        /\/components\/[A-Za-z0-9_-]+\.js$/,
      ],
    }),
  ],
  server: {
    port: 3000,
    open: false,
  },
});
