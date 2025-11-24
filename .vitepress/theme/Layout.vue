<script setup lang="ts">
import { useData } from 'vitepress'
import Landing from './Landing.vue'
import About from './pages/About.vue'
import Archives from './pages/Archives.vue'
import ArticleView from './pages/ArticleView.vue'
import NotFound from './pages/NotFound.vue'

const { frontmatter, page } = useData()
</script>

<template>
  <NotFound v-if="page.isNotFound" />
  <Landing v-if="frontmatter.layout === 'home'" />
  <About v-if="frontmatter.layout === 'about'" />
  <Archives v-if="frontmatter.layout === 'archives'" />
  <ArticleView v-if="frontmatter.layout === 'article'">
    <Content class="markdown-content markdown-body" />
  </ArticleView>
</template>
