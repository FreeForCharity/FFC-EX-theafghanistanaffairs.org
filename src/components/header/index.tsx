'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  label: string
  path: string
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems: MenuItem[] = useMemo(
    () => [
      { label: 'Research', path: '/#research-areas' },
      { label: 'Publications', path: '/#featured-research' },
      { label: 'Analysis', path: '/#latest-analysis' },
      { label: 'Events', path: '/#events' },
      { label: 'About', path: '/#site-footer' },
      { label: 'Contact', path: '/#site-footer' },
    ],
    []
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setIsMobileMenuOpen(false)

  return (
    <header
      id="header"
      className={`w-full fixed top-0 left-0 right-0 z-50 bg-[#0e2742] text-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="mx-auto max-w-[1248px] px-4">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-[64px]' : 'h-[80px]'
          }`}
        >
          {/* Wordmark */}
          <Link href="/" onClick={closeMobile} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-block h-9 w-9 rotate-45 border-2 border-[#c79a3b] bg-[#c79a3b]/15"
            />
            <span className="leading-none">
              <span className="font-display block text-[18px] font-[700] tracking-wide">
                AFGHANISTAN
              </span>
              <span className="font-display block text-[18px] font-[700] tracking-[0.35em] text-[#c79a3b]">
                AFFAIRS
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1 text-[13px] font-[600] uppercase tracking-wide">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    className="px-3 py-2 text-white/85 transition-colors hover:text-[#c79a3b]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Subscribe + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/#newsletter"
              onClick={closeMobile}
              className="hidden sm:inline-flex items-center bg-[#c79a3b] px-5 py-2.5 text-[13px] font-[700] uppercase tracking-wide text-[#0e2742] transition-colors hover:bg-[#d9b969]"
            >
              Subscribe
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 text-white"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <RxCross2 className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-[#0a1f38]"
          >
            <ul className="px-4 py-3">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    onClick={closeMobile}
                    className="block px-2 py-3 text-[14px] font-[600] uppercase tracking-wide text-white/90 hover:text-[#c79a3b]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#newsletter"
                  onClick={closeMobile}
                  className="mt-2 block bg-[#c79a3b] px-4 py-3 text-center text-[14px] font-[700] uppercase tracking-wide text-[#0e2742]"
                >
                  Subscribe
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
