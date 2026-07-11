import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { featuredArticle } from '@/data/articles'
import { assetPath } from '@/lib/assetPath'

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0e2742] text-white">
      {/* Background photograph (public-domain aerial of the Afghan highlands).
          This is the LCP element, so it's marked priority to preload it. */}
      <Image
        src={assetPath('/Images/photos/landscape.jpg')}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Navy gradient overlay so the headline stays legible over the photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(108deg, rgba(8,26,48,0.97) 0%, rgba(12,35,60,0.88) 42%, rgba(14,39,66,0.55) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 88% 6%, rgba(199,154,59,0.16) 0%, rgba(14,39,66,0) 45%)',
        }}
      />

      <div className="relative mx-auto max-w-[1248px] px-4 pt-[140px] pb-[90px] lg:pt-[180px] lg:pb-[120px]">
        <div className="max-w-[680px]">
          <p className="mb-5 text-[13px] font-[600] uppercase tracking-[0.25em] text-[#d9b969]">
            Independent Research. Policy Analysis.
          </p>
          <h1 className="font-display text-[44px] font-[700] leading-[1.08] sm:text-[58px] lg:text-[66px]">
            Dialogue for
            <br />
            <span className="text-[#c79a3b]">Afghanistan&rsquo;s Future.</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-white/85">
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
