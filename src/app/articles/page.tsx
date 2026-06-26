import type { Metadata } from 'next'
import Link from 'next/link'
import {
  articlesByDate,
  articleTypeLabel,
  researchAreaLabel,
  formatArticleDate,
} from '@/data/articles'

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Research, analysis, policy briefs, and commentary on Afghanistan and the region from The Afghanistan Affairs.',
}

const languageLabel: Record<string, string> = {
  en: 'English',
  ps: 'Pashto',
  fa: 'Dari',
}

export default function ArticlesPage() {
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
            Research, analysis, policy briefs, and commentary on Afghanistan&rsquo;s economy,
            governance, security, and regional integration.
          </p>
        </div>
      </section>

      {/* Article list */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1248px] px-4">
          <ul className="divide-y divide-[#e3e8ee] border-y border-[#e3e8ee]">
            {articlesByDate.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="block py-6 transition-colors hover:bg-[#f7f9fb]"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-[600] uppercase tracking-wide">
                    <span className="text-[#c79a3b]">{articleTypeLabel[a.type]}</span>
                    <span className="text-[#9aa7b6]">·</span>
                    <span className="text-[#5b6b7f]">{researchAreaLabel[a.area]}</span>
                    {a.language !== 'en' && (
                      <>
                        <span className="text-[#9aa7b6]">·</span>
                        <span className="text-[#5b6b7f]">{languageLabel[a.language]}</span>
                      </>
                    )}
                  </div>
                  <h2 className="mt-2 font-display text-[20px] font-[600] leading-snug text-[#0e2742] lg:text-[22px]">
                    {a.title}
                  </h2>
                  <p className="mt-2 max-w-[820px] text-[14px] leading-relaxed text-[#5b6b7f]">
                    {a.excerpt}
                  </p>
                  <p className="mt-3 text-[12px] text-[#9aa7b6]">
                    By {a.author} · {formatArticleDate(a.date)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
