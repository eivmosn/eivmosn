import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import { initOverlayScrollbars } from './utils'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import 'github-markdown-css/github-markdown-dark.css'
import 'overlayscrollbars/overlayscrollbars.css'
import './style.css'

initOverlayScrollbars()

export default {
  Layout,
} satisfies Theme
