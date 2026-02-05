import { defineConfig } from 'vite'
// https://vitejs.dev/config/
  // Use a relative base so the build works on GitHub Pages (and any sub-path) without extra config.
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MyPortfolio/'
})