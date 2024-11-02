import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  base: '/Speedboat-qna',
  resolve: {
    alias: {
      src: '/src', 
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js', 
    exclude: [...configDefaults.exclude, 'e2e/*'],
  },
});
