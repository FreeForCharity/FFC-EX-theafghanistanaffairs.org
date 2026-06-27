import React from 'react'
import Link from 'next/link'
import { ShieldCheck, BookOpenText, Sparkles, ArrowRight } from 'lucide-react'
import { totalArticles, yearsSpan } from '@/data/article-meta'

const items = [
  {
    icon: BookOpenText,
    title: 'Faithful archive',
    text: `All ${totalArticles} pieces (${yearsSpan()}) are preserved verbatim from the original publication, each linked to its source.`,
  },
  {
    icon: ShieldCheck,
    title: 'Independent & non-partisan',
    text: 'Analysis is grounded in primary sources and published development data, not advocacy.',
  },
  {
    icon: Sparkles,
    title: 'Transparently built',
    text: 'Engineered and maintained with Claude as an editorial tool — the research and wording remain the author’s own.',
  },
]

const TrustBand = () => (
  <section id="trust" className="bg-white py-14">
    <div className="mx-auto max-w-[1248px] px-4">
      <div className="border border-[#e3e8ee] bg-[#f7f9fb] p-8 lg:p-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-[13px] font-[700] uppercase tracking-[0.2em] text-[#c79a3b]">
              Why you can trust this archive
            </p>
            <h2 className="mt-2 font-display text-[24px] font-[700] text-[#0e2742] lg:text-[28px]">
              Real research, faithfully preserved.
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 whitespace-nowrap bg-[#0e2742] px-6 py-3 text-[13px] font-[700] uppercase tracking-wide text-white transition-colors hover:bg-[#15355a]"
          >
            About the platform <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-3">
              <Icon className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#0e2742]" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-[15px] font-[600] text-[#0e2742]">{title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#5b6b7f]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default TrustBand
