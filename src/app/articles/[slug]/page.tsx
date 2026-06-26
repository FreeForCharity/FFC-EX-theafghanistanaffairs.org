import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import {
  articles,
  articleTypeLabel,
  researchAreaLabel,
  formatArticleDate,
  type ArticleLanguage,
} from '@/data/articles'
import { articleBodies } from '@/data/article-bodies'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return { title: 'Article Not Found' }
  return {
    title: article.title,
    description: article.excerpt,
  }
}

const languageLabel: Record<ArticleLanguage, string> = {
  en: 'English',
  ps: 'Pashto',
  fa: 'Dari',
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const isRtl = article.language !== 'en'
  const body = articleBodies[article.slug]

  return (
    <article>
      {/* Header band */}
      <header className="bg-[#0e2742] pt-[140px] pb-12 text-white">
        <div className="mx-auto max-w-[820px] px-4">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-[12px] font-[600] uppercase tracking-wide text-white/70 transition-colors hover:text-[#c79a3b]"
          >
            <ArrowLeft className="h-4 w-4" /> All Publications
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-[600] uppercase tracking-wide">
            <span className="text-[#d9b969]">{articleTypeLabel[article.type]}</span>
            <span className="text-white/40">·</span>
            <span className="text-white/70">{researchAreaLabel[article.area]}</span>
            {article.language !== 'en' && (
              <>
                <span className="text-white/40">·</span>
                <span className="text-white/70">{languageLabel[article.language]}</span>
              </>
            )}
          </div>
          <h1
            className="mt-4 font-display text-[30px] font-[700] leading-tight lg:text-[40px]"
            dir={isRtl ? 'rtl' : undefined}
          >
            {article.title}
          </h1>
          <p className="mt-5 text-[14px] text-white/70">
            By {article.author} · {formatArticleDate(article.date)}
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-[820px] px-4" dir={isRtl ? 'rtl' : undefined}>
          <p className="font-display text-[20px] leading-relaxed text-[#1a2433]">
            {article.excerpt}
          </p>

          {body ? (
            <div className="mt-8 space-y-5">
              {body.map((para, i) => (
                <p key={i} className="text-[17px] leading-[1.8] text-[#26303d]">
                  {para}
                </p>
              ))}
              <p className="mt-10 border-t border-[#e3e8ee] pt-6 text-[13px] text-[#5b6b7f]">
                Originally published on{' '}
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c79a3b]"
                >
                  the legacy archive
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="mt-10 border-t border-[#e3e8ee] pt-8">
              <p className="text-[15px] leading-relaxed text-[#5b6b7f]">
                The full text of this piece is being migrated from the original publication. In the
                meantime, you can read it in full on the legacy archive.
              </p>
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-[#0e2742] px-6 py-3 text-[13px] font-[700] uppercase tracking-wide text-white transition-colors hover:bg-[#15355a]"
              >
                Read the Original <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
