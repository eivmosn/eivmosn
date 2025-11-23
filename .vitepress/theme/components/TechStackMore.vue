<script setup lang="ts">
import { Database, Globe, Layers, Server, Zap } from 'lucide-vue-next'
</script>

<template>
  <section class="mb-32 relative">
    <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-950 px-4 z-10">
      <span class="font-mono text-xs font-bold tracking-[0.3em] text-cyan-500 uppercase">/// System_Modules</span>
    </div>

    <div class="border-y border-slate-800/50 py-12 bg-slate-900/20">
      <div class="flex flex-wrap justify-center gap-12 md:gap-20 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
        <div class="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
          <Globe class="h-8 w-8 text-slate-300 group-hover:text-blue-400" />
          <span class="font-mono text-xs text-slate-500 group-hover:text-blue-400">REACT</span>
        </div>
        <div class="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
          <Zap class="h-8 w-8 text-slate-300 group-hover:text-yellow-400" />
          <span class="font-mono text-xs text-slate-500 group-hover:text-yellow-400">NEXT.JS</span>
        </div>
        <div class="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
          <Layers class="h-8 w-8 text-slate-300 group-hover:text-purple-400" />
          <span class="font-mono text-xs text-slate-500 group-hover:text-purple-400">THREE.JS</span>
        </div>
        <div class="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
          <Server class="h-8 w-8 text-slate-300 group-hover:text-cyan-400" />
          <span class="font-mono text-xs text-slate-500 group-hover:text-cyan-300">NODE</span>
        </div>
        <div class="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
          <Database class="h-8 w-8 text-slate-300 group-hover:text-cyan-400" />
          <span class="font-mono text-xs text-slate-500 group-hover:text-cyan-300">SQL</span>
        </div>
      </div>
    </div>
  </section>
</template>
