import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss';
import uni from '@dcloudio/vite-plugin-uni'
import uniTailwind from '@uni-helper/vite-plugin-uni-tailwind';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),uniTailwind()
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ]
    }
  }
})
