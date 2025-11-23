<script setup lang="ts">
import { ArrowRight, Cpu } from 'lucide-vue-next'
import Terminal from './Terminal.vue'
import TiltCard from './TiltCard.vue'
</script>

<template>
  <section class="mb-32 grid gap-12 lg:grid-cols-2 lg:items-center">
    <div class="space-y-8">
      <div class="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1 text-xs font-medium text-green-400">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        System Online v2.4.0
      </div>
      <h1 class="text-5xl font-bold tracking-tight text-white sm:text-7xl">
        Crafting logic <br>
        <span class="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          into reality.
        </span>
      </h1>
      <p class="max-w-lg text-lg text-slate-400">
        A digital garden exploring the frontiers of Frontend Development,
        Generative AI, and 3D User Interfaces. Minimalist by design, complex by nature.
      </p>
      <div class="flex gap-4">
        <button class="group flex items-center gap-2 border-b border-green-500 pb-1 text-green-400 transition-all hover:text-green-300">
          Explore Archives
          <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
    <div class="flex justify-center lg:justify-end">
      <TiltCard class="w-full max-w-lg">
        <Terminal />
        <div
          style="transform: translateZ(40px)"
          class="absolute -right-6 -top-6 h-24 w-24 rounded-lg border border-slate-700 bg-slate-900/50 p-4 shadow-xl backdrop-blur-md md:block hidden"
        >
          <Cpu class="h-8 w-8 text-blue-400 mb-2" />
          <div class="h-2 w-12 bg-slate-700 rounded mb-1" />
          <div class="h-2 w-8 bg-slate-700 rounded" />
        </div>
        <div
          style="transform: translateZ(60px)"
          class="absolute -bottom-16 -left-8 h-24 w-32 rounded-lg border border-slate-700 bg-slate-900/50 p-4 shadow-xl backdrop-blur-md md:block hidden"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs text-slate-400">Latency</span>
            <span class="text-xs text-green-400">12ms</span>
          </div>
          <div class="w-full bg-slate-800 rounded-full h-1.5">
            <div class="bg-green-500 h-1.5 rounded-full w-45%" />
          </div>
        </div>
      </TiltCard>
    </div>
  </section>
</template>
