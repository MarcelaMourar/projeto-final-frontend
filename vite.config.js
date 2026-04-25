import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/projeto-final-frontend',
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
  },
});
