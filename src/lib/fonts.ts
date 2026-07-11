import { Open_Sans, Lato, Faustina, Playfair_Display, Noto_Naskh_Arabic } from 'next/font/google'

// Only the faces this site actually renders are loaded. Fonts that are not
// used on the homepage set `preload: false` so they don't emit a render-
// blocking <link rel="preload"> on every route — they still load on demand
// (with `display: swap`) on the pages that use them.

// Serif display face for The Afghanistan Affairs headings (matches the
// research-institute design direction). Used on the homepage → preloaded.
export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800'],
})

// Body copy across the whole site → preloaded.
export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700', '800'],
})

// Naskh face for Pashto / Dari (Arabic-script) article content only. Not on the
// homepage, so it is not preloaded.
export const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-noto-naskh',
  weight: ['400', '500', '600', '700'],
  preload: false,
})

// Used only on a couple of legal pages (#lato-font) → not preloaded.
export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['400', '700'],
  preload: false,
})

// Used only on legal pages (#faustina-font) → not preloaded.
export const faustina = Faustina({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-faustina',
  weight: ['400', '500', '600', '700'],
  preload: false,
})
