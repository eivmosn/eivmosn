<script setup lang="ts">
import { reactive, ref } from 'vue'

interface Props {
  glowColor?: string
}

withDefaults(defineProps<Props>(), {
  glowColor: 'rgba(56, 189, 248, 0.3)',
})

const emit = defineEmits(['click'])

const cardRef = ref<HTMLDivElement | null>(null)
const rotation = reactive({ x: 0, y: 0 })
const opacity = ref(0)

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value)
    return

  const rect = cardRef.value.getBoundingClientRect()
  const width = rect.width
  const height = rect.height

  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  const xPct = mouseX / width - 0.5
  const yPct = mouseY / height - 0.5

  // Calculate rotation (limit to small angles for subtle effect)
  rotation.x = yPct * -10 // Rotate X axis based on Y position
  rotation.y = xPct * 10 // Rotate Y axis based on X position

  opacity.value = 1
}

function handleMouseLeave() {
  rotation.x = 0
  rotation.y = 0
  opacity.value = 0
}
</script>

<template>
  <div
    class="perspective-1000 group relative"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @click="emit('click')"
  >
    <div
      ref="cardRef"
      class="preserve-3d transition-transform duration-200 ease-out will-change-transform"
      :style="{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }"
    >
      <!-- Gradient Glow Effect following mouse -->
      <div
        class="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-500 group-hover:opacity-100 z-0"
        :style="{
          opacity,
          background: `radial-gradient(600px circle at 50% 50%, ${glowColor}, transparent 40%)`,
        }"
      />
      <div class="relative z-10 h-full">
        <slot />
      </div>
    </div>
  </div>
</template>
