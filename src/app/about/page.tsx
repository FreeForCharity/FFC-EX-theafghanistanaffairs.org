import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, BookOpenText, Sparkles, Mail } from 'lucide-react'
import { author } from '@/data/author'
import { siteConfig } from '@/lib/site.config'
import { totalArticles, fullTextCount, yearsSpan, languageCounts } from '@/data/article-meta'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About The Afghanistan Affairs — its mission, its founder Moheb Jabarkhail, and how the platform sources, preserves, and presents its research.',
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-[24px] font-[700] text-[#0e2742] lg:text-[28px]">{children}</h2>
)

export default function AboutPage() {
  const langs = languageCounts()
  const nonEnglish = langs.ps + langs.fa

  const stats = [
    { value: String(totalArticles), label: 'Articles preserved' },
    { value: yearsSpan(), label: 'Years of analysis' },
    { value: `${fullTextCount()}/${totalArticles}`, label: 'With full text on-site' },
    { value: '3', label: 'Languages (EN · PS · FA)' },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-[#0e2742] pt-[140px] pb-14 text-white">
        <div className="mx-auto max-w-[900px] px-4">
          <p className="mb-3 text-[13px] font-[600] uppercase tracking-[0.25em] text-[#d9b969]">
            The Afghanistan Affairs
          </p>
          <h1 className="font-display text-[40px] font-[700] lg:text-[52px]">About the platform</h1>
          <p className="mt-4 max-w-[640px] text-[16px] leading-relaxed text-white/75">
            {siteConfig.description}
          </p>
        </div>
      </section>

      {/* Corpus stats — transparency about completeness */}
      <section className="border-b border-[#e3e8ee] bg-[#f7f9fb] py-10">
        <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-6 px-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-[30px] font-[700] text-[#0e2742]">{s.value}</p>
              <p className="mt-1 text-[13px] text-[#5b6b7f]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[900px] space-y-14 px-4 py-14">
        {/* Mission */}
        <section>
          <SectionTitle>Our mission</SectionTitle>
          <p className="mt-4 text-[16px] leading-[1.8] text-[#26303d]">
            The Afghanistan Affairs is a non-partisan platform dedicated to research, analysis, and
            informed dialogue on Afghanistan and the region. It examines the country&rsquo;s
            economy, trade, private sector development, governance, security, and regional
            integration — connecting rigorous analysis to the questions that shape
            Afghanistan&rsquo;s future.
          </p>
        </section>

        {/* The Author */}
        <section>
          <SectionTitle>The author</SectionTitle>
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#0e2742] text-[20px] font-[700] text-white">
              {author.initials}
            </span>
            <div>
              <p className="font-display text-[18px] font-[700] text-[#0e2742]">{author.name}</p>
              <p className="text-[13px] font-[600] uppercase tracking-wide text-[#c79a3b]">
                {author.role}
              </p>
              <p className="mt-3 text-[15px] leading-[1.8] text-[#26303d]">{author.bio}</p>
            </div>
          </div>
        </section>

        {/* Editorial & provenance / trust */}
        <section className="border-t border-[#e3e8ee] pt-12">
          <p className="mb-6 text-[13px] font-[700] uppercase tracking-[0.2em] text-[#c79a3b]">
            Trust &amp; provenance
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <BookOpenText
                className="mt-1 h-6 w-6 flex-shrink-0 text-[#0e2742]"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-display text-[18px] font-[600] text-[#0e2742]">
                  Faithful to the source
                </h3>
                <p className="mt-2 text-[15px] leading-[1.8] text-[#26303d]">
                  Every article on this site is migrated <strong>verbatim</strong> from the
                  platform&rsquo;s original publication — all {totalArticles} pieces published
                  between {yearsSpan()}, including {nonEnglish} in Pashto and Dari. Text is
                  preserved as written by the author; nothing is summarized, rewritten, or
                  generated. Each article also links back to its original entry on the legacy
                  archive so any reader can verify it.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck
                className="mt-1 h-6 w-6 flex-shrink-0 text-[#0e2742]"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-display text-[18px] font-[600] text-[#0e2742]">
                  Independent &amp; non-partisan
                </h3>
                <p className="mt-2 text-[15px] leading-[1.8] text-[#26303d]">
                  The Afghanistan Affairs is independent and non-partisan. Analysis reflects the
                  author&rsquo;s own research and views, drawn from primary sources and published
                  development data such as the World Bank&rsquo;s Afghanistan Development Update.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Sparkles className="mt-1 h-6 w-6 flex-shrink-0 text-[#0e2742]" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-[18px] font-[600] text-[#0e2742]">
                  How this site is built
                </h3>
                <p className="mt-2 text-[15px] leading-[1.8] text-[#26303d]">
                  This website was rebuilt and is maintained with{' '}
                  <a
                    href="https://www.anthropic.com/claude"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[600] text-[#0e2742] underline hover:text-[#c79a3b]"
                  >
                    Claude
                  </a>
                  , an AI assistant by Anthropic, used as a careful editorial tool — to migrate the
                  full archive accurately, preserve every article&rsquo;s wording, and present the
                  research clearly and accessibly. Claude assists with engineering and presentation;
                  the research and analysis are the author&rsquo;s own. Photography is public
                  domain, credited in the repository.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA row */}
        <section className="flex flex-col gap-3 border-t border-[#e3e8ee] pt-12 sm:flex-row">
          <Link
            href="/articles"
            className="inline-flex items-center justify-center gap-2 bg-[#0e2742] px-6 py-3 text-[13px] font-[700] uppercase tracking-wide text-white transition-colors hover:bg-[#15355a]"
          >
            Browse all publications <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="inline-flex items-center justify-center gap-2 border border-[#0e2742]/30 px-6 py-3 text-[13px] font-[700] uppercase tracking-wide text-[#0e2742] transition-colors hover:border-[#c79a3b] hover:text-[#c79a3b]"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </section>
      </div>
    </div>
  )
}
