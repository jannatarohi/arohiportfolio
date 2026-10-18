import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // এই লাইনটি যোগ করুন

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // এই ফাংশনটি এখানে যুক্ত করুন
  ],
})
