/**
 * Body-dependent article helpers: reading time and full-text presence.
 *
 * This module imports the full `article-bodies` corpus, so it must only be
 * used from server components / server-evaluated code (page bodies, the
 * server-computed reading-time map). Keeping it separate from
 * `article-meta.ts` ensures client components can import the body-free
 * aggregations there without pulling article bodies into the browser bundle.
 */
import { articles } from './articles'
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

export function fullTextCount(): number {
  return articles.filter((a) => hasFullText(a.slug)).length
}
