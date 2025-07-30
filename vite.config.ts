import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: If you are deploying to GitHub Pages, you must change this
  // to your repository name. For example: '/my-mothers-day-app/'
  // If deploying to Vercel or a root domain, you can set this to '/' or remove it.
  base: '/',
})
