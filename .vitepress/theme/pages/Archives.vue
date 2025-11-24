<script setup lang="ts">
import type { Post } from '../docs.data'
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Hash,
} from 'lucide-vue-next'
import { useRouter } from 'vitepress'
import { computed, ref } from 'vue'
import Background from '../components/Background.vue'
import Header from '../components/Header.vue'
import { data as posts } from '../docs.data'

const router = useRouter()

// 分页相关配置
const ITEMS_PER_PAGE = 8
const currentPage = ref(1)

// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(posts.length / ITEMS_PER_PAGE)
})

// 计算当前页显示的文章
const currentPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * ITEMS_PER_PAGE
  return posts.slice(startIndex, startIndex + ITEMS_PER_PAGE)
})

// 修改当前页
function setCurrentPage(page: number) {
  currentPage.value = page
}

// 文章点击处理（可根据实际需求修改逻辑，比如跳转路由）
function handlePostClick(post: Post) {
  router.go(post.url)
}
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200 font-sans selection:bg-green-500/30 selection:text-green-200">
    <Background />
    <Header />
    <div class="mx-auto max-w-5xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <!-- Header -->
      <div class="mb-12 border-b border-slate-800 pb-8">
        <h1 class="text-4xl font-bold text-white mb-4">
          System Archives
        </h1>
        <p class="text-slate-400 font-mono text-sm">
          > ACCESSING_FULL_DATABASE...<br>
          > {{ posts.length }} RECORDS_FOUND
        </p>
      </div>

      <!-- List -->
      <div class="space-y-4">
        <div
          v-for="post in currentPosts"
          :key="post.url"
          class="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-900/60 hover:border-green-500/30 transition-all cursor-pointer overflow-hidden"
          @click="handlePostClick(post)"
        >
          <!-- Hover Glow -->
          <div class="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <!-- Date Column -->
          <div class="sm:w-32 shrink-0 flex flex-col gap-2">
            <span class="font-mono text-xs text-slate-500 flex items-center gap-2">
              <Calendar :size="12" />
              {{ post.date.string }}
            </span>
            <span class="font-mono text-xs text-slate-500 flex items-center gap-2">
              <Clock :size="12" />
              {{ post.readTime }}
            </span>
          </div>

          <!-- Content Column -->
          <div class="flex-1 min-w-0">
            <h3 class="text-xl font-bold text-slate-200 group-hover:text-green-400 transition-colors mb-2 truncate">
              {{ post.title }}
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
              {{ post.summary }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="inline-flex items-center text-[10px] font-medium text-slate-500 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded"
              >
                <Hash :size="10" class="mr-1 opacity-50" />
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Action Arrow -->
          <div class="hidden sm:flex items-center justify-center w-12 text-slate-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all">
            <ArrowRight :size="20" />
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div
        v-if="totalPages > 1"
        class="mt-12 flex items-center justify-between border-t border-slate-800 pt-6"
      >
        <button
          :disabled="currentPage === 1"
          class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          @click="setCurrentPage(currentPage - 1)"
        >
          <ChevronLeft :size="16" />
          PREV
        </button>

        <div class="flex items-center gap-2">
          <button
            v-for="(page, i) in totalPages"
            :key="i"
            :class="`h-8 w-8 rounded flex items-center justify-center text-xs font-mono transition-all ${
              currentPage === i + 1
                ? 'bg-green-500 text-slate-950 font-bold'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-600'
            }`"
            @click="setCurrentPage(i + 1)"
          >
            {{ i + 1 }}
          </button>
        </div>

        <button
          :disabled="currentPage === totalPages"
          class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          @click="setCurrentPage(currentPage + 1)"
        >
          NEXT
          <ChevronRight :size="16" />
        </button>
      </div>
    </div>
  </div>
</template>
