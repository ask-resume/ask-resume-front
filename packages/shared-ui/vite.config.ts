import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
    eslint({
      cache: false,
      fix: true,
      exclude: ['/virtual:/**', 'node_modules/**'],
    }),
  ],
});
