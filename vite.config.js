import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/HES/', // Set this to your GitHub repo name with slashes
  build: {
    outDir: 'dist' // This is Vite's default, make sure it matches your deploy script
  }
})
