'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import {
  articlesByDate,
  articleTypeLabel,
  researchAreaLabel,
  formatArticleDate,
  type ResearchAreaId,
  type ArticleLanguage,
} from '@/data/articles'
import { areaCounts, archiveByYear, yearOf } from '@/data/article-meta'

const languageLabel: Record<ArticleLanguage, string> = {
  en: 'English',
  ps: 'Pashto',
  fa: 'Dari',
}

type AreaFilter = 'all' | ResearchAreaId
type YearFilter = 'all' | number

const chipBase = 'whitespace-nowrap border px-3 py-1.5 text-[12px] font-[600] transition-colors'
const chipOn = 'border-[#0e2742] bg-[#0e2742] text-white'
const chipOff =
  'border-[#e3e8ee] bg-white text-[#5b6b7f] hover:border-[#c79a3b] hover:text-[#0e2742]'

export default function ArticlesBrowser({ readingMap }: { readingMap: Record<string, number> }) {
  const [area, setArea] = useState<AreaFilter>('all')
  const [year, setYear] = useState<YearFilter>('all')
  const [q, setQ] = useState('')

  const areas = useMemo(() => areaCounts(), [])
  const years = useMemo(() => archiveByYear(), [])

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return articlesByDate.filter(
      (a) =>
        (area === 'all' || a.area === area) &&
        (year === 'all' || yearOf(a) === year) &&
        (!needle ||
          a.title.toLowerCase().includes(needle) ||
          a.excerpt.toLowerCase().includes(needle))
    )
  }, [area, year, q])

  return (
    <div>
      {/* Search */}
      <div className="relative mb-6 max-w-[460px]">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa7b6]" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search publications…"
          aria-label="Search publications"
          className="w-full border border-[#e3e8ee] bg-white py-2.5 pl-9 pr-4 text-[14px] text-[#0e2742] placeholder:text-[#9aa7b6] focus:border-[#c79a3b] focus:outline-none"
        />
      </div>

      {/* Topic filters */}
      <div className="mb-3 flex flex-wrap gap-2">
        <button
          onClick={() => setArea('all')}
          className={`${chipBase} ${area === 'all' ? chipOn : chipOff}`}
        >
          All topics ({articlesByDate.length})
        </button>
        {areas.map((a) => (
          <button
            key={a.area}
            onClick={() => setArea(a.area)}
            className={`${chipBase} ${area === a.area ? chipOn : chipOff}`}
          >
            {a.label} ({a.count})
          </button>
        ))}
      </div>

      {/* Year filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setYear('all')}
          className={`${chipBase} ${year === 'all' ? chipOn : chipOff}`}
        >
          All years
        </button>
        {years.map((y) => (
          <button
            key={y.year}
            onClick={() => setYear(y.year)}
            className={`${chipBase} ${year === y.year ? chipOn : chipOff}`}
          >
            {y.year} ({y.count})
          </button>
        ))}
      </div>

      <p className="mb-4 text-[13px] text-[#5b6b7f]">
        {filtered.length} {filtered.length === 1 ? 'publication' : 'publications'}
        {(area !== 'all' || year !== 'all' || q) && (
          <button
            onClick={() => {
              setArea('all')
              setYear('all')
              setQ('')
            }}
            className="ml-3 font-[600] uppercase tracking-wide text-[#c79a3b] hover:text-[#0e2742]"
          >
            Clear filters
          </button>
        )}
      </p>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="border-y border-[#e3e8ee] py-10 text-center text-[14px] text-[#5b6b7f]">
          No publications match these filters.
        </p>
      ) : (
        <ul className="divide-y divide-[#e3e8ee] border-y border-[#e3e8ee]">
          {filtered.map((a) => {
            const mins = readingMap[a.slug]
            return (
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
                  <h2
                    dir={a.language === 'en' ? undefined : 'rtl'}
                    className={`mt-2 text-[20px] font-[600] leading-snug text-[#0e2742] lg:text-[22px] ${a.language === 'en' ? 'font-display' : 'font-naskh'}`}
                  >
                    {a.title}
                  </h2>
                  <p className="mt-2 max-w-[820px] text-[14px] leading-relaxed text-[#5b6b7f]">
                    {a.excerpt}
                  </p>
                  <p className="mt-3 text-[12px] text-[#9aa7b6]">
                    By {a.author} · {formatArticleDate(a.date)}
                    {mins > 0 && <> · {mins} min read</>}
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
