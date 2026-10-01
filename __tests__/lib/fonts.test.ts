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
    preload: config.preload,
  })
  return {
    Open_Sans: echo,
    Lato: echo,
    Faustina: echo,
    Playfair_Display: echo,
    Noto_Naskh_Arabic: echo,
  }
})

import { openSans, lato, faustina, playfairDisplay, notoNaskhArabic } from '../../src/lib/fonts'

describe('fonts module exports', () => {
  const allFonts = {
    openSans,
    lato,
    faustina,
    playfairDisplay,
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
      faustina: '--font-faustina',
      playfairDisplay: '--font-playfair-display',
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
      faustina: ['400', '500', '600', '700'],
      playfairDisplay: ['400', '500', '600', '700', '800'],
    }

    for (const [name, font] of Object.entries(allFonts)) {
      const weight = (font as { weight?: string | string[] }).weight
      expect({ name, weight }).toEqual({
        name,
        weight: expectedWeight[name as keyof typeof allFonts],
      })
    }
  })

  it('exports exactly the expected font instances', () => {
    expect(Object.keys(allFonts).sort()).toEqual(
      ['faustina', 'lato', 'openSans', 'playfairDisplay'].sort()
    )
  })

  it('preloads only the homepage faces (playfair + open-sans); others opt out', () => {
    // Fonts not used on the homepage set preload:false so they don't emit a
    // high-priority <link rel="preload"> that competes for bandwidth on every
    // route's initial navigation.
    expect((openSans as { preload?: boolean }).preload).not.toBe(false)
    expect((playfairDisplay as { preload?: boolean }).preload).not.toBe(false)
    expect((lato as { preload?: boolean }).preload).toBe(false)
    expect((faustina as { preload?: boolean }).preload).toBe(false)
    expect((notoNaskhArabic as { preload?: boolean }).preload).toBe(false)
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
