<script setup lang="ts">
import { computed } from 'vue'

const fullYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="border-t border-slate-800 py-12 text-center text-slate-500">
    <p class="mb-4 font-mono text-xs">
      Designed & Built with <span class="text-green-500">React</span> + <span class="text-blue-500">Tailwind</span>
    </p>
    <p class="text-xs">
      © {{ fullYear }} DevLog. All systems normal.
    </p>
  </footer>
</template>
