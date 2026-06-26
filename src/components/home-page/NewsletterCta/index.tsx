'use client'

import React, { useState } from 'react'
import { Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site.config'

// Until a hosted newsletter provider is wired up, subscription is handled by
// email. The entered address is folded into the mailto body so the Subscribe
// action actually reflects what the visitor typed (rather than ignoring it).
const NewsletterCta = () => {
  const [email, setEmail] = useState('')

  const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    'Newsletter Subscription'
  )}&body=${encodeURIComponent(
    `Please subscribe me to The Afghanistan Affairs newsletter${email ? `: ${email}` : '.'}`
  )}`

  return (
    <section id="newsletter" className="bg-white py-14">
      <div className="mx-auto max-w-[1248px] px-4">
        <div className="flex flex-col items-start gap-6 bg-[#0e2742] p-8 text-white lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#c79a3b]/50">
              <Mail className="h-6 w-6 text-[#c79a3b]" />
            </span>
            <div>
              <h2 className="font-display text-[22px] font-[700]">Stay Informed</h2>
              <p className="mt-1 max-w-[420px] text-[14px] text-white/75">
                Subscribe for the latest research, analysis, events, and policy briefs.
              </p>
            </div>
          </div>

          <form
            className="flex w-full max-w-[460px] flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = mailto
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-white px-4 py-3 text-[14px] text-[#0e2742] placeholder:text-[#9aa7b6] focus:outline-none focus:ring-2 focus:ring-[#c79a3b]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-[#c79a3b] px-7 py-3 text-[13px] font-[700] uppercase tracking-wide text-[#0e2742] transition-colors hover:bg-[#d9b969]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterCta
