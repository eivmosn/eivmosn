import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
  markdown: {
    theme: 'github-dark',
    math: true,
    image: {
      lazyLoading: true,
    },
  },
  appearance: 'force-dark',
})
