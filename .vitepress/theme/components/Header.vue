<script setup lang="ts">
import { Code2, Github, Home, Package2, Twitter, User2 } from 'lucide-vue-next'
import { useRouter } from 'vitepress'

const router = useRouter()

function handleClick(path: string) {
  router.go(path)
}
</script>

<template>
  <header class="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded border border-slate-700 bg-slate-900 text-green-400">
          <Code2 :size="20" />
        </div>
        <span class="bg-gradient-to-r from-slate-100 to-slate-500 bg-clip-text text-lg font-bold text-transparent">
          DEV.LOG
        </span>
      </div>

      <nav class="hidden md:block">
        <ul class="flex gap-8 text-sm font-medium text-slate-400">
          <li class="cursor-pointer transition-colors hover:text-white flex items-center gap-2" @click="handleClick('/')">
            <Home :size="20" />
            主页
          </li>
          <li class="cursor-pointer transition-colors hover:text-white flex items-center gap-2" @click="handleClick('archives')">
            <Package2 :size="20" />
            归档
          </li>
          <li class="cursor-pointer transition-colors hover:text-white flex items-center gap-2" @click="handleClick('about')">
            <User2 :size="20" />
            关于
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-4">
        <a href="#" class="text-slate-400 transition-colors hover:text-white">
          <Github :size="20" />
        </a>
        <a href="#" class="text-slate-400 transition-colors hover:text-white">
          <Twitter :size="20" />
        </a>
        <button class="hidden rounded-md border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 sm:block">
          SUBSCRIBE
        </button>
      </div>
    </div>
  </header>
</template>
