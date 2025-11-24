import dayjs from 'dayjs'
import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  summary?: string
  readTime?: number
  tags?: string[]
}

declare const data: Post[]
export { data }

export default createContentLoader('**/*.md', {
  transform(raw): Post[] {
    return raw
      .filter(item => item.frontmatter.layout && item.frontmatter.layout === 'article')
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        summary: frontmatter.summary,
        readTime: frontmatter.readTime,
        date: formatDate(frontmatter.date),
        tags: frontmatter.tags ? frontmatter.tags.split(',') : [],
      }))
      .sort((a, b) => b.date.time - a.date.time)
  },
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: dayjs(date).format('YYYY-MM-DD'),
  }
}
