import React from 'react'
import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import {
  featuredArticle,
  articlesByType,
  articleTypeLabel,
  formatArticleDate,
} from '@/data/articles'
import { assetPath } from '@/lib/assetPath'

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-8 text-[14px] font-[700] uppercase tracking-[0.2em] text-[#0e2742]">
    {children}
  </h2>
)

const FeaturedResearch = () => {
  const briefs = articlesByType('policy-brief', 3)

  return (
    <section id="featured-research" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1248px] px-4">
        <SectionHeading>Featured Research</SectionHeading>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Flagship featured report — photo header + editorial copy. */}
          <article className="flex flex-col overflow-hidden border border-[#e3e8ee] bg-white shadow-sm lg:col-span-7">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={assetPath('/Images/photos/mountains.jpg')}
                alt="The Afghan highlands"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2742]/40 to-transparent" />
              <span className="absolute left-5 top-5 inline-flex items-center bg-[#c79a3b] px-3 py-1.5 text-[11px] font-[700] uppercase tracking-[0.16em] text-[#0e2742]">
                {articleTypeLabel[featuredArticle.type]}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 lg:p-8">
              <h3 className="font-display text-[24px] font-[700] leading-snug text-[#0e2742] lg:text-[30px]">
                {featuredArticle.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5b6b7f]">
                {featuredArticle.excerpt}
              </p>
              <Link
                href={`/articles/${featuredArticle.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-[700] uppercase tracking-wide text-[#0e2742] transition-colors hover:text-[#c79a3b]"
              >
                Read Report <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Supporting policy briefs — clean text cards with a gold accent. */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {briefs.map((a) => (
              <article
                key={a.slug}
                className="border border-[#e3e8ee] border-l-[3px] border-l-[#c79a3b] bg-white p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[11px] font-[700] uppercase tracking-[0.16em] text-[#c79a3b]">
                    {articleTypeLabel[a.type]}
                  </span>
                  <FileText className="h-4 w-4 flex-shrink-0 text-[#c79a3b]/70" />
                </div>
                <h3 className="mt-2 font-display text-[16px] font-[600] leading-snug text-[#0e2742]">
                  <Link href={`/articles/${a.slug}`} className="hover:text-[#c79a3b]">
                    {a.title}
                  </Link>
                </h3>
                <p className="mt-2 text-[12px] text-[#5b6b7f]">{formatArticleDate(a.date)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedResearch
