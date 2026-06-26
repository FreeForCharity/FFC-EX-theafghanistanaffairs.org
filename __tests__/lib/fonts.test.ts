// Mock next/font/google so it echoes the call's configuration back out.
// next/jest's default mock returns literal "variable", which strips the
// data we care about (the configured CSS variable name).
jest.mock('next/font/google', () => {
  const echo = (config: Record<string, unknown>) => ({
    className: 'mock-className',
    style: { fontFamily: 'mock-family' },
    variable: config.variable,
    weight: config.weight,
    subsets: config.subsets,
    display: config.display,
  })
  return {
    Open_Sans: echo,
    Lato: echo,
    Raleway: echo,
    Faustina: echo,
    Cantata_One: echo,
    Fauna_One: echo,
    Montserrat: echo,
    Cinzel: echo,
    Playfair_Display: echo,
    Noto_Naskh_Arabic: echo,
  }
})

import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
  notoNaskhArabic,
} from '../../src/lib/fonts'

describe('fonts module exports', () => {
  const allFonts = {
    openSans,
    lato,
    raleway,
    faustina,
    cantataOne,
    faunaOne,
    montserrat,
    cinzel,
  } as const

  it('exports a defined font object for every named Google font', () => {
    for (const [name, font] of Object.entries(allFonts)) {
      expect(font).toBeDefined()
      expect(typeof font).toBe('object')
      expect(font).not.toBeNull()
      expect({ name, hasKeys: Object.keys(font).length > 0 }).toEqual({
        name,
        hasKeys: true,
      })
    }
  })

  it('exposes a CSS variable name on every font matching --font-<kebab-name>', () => {
    const expected: Record<keyof typeof allFonts, string> = {
      openSans: '--font-open-sans',
      lato: '--font-lato',
      raleway: '--font-raleway',
      faustina: '--font-faustina',
      cantataOne: '--font-cantata-one',
      faunaOne: '--font-fauna-one',
      montserrat: '--font-montserrat',
      cinzel: '--font-cinzel',
    }

    for (const [name, font] of Object.entries(allFonts)) {
      const variable = (font as { variable?: string }).variable
      expect({ name, variable }).toEqual({
        name,
        variable: expected[name as keyof typeof allFonts],
      })
    }
  })

  it('configures the latin subset and swap display for every font', () => {
    for (const [name, font] of Object.entries(allFonts)) {
      const cfg = font as { subsets?: string[]; display?: string }
      expect({ name, subsets: cfg.subsets, display: cfg.display }).toEqual({
        name,
        subsets: ['latin'],
        display: 'swap',
      })
    }
  })

  it('configures weight for each font matching the original definition', () => {
    const expectedWeight: Record<keyof typeof allFonts, string | string[]> = {
      openSans: ['400', '500', '600', '700', '800'],
      lato: ['400', '700'],
      raleway: ['400', '500', '600', '700'],
      faustina: ['400', '500', '600', '700'],
      cantataOne: '400',
      faunaOne: '400',
      montserrat: ['400', '500', '600', '700'],
      cinzel: ['400', '500', '600', '700'],
    }

    for (const [name, font] of Object.entries(allFonts)) {
      const weight = (font as { weight?: string | string[] }).weight
      expect({ name, weight }).toEqual({
        name,
        weight: expectedWeight[name as keyof typeof allFonts],
      })
    }
  })

  it('exports exactly the eight expected font instances', () => {
    expect(Object.keys(allFonts).sort()).toEqual(
      [
        'cantataOne',
        'cinzel',
        'faunaOne',
        'faustina',
        'lato',
        'montserrat',
        'openSans',
        'raleway',
      ].sort()
    )
  })
})

describe('notoNaskhArabic (RTL / Arabic-script font)', () => {
  // Kept separate from the latin allFonts checks above because this face
  // intentionally loads the `arabic` subset for Pashto/Dari content.
  it('configures the arabic subset, swap display, expected weights and CSS variable', () => {
    const cfg = notoNaskhArabic as {
      variable?: string
      subsets?: string[]
      display?: string
      weight?: string | string[]
    }
    expect(cfg.variable).toBe('--font-noto-naskh')
    expect(cfg.subsets).toEqual(['arabic'])
    expect(cfg.display).toBe('swap')
    expect(cfg.weight).toEqual(['400', '500', '600', '700'])
  })
})
