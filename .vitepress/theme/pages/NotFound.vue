<script setup lang="ts">
import { AlertTriangle, Home } from 'lucide-vue-next'
import Background from '../components/Background.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <div
    class="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200 font-sans selection:bg-green-500/30 selection:text-green-200"
  >
    <Background />
    <Header />
    <main class="relative z-10 mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
      <div
        class="flex min-h-[50vh] flex-col items-center pb-32 justify-center px-4 text-center duration-700"
      >
        <div
          class="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 animate-pulse"
        >
          <AlertTriangle class="h-12 w-12 text-red-500" />
        </div>

        <h1 class="mb-2 text-6xl font-bold tracking-tighter text-white sm:text-8xl opacity-90">
          404
        </h1>

        <p class="mb-8 text-xl text-slate-400 font-mono tracking-wide">
          ERROR: DATA_FRAGMENT_MISSING
        </p>

        <div
          class="max-w-md w-full border border-red-900/50 bg-red-950/10 p-6 rounded-lg mb-10 text-left font-mono text-sm text-red-200 shadow-2xl shadow-red-900/20 backdrop-blur-sm"
        >
          <div class="space-y-2 opacity-80">
            <p>> DIAGNOSTIC RUNNING...</p>
            <p>> SEARCHING SECTOR 7G... <span class="text-red-400">[FAILED]</span></p>
            <p>> MEMORY ADDRESS 0x000000 UNREACHABLE</p>
            <p class="animate-pulse">
              > FATAL EXCEPTION: CONTENT_NOT_FOUND_
            </p>
          </div>
        </div>

        <button
          class="group flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/80 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-700 hover:border-slate-500 transition-all hover:shadow-lg hover:shadow-slate-800/50"
        >
          <Home :size="18" class="group-hover:-translate-x-1 transition-transform" />
          RETURN_TO_ROOT
        </button>
      </div>
      <Footer />
    </main>
  </div>
</template>
