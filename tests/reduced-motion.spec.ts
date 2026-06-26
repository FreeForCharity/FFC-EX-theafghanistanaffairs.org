import { test, expect } from '@playwright/test'

/**
 * WCAG 2.3.3 guardrail: when the user has prefers-reduced-motion: reduce,
 * the global rule in src/app/globals.css collapses CSS transitions and
 * animations to near-instant. This spec verifies that contract holds on a
 * still-present interactive element (a header nav link carries a
 * `transition-colors` utility, so its transition-duration is the canonical
 * thing the media query must flatten).
 */

function durationToSeconds(value: string): number {
  // Take the first comma-separated token, e.g. "0.15s" or "0.01ms".
  const token = value.split(',')[0].trim()
  if (token.endsWith('ms')) return parseFloat(token) / 1000
  if (token.endsWith('s')) return parseFloat(token)
  return Number.NaN
}

test.describe('prefers-reduced-motion', () => {
  test('collapses CSS transition durations under reduced motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('/')

    expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(
      true
    )

    const navLink = page.locator('header nav a').first()
    const duration = await navLink.evaluate((el) => getComputedStyle(el).transitionDuration)

    // Under reduced motion the global rule forces ~0.01ms; without it this
    // would be the Tailwind default (0.15s). Allow generous slack.
    expect(durationToSeconds(duration)).toBeLessThanOrEqual(0.05)
  })
})
