<script setup lang="ts">
import { useData } from 'vitepress'
import Landing from './Landing.vue'
import ArticleView from './pages/ArticleView.vue'
import NotFound from './pages/NotFound.vue'

const { frontmatter, page } = useData()
</script>

<template>
  <Landing v-if="frontmatter.home" />
  <NotFound v-if="page.isNotFound" />
  <ArticleView v-if="frontmatter.article">
    <Content class="markdown-content markdown-body" />
  </ArticleView>
</template>
