<script setup lang="ts">
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Hash,
} from 'lucide-vue-next'
import { computed, ref } from 'vue'
import Background from '../components/Background.vue'
import Header from '../components/Header.vue'

// 定义 BlogPost 类型
interface BlogPost {
  id: string | number
  title: string
  summary: string
  date: string
  readTime: string
  tags: string[]
}

// 直接在组件内定义模拟文章数据（可根据实际需求修改）
const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Vue 3 组合式 API 完全指南',
    summary: '深入讲解 Vue 3 组合式 API 的核心概念、使用场景和最佳实践，帮助你写出更优雅、可维护的 Vue 代码',
    date: '2024-11-20',
    readTime: '12 min read',
    tags: ['vue3', 'composition-api', '前端'],
  },
  {
    id: 2,
    title: 'Tailwind CSS 高级技巧与性能优化',
    summary: '探索 Tailwind CSS 的高级用法，包括自定义主题、插件开发、JIT 模式优化以及生产环境性能调优',
    date: '2024-11-15',
    readTime: '8 min read',
    tags: ['tailwindcss', 'css', '性能优化'],
  },
  {
    id: 3,
    title: 'TypeScript 类型体操实战教程',
    summary: '通过实际案例掌握 TypeScript 高级类型特性，包括泛型、条件类型、映射类型等，提升类型定义能力',
    date: '2024-11-10',
    readTime: '15 min read',
    tags: ['typescript', '类型系统', '前端工程化'],
  },
  {
    id: 4,
    title: 'Nuxt 4 最新特性与项目实战',
    summary: '体验 Nuxt 4 的全新功能，包括服务器组件、自动导入优化、路由改进等，从零构建一个生产级应用',
    date: '2024-11-05',
    readTime: '20 min read',
    tags: ['nuxt', 'vue3', '服务端渲染'],
  },
  {
    id: 5,
    title: '前端状态管理方案对比：Pinia vs Vuex vs Zustand',
    summary: '详细对比主流前端状态管理库的优缺点、适用场景和性能表现，帮助你选择最合适的状态管理方案',
    date: '2024-10-30',
    readTime: '10 min read',
    tags: ['状态管理', 'pinia', 'vuex', 'zustand'],
  },
  {
    id: 6,
    title: 'Web 性能优化核心指标与实践',
    summary: '深入理解 Core Web Vitals 核心指标，掌握图片优化、代码分割、懒加载等实用性能优化技巧',
    date: '2024-10-25',
    readTime: '14 min read',
    tags: ['性能优化', 'web', '前端架构'],
  },
  {
    id: 7,
    title: 'Vue 组件设计模式与复用技巧',
    summary: '学习常用的 Vue 组件设计模式，包括高阶组件、组合式函数、插槽封装等，提升组件复用性',
    date: '2024-10-20',
    readTime: '9 min read',
    tags: ['vue3', '组件设计', '前端架构'],
  },
  {
    id: 8,
    title: 'ES6+ 新特性全解析（2024 版）',
    summary: '全面梳理 ES6 及后续版本的重要特性，包括可选链、空值合并、私有字段、顶层 await 等实用功能',
    date: '2024-10-15',
    readTime: '11 min read',
    tags: ['javascript', 'es6+', '前端基础'],
  },
  {
    id: 9,
    title: '前端测试入门：Vitest + Testing Library',
    summary: '从零开始学习前端测试，掌握单元测试、组件测试的核心概念和实践方法，提升代码质量',
    date: '2024-10-10',
    readTime: '16 min read',
    tags: ['测试', 'vitest', '前端工程化'],
  },
  {
    id: 10,
    title: 'CSS 新特性实战：Grid 与 Flex 高级布局',
    summary: '利用 CSS Grid 和 Flexbox 实现复杂布局，包括响应式设计、卡片布局、瀑布流等实际应用场景',
    date: '2024-10-05',
    readTime: '7 min read',
    tags: ['css', 'grid', 'flexbox', '响应式'],
  },
]

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
function handlePostClick(_post: BlogPost) {
  // 这里可以添加跳转逻辑，例如：
  // router.push(`/articles/${post.id}`)
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
          :key="post.id"
          class="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-900/60 hover:border-green-500/30 transition-all cursor-pointer overflow-hidden"
          @click="handlePostClick(post)"
        >
          <!-- Hover Glow -->
          <div class="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <!-- Date Column -->
          <div class="sm:w-32 shrink-0 flex flex-col gap-2">
            <span class="font-mono text-xs text-slate-500 flex items-center gap-2">
              <Calendar :size="12" />
              {{ post.date }}
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

<style scoped>
/* 保持原有样式不变，如需自定义可在此添加 */
</style>
