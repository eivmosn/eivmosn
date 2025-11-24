<script setup lang="ts">
import type { Post } from '../docs.data'
import dayjs from 'dayjs'
import { useRouter } from 'vitepress'
import TiltCard from './TiltCard.vue'

const { post = {
  title: 'Article Title',
  summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  date: {
    string: dayjs().format('YYY-MM-DD'),
    timestamp: Date.now(),
  },
  readTime: null,
  tags: [],
  url: '/',
} } = defineProps<{
  post?: Post
}>()

const router = useRouter()

function goToPost(url: string) {
  router.go(url)
}
</script>

<template>
  <TiltCard class="h-full" glow-color="rgba(34, 197, 94, 0.2)" @click="goToPost(post?.url)">
    <article class="flex h-full flex-col overflow-hidden rounded-md border border-slate-800 bg-slate-900/80 transition-colors hover:border-slate-600">
      <div class="relative h-48 w-full overflow-hidden bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          class="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        <div class="absolute bottom-3 left-4 flex gap-2">
          <span
            v-for="tag in post.tags" :key="tag" class="rounded bg-slate-950/80 border border-slate-700 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-green-400"
          >
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="flex flex-1 flex-col justify-between p-6 pt-4">
        <div>
          <h3 class="mb-3 text-xl font-bold text-slate-100 line-clamp-2">
            {{ post.title }}
          </h3>
          <p class="mb-4 min-h-12 text-sm leading-relaxed text-slate-400 line-clamp-2">
            {{ post.summary }}
          </p>
        </div>

        <div class="mt-4 flex items-center justify-between border-t border-slate-800 pt-4 text-xs font-medium text-slate-500 font-mono">
          <span>{{ post.date.string }}</span>
          <span class="flex items-center gap-1">
            {{ post.readTime }} min READ
          </span>
        </div>
      </div>
    </article>
  </TiltCard>
</template>
