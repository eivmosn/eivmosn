<script setup lang="ts">
import TiltCard from './TiltCard.vue'

const emit = defineEmits(['click'])
</script>

<template>
  <TiltCard class="h-full" glow-color="rgba(34, 197, 94, 0.2)" @click="emit('click')">
    <article class="flex h-full flex-col overflow-hidden rounded-md border border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-600">
      <div class="relative h-48 w-full overflow-hidden bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          class="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        <div class="absolute bottom-3 left-4 flex gap-2">
          <span class="rounded bg-slate-950/80 border border-slate-700 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-green-400">
            DevOps
          </span>
        </div>
      </div>
      <div class="flex flex-1 flex-col justify-between p-6 pt-4">
        <div>
          <h3 class="mb-3 text-xl font-bold text-slate-100 line-clamp-2">
            Code as Infrastructure
          </h3>
          <p class="mb-4 text-sm leading-relaxed text-slate-400 line-clamp-3">
            Managing cloud resources with the same rigor and tooling as application code.
          </p>
        </div>

        <div class="mt-4 flex items-center justify-between border-t border-slate-800 pt-4 text-xs font-medium text-slate-500 font-mono">
          <span>2023-10-01</span>
          <span class="flex items-center gap-1">
            4 min READ
          </span>
        </div>
      </div>
    </article>
  </TiltCard>
</template>
