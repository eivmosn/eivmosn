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
    codeCopyButtonTitle: '复制',
    theme: 'github-dark',
  },
})
