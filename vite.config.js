import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/aprendendo-React/',  // Adicione esta linha
  plugins: [react()],
});