/**
 * Derived metadata over the article catalogue + bodies: reading time,
 * related/adjacent articles, archive-by-year, and corpus statistics.
 * Kept separate from articles.ts so the body-dependent logic lives in one
 * place.
 */
import {
  articles,
  articlesByDate,
  researchAreaLabel,
  type Article,
  type ResearchAreaId,
} from './articles'
import { articleBodies } from './article-bodies'

export function wordCount(slug: string): number {
  const body = articleBodies[slug]
  if (!body) return 0
  return body.join(' ').trim().split(/\s+/).filter(Boolean).length
}

/** Estimated reading time in minutes (~200 wpm), minimum 1 for ported text. */
export function readingMinutes(slug: string): number {
  const wc = wordCount(slug)
  return wc ? Math.max(1, Math.round(wc / 200)) : 0
}

export function hasFullText(slug: string): boolean {
  return Boolean(articleBodies[slug])
}

/** Articles in the same research area (newest first), then others, excluding self. */
export function relatedArticles(slug: string, limit = 3): Article[] {
  const current = articles.find((a) => a.slug === slug)
  if (!current) return []
  const sameArea = articlesByDate.filter((a) => a.slug !== slug && a.area === current.area)
  const others = articlesByDate.filter((a) => a.slug !== slug && a.area !== current.area)
  return [...sameArea, ...others].slice(0, limit)
}

/** Previous (older) and next (newer) article by publication date. */
export function adjacentArticles(slug: string): { prev?: Article; next?: Article } {
  const idx = articlesByDate.findIndex((a) => a.slug === slug)
  if (idx === -1) return {}
  return { next: articlesByDate[idx - 1], prev: articlesByDate[idx + 1] }
}

export function yearOf(article: Article): number {
  return Number(article.date.slice(0, 4))
}

/** Years descending with a post count each. */
export function archiveByYear(): { year: number; count: number }[] {
  const counts = new Map<number, number>()
  for (const a of articles) counts.set(yearOf(a), (counts.get(yearOf(a)) ?? 0) + 1)
  return [...counts.entries()].sort((a, b) => b[0] - a[0]).map(([year, count]) => ({ year, count }))
}

/** Research areas present in the corpus, with label + count, busiest first. */
export function areaCounts(): { area: ResearchAreaId; label: string; count: number }[] {
  const counts = new Map<ResearchAreaId, number>()
  for (const a of articles) counts.set(a.area, (counts.get(a.area) ?? 0) + 1)
  return [...counts.entries()]
    .map(([area, count]) => ({ area, label: researchAreaLabel[area], count }))
    .sort((a, b) => b.count - a.count)
}

export const totalArticles = articles.length

export function fullTextCount(): number {
  return articles.filter((a) => hasFullText(a.slug)).length
}

export function yearsSpan(): string {
  const years = articles.map(yearOf)
  return `${Math.min(...years)}–${Math.max(...years)}`
}

export function languageCounts(): { en: number; ps: number; fa: number } {
  return {
    en: articles.filter((a) => a.language === 'en').length,
    ps: articles.filter((a) => a.language === 'ps').length,
    fa: articles.filter((a) => a.language === 'fa').length,
  }
}
