import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import webExtension from 'vite-plugin-web-extension'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    webExtension(),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './',
}) 