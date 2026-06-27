import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { researchAreaIcon } from '@/lib/research-area-icons'
import { researchAreaLabel, type ResearchAreaId } from '@/data/articles'

// The nine focus areas surfaced on the homepage (mirrors the design doc; the
// catch-all `society-culture` area is intentionally not shown here). Labels and
// icons are pulled from the shared maps so the row stays in sync with article
// thumbnails. Links route to the publications list (/articles); per-area
// filtering is wired up in a later phase.
const areaIds: ResearchAreaId[] = [
  'governance',
  'economy',
  'security',
  'regional-affairs',
  'human-rights',
  'womens-rights',
  'education',
  'climate-environment',
  'migration-displacement',
]

const ResearchAreas = () => {
  return (
    <section id="research-areas" className="border-y border-[#e3e8ee] bg-[#f7f9fb] py-14">
      <div className="mx-auto max-w-[1248px] px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-[14px] font-[700] uppercase tracking-[0.2em] text-[#0e2742]">
            Research Areas
          </h2>
          <Link
            href="/articles"
            className="inline-flex items-center gap-1 text-[12px] font-[700] uppercase tracking-wide text-[#c79a3b] hover:text-[#0e2742]"
          >
            View All Areas <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <ul className="grid grid-cols-3 gap-y-8 sm:grid-cols-5 lg:grid-cols-9">
          {areaIds.map((id) => {
            const Icon = researchAreaIcon[id]
            return (
              <li key={id}>
                <Link
                  href="/articles"
                  className="group flex flex-col items-center gap-3 text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center text-[#0e2742] transition-colors group-hover:text-[#c79a3b]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <span className="text-[12px] font-[600] leading-tight text-[#5b6b7f] group-hover:text-[#0e2742]">
                    {researchAreaLabel[id]}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ResearchAreas
