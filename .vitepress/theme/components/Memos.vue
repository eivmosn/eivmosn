<script setup lang="ts">
import { AlertCircle, CheckCircle, ChevronRight, Hash, Info } from 'lucide-vue-next'
import { computed, ref } from 'vue'

interface Memo {
  id: string
  type: 'info' | 'alert' | 'success'
  title: string
  content: string
  timestamp: string
}

const props = defineProps<CyberMemosProps>()

const MEMOS: Memo[] = [
  {
    id: 'LOG_802',
    type: 'info',
    title: 'System Optimized',
    content: 'Neural link interface calibrated. Latency reduced by 14%. Ready for deep dive sequence.',
    timestamp: 'TODAY 09:14',
  },
  {
    id: 'LOG_803',
    type: 'alert',
    title: 'Memory Spike',
    content: 'Heap usage approaching 85%. Garbage collection advised before running complex shaders.',
    timestamp: 'TODAY 10:30',
  },
  {
    id: 'LOG_804',
    type: 'success',
    title: 'Deploy Complete',
    content: 'Module \'Voxel_Engine_v2\' successfully deployed to production node without errors.',
    timestamp: 'TODAY 11:15',
  },
]

interface CyberMemosProps {
  direction?: 'down' | 'right' | 'left' | 'up'
}

const activeIndex = ref(0)
const isAnimating = ref(false)
const memos = ref(MEMOS) // Wrap MEMOS in a ref

function handleNext() {
  if (isAnimating.value)
    return
  isAnimating.value = true
  setTimeout(() => {
    activeIndex.value = (activeIndex.value + 1) % memos.value.length
    isAnimating.value = false
  }, 300) // Matches animation duration
}

function getTypeConfig(type: Memo['type']) {
  switch (type) {
    case 'alert':
      return {
        border: 'border-red-500/50',
        text: 'text-red-400',
        bg: 'bg-red-950/30',
        icon: AlertCircle,
      }
    case 'success':
      return {
        border: 'border-green-500/50',
        text: 'text-green-400',
        bg: 'bg-green-950/30',
        icon: CheckCircle,
      }
    default:
      return {
        border: 'border-blue-500/50',
        text: 'text-blue-400',
        bg: 'bg-blue-950/30',
        icon: Info,
      }
  }
}

const getExitTransform = computed(() => {
  switch (props.direction) {
    case 'up':
      return 'translateY(-120%) rotate(-5deg)'
    case 'left':
      return 'translateX(-120%) rotate(-5deg)'
    case 'right':
      return 'translateX(120%) rotate(5deg)'
    case 'down':
    default:
      return 'translateY(120%) rotate(5deg)'
  }
})

function getOffset(index: number) {
  return (index - activeIndex.value + memos.value.length) % memos.value.length
}

function getCardStyle(memo: Memo, index: number) {
  const offset = getOffset(index)
  const isTop = offset === 0
  const isExiting = isAnimating.value && isTop

  const stackTransform = `translate(${offset * 10}px, ${offset * 16}px) scale(${1 - offset * 0.05})`

  return {
    zIndex: 20 - offset,
    transform: isExiting ? getExitTransform.value : stackTransform,
    opacity: isExiting ? 0 : 1 - offset * 0.2,
    filter: offset > 0 ? 'brightness(0.6) blur(0.5px)' : 'none',
  }
}
</script>

<template>
  <div class="relative w-full max-w-[300px] mx-auto h-[340px] flex flex-col gap-4 mt-10">
    <!-- Header Controls -->
    <div class="flex items-center justify-between px-1 border-b border-slate-800 pb-2">
      <div class="flex items-center gap-2">
        <Hash :size="14" class="text-slate-600" />
        <span class="text-xs font-mono text-slate-400 font-bold tracking-widest">TODO_LIST</span>
      </div>
      <button
        class="group flex items-center gap-1 text-[10px] font-mono text-green-500 hover:text-green-300 transition-colors bg-green-500/10 px-2 py-1 rounded border border-green-500/20 hover:border-green-500/50"
        @click="handleNext"
      >
        NEXT <ChevronRight :size="10" class="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>

    <!-- Stack Container -->
    <div class="relative flex-1 perspective-1000 group cursor-pointer" @click="handleNext">
      <div
        v-for="(memo, index) in memos"
        :key="memo.id"
        class="absolute inset-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        :style="getCardStyle(memo, index)"
      >
        <div
          class="h-full w-full rounded-lg border bg-slate-900 shadow-2xl relative overflow-hidden flex flex-col"
          :class="{ 'border-slate-700': getOffset(index) === 0, 'border-slate-800': getOffset(index) !== 0 }"
        >
          <!-- Top Stripe -->
          <div class="h-1 w-full opacity-80" :class="getTypeConfig(memo.type).bg.replace('/30', '')" />

          <div class="p-5 flex-1 flex flex-col relative z-10">
            <!-- Meta Header -->
            <div class="flex justify-between items-start mb-4">
              <div
                class="flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded border uppercase"
                :class="[
                  getTypeConfig(memo.type).border,
                  getTypeConfig(memo.type).text,
                  getTypeConfig(memo.type).bg,
                ]"
              >
                <component :is="getTypeConfig(memo.type).icon" :size="14" />
                <span>{{ memo.type }}</span>
              </div>
              <span class="font-mono text-[10px] text-slate-600">{{ memo.id }}</span>
            </div>

            <!-- Content -->
            <div class="flex-1">
              <h4 class="text-slate-200 font-bold mb-2 tracking-tight group-hover:text-white transition-colors">
                {{ memo.title }}
              </h4>
              <p class="text-xs text-slate-400 font-mono leading-relaxed border-l border-slate-700 pl-3">
                {{ memo.content }}
              </p>
            </div>

            <!-- Footer Info -->
            <div class="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
              <span class="text-[10px] text-slate-500 font-mono">{{ memo.timestamp }}</span>

              <!-- Animated Status Dot -->
              <div class="flex gap-1">
                <div class="w-1 h-1 bg-slate-600 rounded-full" />
                <div class="w-1 h-1 bg-slate-600 rounded-full" />
                <div class="w-1 h-1 rounded-full animate-pulse" :class="getTypeConfig(memo.type).text.replace('text-', 'bg-')" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
