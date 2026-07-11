import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FileText } from 'lucide-react'
import { articlesByType, articleTypeLabel, formatArticleDate, type Article } from '@/data/articles'
import { assetPath } from '@/lib/assetPath'

// Photos cycle across the analysis cards so the row stays varied.
const ANALYSIS_PHOTOS = [
  assetPath('/Images/photos/kabul-skyline.jpg'),
  assetPath('/Images/photos/bazaar-elder.jpg'),
  assetPath('/Images/photos/landscape.jpg'),
]

function initials(name: string): string {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const SectionLink = ({ href }: { href: string }) => (
  <Link
    href={href}
    className="inline-flex items-center gap-1 text-[12px] font-[700] uppercase tracking-wide text-[#c79a3b] hover:text-[#0e2742]"
  >
    View All <ArrowRight className="h-3.5 w-3.5" />
  </Link>
)

const AnalysisCard = ({ a, photo }: { a: Article; photo: string }) => (
  <article className="flex flex-col overflow-hidden border border-[#e3e8ee] bg-white shadow-sm transition-shadow hover:shadow-md">
    <div className="relative aspect-[16/10] w-full overflow-hidden">
      <Image
        src={photo}
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 100vw"
        className="object-cover"
      />
    </div>
    <div className="flex flex-1 flex-col p-5">
      <span className="text-[11px] font-[700] uppercase tracking-[0.16em] text-[#c79a3b]">
        {articleTypeLabel[a.type]}
      </span>
      <h3 className="mt-2 font-display text-[16px] font-[600] leading-snug text-[#0e2742]">
        <Link href={`/articles/${a.slug}`} className="hover:text-[#c79a3b]">
          {a.title}
        </Link>
      </h3>
      <div className="mt-auto flex items-center gap-3 pt-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0e2742] text-[11px] font-[700] text-white">
          {initials(a.author)}
        </span>
        <span className="text-[12px] text-[#5b6b7f]">
          By {a.author}
          <br />
          {formatArticleDate(a.date)}
        </span>
      </div>
    </div>
  </article>
)

const LatestAnalysis = () => {
  const analysis = articlesByType('analysis', 3)
  const briefs = articlesByType('policy-brief', 4)

  return (
    <section id="latest-analysis" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1248px] px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Latest Analysis */}
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-[14px] font-[700] uppercase tracking-[0.2em] text-[#0e2742]">
                Latest Analysis
              </h2>
              <SectionLink href="/articles" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {analysis.map((a, i) => (
                <AnalysisCard
                  key={a.slug}
                  a={a}
                  photo={ANALYSIS_PHOTOS[i % ANALYSIS_PHOTOS.length]}
                />
              ))}
            </div>
          </div>

          {/* Policy Briefs */}
          <div className="lg:col-span-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-[14px] font-[700] uppercase tracking-[0.2em] text-[#0e2742]">
                Policy Briefs
              </h2>
              <SectionLink href="/articles" />
            </div>
            <ul className="divide-y divide-[#e3e8ee] border-y border-[#e3e8ee]">
              {briefs.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/articles/${a.slug}`}
                    className="flex items-start gap-3 py-4 transition-colors hover:bg-[#f7f9fb]"
                  >
                    <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#c79a3b]" />
                    <span>
                      <span className="block font-display text-[15px] font-[600] leading-snug text-[#0e2742]">
                        {a.title}
                      </span>
                      <span className="mt-1 block text-[12px] text-[#5b6b7f]">
                        {formatArticleDate(a.date)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestAnalysis
