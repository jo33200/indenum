import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/indenum/',
  server:{
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Ajoute les extensions à reconnaître
  },
  esbuild: {
    jsxInject: `import React from 'react'`,  // Pour injecter React automatiquement dans les fichiers .jsx si ce n'est pas fait manuellement
  },
})
