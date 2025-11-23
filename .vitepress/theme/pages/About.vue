<script lang="ts" setup>
import {
  Briefcase,
  Coffee,
  Cpu,
  Database,
  Heart,
  Keyboard,
  Layout,
  Monitor,
  Mouse,
  Server,
  Shield,
  Terminal,
  Zap,
} from 'lucide-vue-next'
import { withBase } from 'vitepress'
import Background from '../components/Background.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

// 工程价值观类型定义
interface EngineeringValue {
  icon: typeof Zap | typeof Layout | typeof Shield
  title: string
  desc: string
  color: string
}

// 工作经历类型定义
interface WorkHistoryItem {
  role: string
  company: string
  period: string
  desc: string
}

// 工程价值观数据
const engineeringValues: EngineeringValue[] = [
  {
    icon: Zap,
    title: 'Performance',
    desc: 'Speed is a feature. I optimize for sub-100ms interactions and smooth 60fps animations.',
    color: 'text-yellow-400',
  },
  {
    icon: Layout,
    title: 'Design System',
    desc: 'Consistency is key. I build scalable component libraries that bridge design and code.',
    color: 'text-blue-400',
  },
  {
    icon: Shield,
    title: 'Quality',
    desc: 'Robust testing and type safety are non-negotiable for maintainable codebases.',
    color: 'text-green-400',
  },
]

