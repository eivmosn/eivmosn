<script setup lang="ts">
import { ArrowLeft, Calendar, Clock, Share2, User } from 'lucide-vue-next'
import Background from '../components/Background.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200 font-sans selection:bg-green-500/30 selection:text-green-200">
    <Background />
    <Header />
    <main class="relative z-10">
      <div class="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div class="mb-8 flex items-center justify-between">
          <button
            class="group flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm text-slate-400 backdrop-blur-sm transition-all hover:border-slate-600 hover:text-white"
          >
            <ArrowLeft :size="16" class="transition-transform group-hover:-translate-x-1" />
            BACK_TO_ROOT
          </button>

          <div class="flex gap-2">
            <button class="rounded-lg border border-slate-800 bg-slate-900/50 p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <Share2 :size="18" />
            </button>
          </div>
        </div>
        <div class="mb-12">
          <div class="mb-6 flex flex-wrap gap-2">
            <span v-for="tag in 4" :key="tag" class="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
              #React
            </span>
          </div>
          <h1 class="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Understanding React Server Components
          </h1>
          <div class="flex flex-wrap items-center gap-6 text-sm text-slate-400 border-b border-slate-800 pb-8">
            <div class="flex items-center gap-2">
              <div class="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <User :size="14" class-name="text-slate-300" />
              </div>
              <span>DevLog AI</span>
            </div>
            <div class="flex items-center gap-2">
              <Calendar :size="16" />
              <span>2024-10-12</span>
            </div>
            <div class="flex items-center gap-2">
              <Clock :size="16" />
              <span>4min read</span>
            </div>
          </div>
        </div>
        <div class="mb-12 aspect-video w-full overflow-hidden rounded-2xl border border-slate-800" glow-color="rgba(34, 197, 94, 0.2)">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            class="h-full w-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
        </div>
        <div class="mx-auto max-w-3xl">
          <slot />
          <div class="mt-16 border-t border-slate-800 pt-8 text-center">
            <p class="text-slate-500 mb-4">
              Enjoyed this transmission?
            </p>
            <div class="inline-flex gap-4">
              <button class="rounded-md border border-slate-700 bg-slate-800 px-6 py-2 text-sm font-semibold text-white hover:bg-slate-700 transition-colors">
                SUBSCRIBE_NEWSLETTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
