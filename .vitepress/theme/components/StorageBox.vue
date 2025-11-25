<script setup lang="ts">
import { Disc, Gamepad2 } from 'lucide-vue-next'

export interface StorageItem {
  id: string
  title: string
  desc: string
  image: string
  type: 'game' | 'music'
  style: {
    top?: string
    left?: string
    right?: string
    bottom?: string
    transform: string
    zIndex: number
  }
}

interface Props {
  title: string
  items: StorageItem[]
  type: 'game' | 'music'
}

defineProps<Props>()
</script>

<template>
  <div class="relative group/box w-full max-w-md mx-auto mt-6">
    <!-- Sci-Fi System Label -->
    <div class="absolute -top-3 left-4 z-30">
      <div class="bg-slate-900 border b-rd-4 border-green-500/30 text-green-400 px-3 py-1.4 text-[10px] font-bold font-mono uppercase tracking-widest shadow-[0_0_10px_rgba(34,197,94,0.2)] flex items-center gap-2 backdrop-blur-md">
        <component :is="type === 'game' ? Gamepad2 : Disc" :size="18" />
        {{ title }}
      </div>
    </div>

    <!-- Main Container - Digital Crate Look -->
    <div class="relative w-full h-72 rounded-lg bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden transition-all duration-300">
      <!-- Items Collection -->
      <div class="absolute inset-4 overflow-hidden">
        <div class="relative w-full h-full">
          <div
            v-for="item in items"
            :key="item.id"
            class="absolute cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:z-30 hover:rotate-0 hover:-translate-y-2 group shadow-lg"
            :style="{
              ...item.style,
              width: type === 'game' ? '90px' : '100px',
              height: type === 'game' ? '120px' : '100px',
            }"
          >
            <div
              class="relative h-full w-full overflow-hidden bg-slate-800 transition-all duration-300 border border-slate-600/50"
              :class="type === 'music' ? 'rounded-sm' : 'rounded'"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
