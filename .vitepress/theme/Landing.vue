<script setup lang="ts">
import { useRouter } from 'vitepress'
import ArticleCard from './components/ArticleCard.vue'
import Background from './components/Background.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
// import TechStack from './components/TechStack.vue'
import TechStackMore from './components/TechStackMore.vue'

const router = useRouter()
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200 font-sans selection:bg-green-500/30 selection:text-green-200">
    <Background />
    <Header />
    <main class="relative z-10 mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
      <HeroSection />
      <!-- <TechStack /> -->
      <TechStackMore />
      <section class="mb-32">
        <div class="mb-12 flex items-end justify-between">
          <div>
            <h2 class="text-3xl font-bold text-white">
              Latest Transmissions
            </h2>
            <p class="mt-2 text-slate-400">
              Insights from the codebase.
            </p>
          </div>
          <div class="hidden h-px flex-1 mx-8 sm:block bg-gradient-to-r from-slate-900 via-green-500/50 to-slate-900 bg-[length:200%_100%] animate-shimmer" />
          <button class="text-sm font-mono text-slate-500 hover:text-white">
            VIEW_ALL_LOGS()
          </button>
        </div>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ArticleCard v-for="value in 6" :key="value" @click="router.go('/api-examples')" />
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>
