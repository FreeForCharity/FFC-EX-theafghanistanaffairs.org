'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, MapPin, Link2 } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

import { siteConfig } from '@/lib/site.config'
import { featuredArticle } from '@/data/articles'

const socialIconByLabel: Record<string, IconType> = {
  'X (Twitter)': FaXTwitter,
  Twitter: FaXTwitter,
  X: FaXTwitter,
  LinkedIn: FaLinkedinIn,
  Facebook: FaFacebookF,
  YouTube: FaYoutube,
}

const columns: { heading: string; links: { name: string; href: string; external?: boolean }[] }[] =
  [
    {
      heading: 'Quick Links',
      links: [
        { name: 'Research Areas', href: '/#research-areas' },
        { name: 'Publications', href: '/articles' },
        { name: 'Analysis', href: '/#latest-analysis' },
        { name: 'About', href: '/about' },
        { name: 'Subscribe', href: '/#newsletter' },
      ],
    },
    {
      heading: 'About Us',
      links: [
        { name: 'Our Mission', href: '/about' },
        { name: 'The Author', href: '/about' },
        { name: 'Trust & Provenance', href: '/about' },
        {
          name: 'Legacy Archive',
          href: 'https://theafghanistanaffairs.blogspot.com',
          external: true,
        },
      ],
    },
    {
      heading: 'Resource Library',
      links: [
        { name: 'Featured Report', href: `/articles/${featuredArticle.slug}` },
        { name: 'All Publications', href: '/articles' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
      ],
    },
  ]

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])
  const socialLinks = siteConfig.social.filter((s) => s.href)

  return (
    <footer id="site-footer" className="bg-[#0a1f38] text-white">
      <div className="mx-auto grid max-w-[1248px] grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-block h-8 w-8 rotate-45 border-2 border-[#c79a3b] bg-[#c79a3b]/15"
            />
            <span className="leading-none">
              <span className="font-display block text-[16px] font-[700] tracking-wide">
                AFGHANISTAN
              </span>
              <span className="font-display block text-[16px] font-[700] tracking-[0.35em] text-[#c79a3b]">
                AFFAIRS
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-[320px] text-[14px] leading-relaxed text-white/65">
            Independent research and policy analysis supporting informed dialogue toward a peaceful,
            prosperous Afghanistan.
          </p>
          {socialLinks.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ href, label }) => {
                const Icon = socialIconByLabel[label] ?? Link2
                return (
                  <a
                    key={`${label}-${href}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[#c79a3b] hover:text-[#c79a3b]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          )}
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="text-[13px] font-[700] uppercase tracking-[0.16em] text-white">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {col.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-white/70 transition-colors hover:text-[#c79a3b]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h3 className="text-[13px] font-[700] uppercase tracking-[0.16em] text-white">Contact</h3>
          <ul className="mt-4 space-y-4 text-[14px] text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#c79a3b]" />
              <span>
                Kabul, Afghanistan
                <br />
                <span className="text-white/50">(Operating globally)</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#c79a3b]" />
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="break-all transition-colors hover:text-[#c79a3b]"
              >
                {siteConfig.contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1248px] flex-col items-center justify-between gap-3 px-4 py-5 text-[13px] text-white/55 sm:flex-row">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-[#c79a3b]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#c79a3b]">
              Terms of Use
            </Link>
            <Link
              href="https://freeforcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c79a3b]"
            >
              Built with Free For Charity
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
