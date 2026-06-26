import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredArticle } from '@/data/articles'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0e2742] text-white"
      style={{
        backgroundImage:
          'radial-gradient(120% 120% at 80% 10%, rgba(199,154,59,0.18) 0%, rgba(14,39,66,0) 45%), linear-gradient(120deg, #0a1f38 0%, #0e2742 55%, #15355a 100%)',
      }}
    >
      <div className="mx-auto max-w-[1248px] px-4 pt-[140px] pb-[90px] lg:pt-[180px] lg:pb-[120px]">
        <div className="max-w-[680px]">
          <p className="mb-5 text-[13px] font-[600] uppercase tracking-[0.25em] text-[#d9b969]">
            Independent Research. Policy Analysis.
          </p>
          <h1 className="font-display text-[44px] leading-[1.08] font-[700] sm:text-[58px] lg:text-[66px]">
            Dialogue for
            <br />
            <span className="text-[#c79a3b]">Afghanistan&rsquo;s Future.</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-white/80">
            The Afghanistan Affairs is a non-partisan platform dedicated to research, analysis, and
            informed dialogue on Afghanistan and the region.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={`/articles/${featuredArticle.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-[#c79a3b] px-7 py-3.5 text-[14px] font-[700] uppercase tracking-wide text-[#0e2742] transition-colors hover:bg-[#d9b969]"
            >
              Latest Publication
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#newsletter"
              className="inline-flex items-center justify-center border border-white/40 px-7 py-3.5 text-[14px] font-[700] uppercase tracking-wide text-white transition-colors hover:border-[#c79a3b] hover:text-[#c79a3b]"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
