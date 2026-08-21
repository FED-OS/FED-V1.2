import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/FED-V1.2/',
  plugins: [react()],
});
