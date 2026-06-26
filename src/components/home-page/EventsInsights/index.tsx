import React from 'react'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Users, TrendingDown, Globe2 } from 'lucide-react'
import { articlesByType, formatArticleDate } from '@/data/articles'

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

// Macro figures cited in the platform's own 2026 economic review
// (World Bank Afghanistan Development Update). Kept honest and sourced rather
// than fabricated.
const glance = [
  { icon: Users, value: '~41M', label: 'Population (est.)' },
  { icon: TrendingDown, value: '-5.6%', label: 'GDP per capita' },
  { icon: Globe2, value: '4.8%', label: 'GDP growth' },
]

const EventsInsights = () => {
  const commentary = articlesByType('commentary', 3)

  return (
    <section id="events" className="border-t border-[#e3e8ee] bg-[#f7f9fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1248px] px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Upcoming Events */}
          <div>
            <ColHeading>Upcoming Events</ColHeading>
            <div className="flex flex-col items-start gap-3 border border-dashed border-[#cdd6e0] bg-white p-6">
              <CalendarDays className="h-7 w-7 text-[#c79a3b]" />
              <p className="font-display text-[16px] font-[600] text-[#0e2742]">
                No upcoming events scheduled
              </p>
              <p className="text-[13px] leading-relaxed text-[#5b6b7f]">
                Briefings, panels, and roundtables will be announced here. Subscribe to be notified
                first.
              </p>
              <Link
                href="/#newsletter"
                className="mt-1 inline-flex items-center gap-1 text-[12px] font-[700] uppercase tracking-wide text-[#c79a3b] hover:text-[#0e2742]"
              >
                Get Notified <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Afghanistan at a Glance */}
          <div>
            <ColHeading>Data &amp; Insights</ColHeading>
            <div className="bg-[#0e2742] p-6 text-white">
              <p className="font-display text-[18px] font-[600]">Afghanistan at a Glance</p>
              <div className="mt-6 space-y-5">
                {glance.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <Icon className="h-6 w-6 text-[#c79a3b]" strokeWidth={1.5} />
                    <div>
                      <p className="font-display text-[22px] font-[700] leading-none">{value}</p>
                      <p className="mt-1 text-[12px] text-white/70">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-white/15 pt-4 text-[11px] text-white/55">
                Indicative figures drawn from the World Bank Afghanistan Development Update review.
              </p>
            </div>
          </div>

          {/* Expert Commentary */}
          <div>
            <ColHeading href="/#latest-analysis">Commentary</ColHeading>
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

export default EventsInsights
