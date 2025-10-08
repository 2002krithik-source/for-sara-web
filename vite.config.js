import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default backend target for proxying API requests in development.
// You can override by setting the BACKEND_URL environment variable, e.g.:
// BACKEND_URL=http://localhost:8080 npm run dev
const backendTarget = process.env.BACKEND_URL || 'http://localhost:8080'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      // Proxy /api requests to the backend during development
      '/api': {
        target: backendTarget,
        changeOrigin: true,
        secure: false,
        // keep the /api prefix - backend controller is listening on /api/users
        rewrite: (path) => path
      }
    }
  }
})
