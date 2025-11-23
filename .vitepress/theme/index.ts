import type { Theme } from 'vitepress'
import Layout from './Layout.vue'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import 'github-markdown-css/github-markdown-dark.css'
import './style.css'

export default {
  Layout,
  enhanceApp() {

  },
} satisfies Theme
