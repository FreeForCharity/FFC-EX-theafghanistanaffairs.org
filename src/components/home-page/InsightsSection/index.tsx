import React from 'react'
import Link from 'next/link'
import { ArrowRight, Users, TrendingDown, LineChart, Landmark } from 'lucide-react'
import { articlesByType, formatArticleDate } from '@/data/articles'
import { archiveByYear } from '@/data/article-meta'

function initials(name: string): string {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const ColHeading = ({ children, href }: { children: React.ReactNode; href?: string }) => (
  <div className="mb-6 flex items-center justify-between">
    <h2 className="text-[14px] font-[700] uppercase tracking-[0.2em] text-[#0e2742]">{children}</h2>
    {href && (
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-[12px] font-[700] uppercase tracking-wide text-[#c79a3b] hover:text-[#0e2742]"
      >
        View All <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    )}
  </div>
)

// Figures cited in the platform's 2026 review of the World Bank's Afghanistan
// Development Update — real and sourced, not placeholders.
const glance = [
  { icon: Users, value: '47.4M', label: 'Population (end 2025)' },
  { icon: LineChart, value: '4.8%', label: 'Real GDP growth (FY2025)' },
  { icon: TrendingDown, value: '-5.6%', label: 'GDP per capita change' },
  { icon: Landmark, value: '~20%', label: 'Tax revenue / GDP' },
]

const InsightsSection = () => {
  const commentary = articlesByType('commentary', 3)
  const years = archiveByYear()

  return (
    <section id="insights" className="border-t border-[#e3e8ee] bg-[#f7f9fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1248px] px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* From the Archive */}
          <div>
            <ColHeading href="/articles">From the Archive</ColHeading>
            <ul className="divide-y divide-[#e3e8ee] border-y border-[#e3e8ee]">
              {years.map((y) => (
                <li key={y.year}>
                  <Link
                    href="/articles"
                    className="flex items-center justify-between py-3 transition-colors hover:bg-white"
                  >
                    <span className="font-display text-[16px] font-[600] text-[#0e2742]">
                      {y.year}
                    </span>
                    <span className="text-[12px] text-[#5b6b7f]">
                      {y.count} {y.count === 1 ? 'piece' : 'pieces'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Afghanistan at a Glance */}
          <div>
            <ColHeading>Data &amp; Insights</ColHeading>
            <div className="bg-[#0e2742] p-6 text-white">
              <p className="font-display text-[18px] font-[600]">Afghanistan at a Glance</p>
              <div className="mt-6 grid grid-cols-2 gap-5">
                {glance.map(({ icon: Icon, value, label }) => (
                  <div key={label}>
                    <Icon className="h-5 w-5 text-[#c79a3b]" strokeWidth={1.5} />
                    <p className="mt-2 font-display text-[22px] font-[700] leading-none">{value}</p>
                    <p className="mt-1 text-[12px] text-white/70">{label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/articles/review-of-the-latest-world-bank-afghanistan-development-update"
                className="mt-6 inline-flex items-center gap-1 border-t border-white/15 pt-4 text-[12px] text-white/70 hover:text-[#c79a3b]"
              >
                Source: World Bank Afghanistan Development Update review{' '}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Commentary */}
          <div>
            <ColHeading href="/articles">Commentary</ColHeading>
            <ul className="space-y-5">
              {commentary.map((a) => (
                <li key={a.slug} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0e2742] text-[12px] font-[700] text-white">
                    {initials(a.author)}
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-[600] leading-snug text-[#0e2742]">
                      <Link href={`/articles/${a.slug}`} className="hover:text-[#c79a3b]">
                        {a.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-[12px] text-[#5b6b7f]">
                      By {a.author} · {formatArticleDate(a.date)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
