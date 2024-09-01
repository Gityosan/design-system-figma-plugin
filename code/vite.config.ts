import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
});