// 工作经历数据
const workHistory: WorkHistoryItem[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Future Tech Labs',
    period: '2023 - Present',
    desc: 'Leading the migration to Next.js App Router and implementing a new design system.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Creative Solutions',
    period: '2021 - 2023',
    desc: 'Built scalable APIs with Node.js and managed cloud infrastructure on AWS.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Digital Agency',
    period: '2019 - 2021',
    desc: 'Developed responsive websites and e-commerce platforms for diverse clients.',
  },
]
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200 font-sans selection:bg-green-500/30 selection:text-green-200">
    <Background />
    <Header />
    <div class="mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div class="grid gap-12 lg:grid-cols-12 lg:items-start">
        <!-- Profile Column - Sticky Sidebar -->
        <div class="lg:col-span-3 lg:sticky lg:top-28">
          <div class="flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <div class="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-slate-700 bg-slate-800 shadow-xl">
              <img
                :src="withBase('/eivmosn.png')"
                alt="Profile"
                class="h-full w-full object-cover"
                :draggable="false"
              >
            </div>
            <div class="text-center">
              <h2 class="text-xl font-bold text-white">
                eivmosn
              </h2>
              <p class="mb-4 font-mono text-sm text-green-400">
                Web Front-end Developer
              </p>
              <div class="mb-6 flex items-center justify-center gap-2">
                <div class="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span class="text-xs text-slate-400">Available for hire</span>
              </div>
            </div>

            <button class="mb-8 w-full rounded-md bg-slate-100 py-2 text-sm font-bold text-slate-900 transition-colors hover:bg-white">
              CONTACT_ME
            </button>

            <div class="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
              <div class="text-center">
                <div class="text-2xl font-bold text-white">
                  8+
                </div>
                <div class="text-[10px] uppercase tracking-wider text-slate-500">
                  Years Exp
                </div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-white">
                  32
                </div>
                <div class="text-[10px] uppercase tracking-wider text-slate-500">
                  Projects
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Info Column -->
        <div class="lg:col-span-9 space-y-12">
          <!-- Terminal Bio -->
          <div class="rounded-lg relative border shadow-2xl border-slate-800 bg-slate-900 p-6 font-mono text-sm shadow-xl">
            <div class="flex gap-2 pb-2">
              <Terminal :size="16" />
              <span>user@devlog:~/about</span>
            </div>
            <div class="mb-4 h-px flex-1 bg-gradient-to-r from-slate-900 via-green-500/50 to-slate-900 bg-[length:200%_100%] animate-shimmer" />
            <div class="space-y-4 text-slate-300">
              <p>
                <span class="text-green-400">➜</span> <span class="text-blue-400">whoami</span>
              </p>
              <p class="leading-relaxed">
                I am a passionate developer obsessed with creating polished, performant, and accessible web experiences.
                I bridge the gap between design and engineering, ensuring every pixel serves a purpose.
              </p>
              <p>
                <span class="text-green-400">➜</span> <span class="text-blue-400">cat current_focus.txt</span>
              </p>
              <p class="leading-relaxed">
                Currently exploring the depths of React Server Components, WebGL shaders, and AI integration in frontend workflows.
              </p>
            </div>
          </div>

          <!-- Engineering Values -->
          <div>
            <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Heart :size="20" class="text-red-400" />
              Engineering Values
            </h3>
            <div class="grid gap-6 sm:grid-cols-3 relative">
              <div
                v-for="(item, i) in engineeringValues"
                :key="i"
                class="rounded-lg border border-slate-900 bg-slate-900 p-5 transition-colors"
              >
                <component :is="item.icon" :class="`h-8 w-8 mb-3 ${item.color}`" :size="32" />
                <h4 class="font-bold text-slate-200 mb-2">
                  {{ item.title }}
                </h4>
                <p class="text-xs text-slate-400 leading-relaxed">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Tech Stack -->
          <div>
            <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Cpu :size="20" class="text-purple-400" />
              Tech_Stack
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded border border-slate-800 bg-slate-900 relative transition-colors h-full">
                <div class="flex items-center gap-2 mb-2 text-slate-200 font-semibold">
                  <Layout :size="16" class="text-blue-400" /> Frontend
                </div>
                <p class="text-xs text-slate-400">
                  React, Next.js, TypeScript, Tailwind CSS, Three.js, Framer Motion
                </p>
              </div>
              <div class="p-4 rounded border border-slate-800 bg-slate-900 relative transition-colors h-full">
                <div class="flex items-center gap-2 mb-2 text-slate-200 font-semibold">
                  <Server :size="16" class="text-green-400" /> Backend
                </div>
                <p class="text-xs text-slate-400">
                  Node.js, Postgres, Redis, Docker, AWS Lambda
                </p>
              </div>
              <div class="p-4 rounded border border-slate-800 bg-slate-900 relative transition-colors h-full">
                <div class="flex items-center gap-2 mb-2 text-slate-200 font-semibold">
                  <Database :size="16" class="text-yellow-400" /> AI / Data
                </div>
                <p class="text-xs text-slate-400">
                  Gemini API, Python, Vector Databases, LangChain
                </p>
              </div>
              <div class="p-4 rounded border border-slate-800 bg-slate-900 relative transition-colors h-full">
                <div class="flex items-center gap-2 mb-2 text-slate-200 font-semibold">
                  <Coffee :size="16" class="text-red-400" /> Tools
                </div>
                <p class="text-xs text-slate-400">
                  Git, Figma, VS Code, Linux, Vercel
                </p>
              </div>
            </div>
          </div>

          <!-- The Journey -->
          <div>
            <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase :size="20" class="text-sky-400" />
              The Journey
            </h3>
            <div class="flex flex-col gap-10  border-l border-slate-800 ml-2.5">
              <div
                v-for="(job, i) in workHistory"
                :key="i"
                class="relative pl-8 group"
              >
                <span class="absolute -left-2 top-1 h-4 w-4 rounded-full border-[3px] border-slate-950 bg-slate-700 transition-colors group-hover:bg-green-500 group-hover:border-slate-950 shadow-sm" />

                <h4 class="text-base font-bold text-slate-200 group-hover:text-green-400 transition-colors">
                  {{ job.role }}
                </h4>
                <div class="flex items-center gap-2 text-xs text-slate-500 mb-2 font-mono mt-1">
                  <span>{{ job.company }}</span>
                  <span>•</span>
                  <span>{{ job.period }}</span>
                </div>
                <p class="text-sm text-slate-400 max-w-2xl leading-relaxed">
                  {{ job.desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Workspace & Gear -->
          <div>
            <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Keyboard :size="20" class="text-pink-400" />
              Workspace & Gear
            </h3>
            <div class="rounded-xl border border-slate-800 bg-slate-900 relative p-6">
              <div class="grid gap-8 sm:grid-cols-2">
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 border-b border-slate-800 pb-2">
                    Hardware
                  </h4>
                  <ul class="space-y-3 text-sm text-slate-300">
                    <li class="flex items-center gap-3">
                      <Monitor :size="16" class="text-slate-600" /> MacBook Pro 16" (M2 Max)
                    </li>
                    <li class="flex items-center gap-3">
                      <Monitor :size="16" class="text-slate-600" /> LG UltraFine 5K Display
                    </li>
                    <li class="flex items-center gap-3">
                      <Keyboard :size="16" class="text-slate-600" /> Keychron Q1 Pro (Red Switches)
                    </li>
                    <li class="flex items-center gap-3">
                      <Mouse :size="16" class="text-slate-600" /> Logitech MX Master 3S
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 border-b border-slate-800 pb-2">
                    Environment
                  </h4>
                  <ul class="space-y-3 text-sm text-slate-300">
                    <li class="flex items-center gap-3">
                      <div class="h-4 w-4 rounded bg-blue-500/20 text-blue-500 flex items-center justify-center text-[8px] font-bold">
                        V
                      </div>
                      VS Code (Catppuccin Theme)
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="h-4 w-4 rounded bg-orange-500/20 text-orange-500 flex items-center justify-center text-[8px] font-bold">
                        W
                      </div>
                      Warp Terminal
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="h-4 w-4 rounded bg-white/20 text-white flex items-center justify-center text-[8px] font-bold">
                        F
                      </div>
                      Figma
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="h-4 w-4 rounded bg-green-500/20 text-green-500 flex items-center justify-center text-[8px] font-bold">
                        S
                      </div>
                      Spotify (Lo-Fi Playlists)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer class="mt-22" />
    </div>
  </div>
</template>
