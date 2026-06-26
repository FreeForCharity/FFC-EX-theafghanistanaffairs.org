import {
  Open_Sans,
  Lato,
  Raleway,
  Faustina,
  Cantata_One,
  Fauna_One,
  Montserrat,
  Cinzel,
  Playfair_Display,
  Noto_Naskh_Arabic,
} from 'next/font/google'

// Serif display face for The Afghanistan Affairs headings (matches the
// research-institute design direction — see the homepage design doc).
export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800'],
})

// Naskh face for Pashto / Dari (Arabic-script) article content so RTL posts
// render with proper, legible Arabic typography rather than a fallback.
export const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-noto-naskh',
  weight: ['400', '500', '600', '700'],
})

// Configure fonts with proper subsets and display strategy
export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700', '800'],
})

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['400', '700'],
})

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'],
})

export const faustina = Faustina({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-faustina',
  weight: ['400', '500', '600', '700'],
})

export const cantataOne = Cantata_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cantata-one',
  weight: '400',
})

export const faunaOne = Fauna_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fauna-one',
  weight: '400',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

export const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700'],
})
