import type { Theme } from 'vitepress'
import Layout from './Layout.vue'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './style.css'

export default {
  Layout,
} satisfies Theme
