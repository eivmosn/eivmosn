<script setup lang="ts">
import { Cpu, Globe, Layers, Zap } from 'lucide-vue-next'
</script>

<template>
  <section class="mb-32 border-y border-slate-800/50 py-10">
    <div class="flex flex-wrap justify-center gap-12 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
      <div class="flex items-center gap-3">
        <Globe class="h-6 w-6 text-blue-400" />
        <span class="font-mono text-sm">REACT.JS</span>
      </div>
      <div class="flex items-center gap-3">
        <Zap class="h-6 w-6 text-yellow-400" />
        <span class="font-mono text-sm">NEXT.JS</span>
      </div>
      <div class="flex items-center gap-3">
        <Layers class="h-6 w-6 text-purple-400" />
        <span class="font-mono text-sm">THREE.JS</span>
      </div>
      <div class="flex items-center gap-3">
        <Cpu class="h-6 w-6 text-green-400" />
        <span class="font-mono text-sm">NODE.JS</span>
      </div>
    </div>
  </section>
</template>
