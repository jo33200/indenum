import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/indenum/',
  resolve: {
    extensions: ['.js', '.jsx'],  // Ajoute les extensions à reconnaître
  },
})
