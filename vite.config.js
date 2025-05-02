import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
  ,tailwindcss({
    darkMode: 'class', 
    // config: {
      // content: [
      //   "./index.html",
      //   "./src/**/*.{js,ts,jsx,tsx}",
      // ],
      // theme: {
      //   extend: {
      //     colors: {
      //       dark: {
      //         900: '#Ffbf00',
      //         800: '#Ffbf00',
      //         // etc...
      //       }
      //     }
      //   }
      // }
    // }
  })
  ],
})
