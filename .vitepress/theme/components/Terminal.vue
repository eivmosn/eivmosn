<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const text = ref('')
const fullText = '> connecting to neural_link...\n> access granted.\n> welcome, traveler.'

let timer: number | null = null

onMounted(() => {
  let index = 0
  timer = window.setInterval(() => {
    text.value += fullText.charAt(index)
    index++
    if (index === fullText.length) {
      if (timer)
        clearInterval(timer)
    }
  }, 50)
})

onUnmounted(() => {
  if (timer)
    clearInterval(timer)
})
</script>

<template>
  <div class="w-full max-w-lg rounded-lg border border-slate-800 bg-slate-950/90 p-4 font-mono text-sm shadow-2xl backdrop-blur-sm">
    <div class="mb-2 flex space-x-2">
      <div class="h-3 w-3 rounded-full bg-red-500/50" />
      <div class="h-3 w-3 rounded-full bg-yellow-500/50" />
      <div class="h-3 w-3 rounded-full bg-green-500/50" />
    </div>
    <div class="min-h-[80px] whitespace-pre-wrap text-slate-300">
      {{ text }}
      <span class="animate-pulse text-green-500">_</span>
    </div>
  </div>
</template>
