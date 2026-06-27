import React from 'react'
import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import ArticleThumb from '@/components/ui/ArticleThumb'
import {
  featuredArticle,
  articlesByType,
  articleTypeLabel,
  formatArticleDate,
} from '@/data/articles'

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
          {/* Flagship featured report */}
          <article className="lg:col-span-6 flex flex-col border border-[#e3e8ee] bg-white shadow-sm">
            <ArticleThumb area={featuredArticle.area} className="aspect-[16/9] w-full" />
            <div className="flex flex-1 flex-col p-6 lg:p-8">
              <span className="mb-3 text-[12px] font-[700] uppercase tracking-[0.18em] text-[#c79a3b]">
                {articleTypeLabel[featuredArticle.type]}
              </span>
              <h3 className="font-display text-[24px] leading-snug font-[700] text-[#0e2742] lg:text-[28px]">
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

          {/* Three supporting policy briefs */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {briefs.map((a) => (
              <article
                key={a.slug}
                className="flex flex-col border border-[#e3e8ee] bg-white shadow-sm"
              >
                <ArticleThumb area={a.area} className="aspect-[4/3] w-full" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-2 text-[11px] font-[700] uppercase tracking-[0.16em] text-[#c79a3b]">
                    {articleTypeLabel[a.type]}
                  </span>
                  <h3 className="font-display text-[16px] leading-snug font-[600] text-[#0e2742]">
                    <Link href={`/articles/${a.slug}`} className="hover:text-[#c79a3b]">
                      {a.title}
                    </Link>
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-4 text-[12px] text-[#5b6b7f]">
                    <span>{formatArticleDate(a.date)}</span>
                    <FileText className="h-4 w-4 text-[#c79a3b]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedResearch
