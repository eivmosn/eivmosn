<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasRef.value as HTMLCanvasElement
  if (!canvas)
    return
  const ctx = canvas.getContext('2d')
  if (!ctx)
    return

  let animationFrameId: number
  let particles: Array<{ x: number, y: number, size: number, speed: number, color: string }> = []

  const colors = ['rgba(74, 222, 128, ', 'rgba(96, 165, 250, '] // Green and Blue

  function resize() {
    const parent = canvas.parentElement
    if (parent) {
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
    }
    initParticles()
  }

  function initParticles() {
    particles = []
    // Calculate density based on width
    const count = Math.floor(canvas.width / 15)

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
  }

  function animate() {
    if (!ctx)
      return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((p) => {
      p.y -= p.speed
      // Reset if goes off top
      if (p.y < 0) {
        p.y = canvas.height
        p.x = Math.random() * canvas.width
      }

      // Opacity based on height (fade out at top)
      // Map y from (height -> 0) to (opacity -> 0)
      // We want bottom (height) to be visible (e.g. 0.5), top (0) to be 0.
      const opacity = (p.y / canvas.height) * 0.5

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `${p.color + opacity})`
      ctx.fill()
    })

    animationFrameId = requestAnimationFrame(animate)
  }

  window.addEventListener('resize', resize)
  resize()
  animate()

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    cancelAnimationFrame(animationFrameId)
  })
})
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 pointer-events-none" />
</template>
