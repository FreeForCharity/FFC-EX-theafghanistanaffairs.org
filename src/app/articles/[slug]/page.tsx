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
import { relatedArticles, adjacentArticles } from '@/data/article-meta'
import { readingMinutes } from '@/data/article-text'

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
  const readingMin = readingMinutes(article.slug)
  const related = relatedArticles(article.slug, 3)
  const { prev, next } = adjacentArticles(article.slug)

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
            className={`mt-4 text-[30px] font-[700] leading-tight lg:text-[40px] ${
              isRtl ? 'font-naskh' : 'font-display'
            }`}
            dir={isRtl ? 'rtl' : undefined}
            lang={isRtl ? article.language : undefined}
          >
            {article.title}
          </h1>
          <p className="mt-5 text-[14px] text-white/70">
            By {article.author} · {formatArticleDate(article.date)}
            {readingMin > 0 && <> · {readingMin} min read</>}
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-[820px] px-4">
          {/* English standfirst/deck — always LTR, even for RTL articles */}
          <p className="font-display text-[20px] leading-relaxed text-[#1a2433]">
            {article.excerpt}
          </p>

          {body ? (
            <>
              <div
                className={`mt-8 ${isRtl ? 'space-y-6 font-naskh' : 'space-y-5'}`}
                dir={isRtl ? 'rtl' : undefined}
                lang={isRtl ? article.language : undefined}
              >
                {body.map((para, i) => (
                  <p
                    key={i}
                    className={
                      isRtl
                        ? 'text-[19px] leading-[2.15] text-[#26303d]'
                        : 'text-[17px] leading-[1.8] text-[#26303d]'
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
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
            </>
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

      {/* Prev / next + related research */}
      <nav className="border-t border-[#e3e8ee] bg-[#f7f9fb] py-12" aria-label="More publications">
        <div className="mx-auto max-w-[820px] px-4">
          {(prev || next) && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {prev ? (
                <Link
                  href={`/articles/${prev.slug}`}
                  className="group border border-[#e3e8ee] bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <span className="text-[11px] font-[700] uppercase tracking-wide text-[#c79a3b]">
                    ← Older
                  </span>
                  <span
                    className={`mt-2 block text-[15px] font-[600] leading-snug text-[#0e2742] group-hover:text-[#c79a3b] ${prev.language === 'en' ? 'font-display' : 'font-naskh'}`}
                    dir={prev.language === 'en' ? undefined : 'rtl'}
                    lang={prev.language === 'en' ? undefined : prev.language}
                  >
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {next ? (
                <Link
                  href={`/articles/${next.slug}`}
                  className="group border border-[#e3e8ee] bg-white p-5 text-right transition-shadow hover:shadow-md"
                >
                  <span className="text-[11px] font-[700] uppercase tracking-wide text-[#c79a3b]">
                    Newer →
                  </span>
                  <span
                    className={`mt-2 block text-[15px] font-[600] leading-snug text-[#0e2742] group-hover:text-[#c79a3b] ${next.language === 'en' ? 'font-display' : 'font-naskh'}`}
                    dir={next.language === 'en' ? undefined : 'rtl'}
                    lang={next.language === 'en' ? undefined : next.language}
                  >
                    {next.title}
                  </span>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-6 text-[13px] font-[700] uppercase tracking-[0.2em] text-[#0e2742]">
                Related research
              </h2>
              <ul className="divide-y divide-[#e3e8ee] border-y border-[#e3e8ee]">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/articles/${r.slug}`}
                      className="flex items-start justify-between gap-4 py-4 transition-colors hover:bg-white"
                    >
                      <span>
                        <span className="block text-[11px] font-[700] uppercase tracking-wide text-[#c79a3b]">
                          {researchAreaLabel[r.area]}
                        </span>
                        <span
                          className={`mt-1 block text-[15px] font-[600] leading-snug text-[#0e2742] ${r.language === 'en' ? 'font-display' : 'font-naskh'}`}
                          dir={r.language === 'en' ? undefined : 'rtl'}
                          lang={r.language === 'en' ? undefined : r.language}
                        >
                          {r.title}
                        </span>
                      </span>
                      <span className="whitespace-nowrap pt-1 text-[12px] text-[#5b6b7f]">
                        {formatArticleDate(r.date)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </article>
  )
}
