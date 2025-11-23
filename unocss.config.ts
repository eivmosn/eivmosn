import { defineConfig, presetWind3, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  shortcuts: {
    btn: 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700',
  },
  theme: {
    animation: {
      keyframes: {
        shimmer: '{0% {background-position: 200% 0} 100% {background-position: -200% 0}}',
      },
      counts: {
        shimmer: 'infinite',
      },
      durations: {
        shimmer: '3s',
      },
      timingFns: {
        shimmer: 'linear',
      },
    },
  },
})
