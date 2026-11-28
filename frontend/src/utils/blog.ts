import type { BlogPost } from '../data/blogPosts'

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80)

export const readingMinutes = (post: BlogPost) => {
  const text = [
    ...post.intro,
    ...post.sections.flatMap((s) => [s.heading, ...(s.paragraphs ?? []), ...(s.bullets ?? [])]),
    ...post.faqs.flatMap((f) => [f.question, f.answer]),
    ...post.closing,
  ].join(' ')
  return Math.max(3, Math.round(text.split(/\s+/).length / 220))
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
