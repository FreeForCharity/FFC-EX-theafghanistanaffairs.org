import type { Metadata } from 'next'
import { articles } from '@/data/articles'
import { readingMinutes, totalArticles, yearsSpan } from '@/data/article-meta'
import ArticlesBrowser from '@/components/articles/ArticlesBrowser'

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Research, analysis, policy briefs, and commentary on Afghanistan and the region from The Afghanistan Affairs — filter by topic, year, or language.',
}

export default function ArticlesPage() {
  // Compute reading times server-side so article bodies stay out of the client bundle.
  const readingMap: Record<string, number> = {}
  for (const a of articles) readingMap[a.slug] = readingMinutes(a.slug)

  return (
    <div>
      {/* Page header */}
      <section className="bg-[#0e2742] pt-[140px] pb-14 text-white">
        <div className="mx-auto max-w-[1248px] px-4">
          <p className="mb-3 text-[13px] font-[600] uppercase tracking-[0.25em] text-[#d9b969]">
            The Afghanistan Affairs
          </p>
          <h1 className="font-display text-[40px] font-[700] lg:text-[52px]">Publications</h1>
          <p className="mt-4 max-w-[640px] text-[16px] leading-relaxed text-white/75">
            The complete archive — {totalArticles} pieces of research, analysis, policy briefs, and
            commentary published between {yearsSpan()}, on Afghanistan&rsquo;s economy, governance,
            security, and regional integration.
          </p>
        </div>
      </section>

      {/* Browser */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1248px] px-4">
          <ArticlesBrowser readingMap={readingMap} />
        </div>
      </section>
    </div>
  )
}
