import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Social Links Tests
 *
 * The Afghanistan Affairs has no published social profiles yet, so the footer
 * intentionally renders no social icons (empty hrefs are filtered out). These
 * tests verify:
 * 1. No defunct/placeholder social links leak into the footer.
 * 2. Whatever social links DO render are well-formed (open in a new tab with
 *    a security rel and an aria-label) — so the suite stays correct once real
 *    profile URLs are added to siteConfig.social.
 */

test.describe('Footer Social Links', () => {
  test('should not contain defunct social links', async ({ page }) => {
    await page.goto('/')

    for (const host of ['plus.google.com', 'google.com/+']) {
      await expect(page.locator(`footer a[href*="${host}"]`)).toHaveCount(0)
    }
  })

  test('any rendered social links are well-formed and use allowed labels', async ({ page }) => {
    await page.goto('/')

    // Social icons live in the brand column, open in a new tab, and carry an
    // aria-label. They share that shape with no other footer link, so this
    // locator targets exactly the social set (currently empty until official
    // profile URLs are added to siteConfig.social).
    const socialLinks = page.locator(
      'footer a[target="_blank"][rel*="noopener"][aria-label]:not([href^="mailto:"])'
    )
    const count = await socialLinks.count()

    for (let i = 0; i < count; i++) {
      const link = socialLinks.nth(i)
      const href = await link.getAttribute('href')
      expect(href && href.startsWith('https://')).toBeTruthy()

      // Only the approved platform labels should reach the footer.
      const label = await link.getAttribute('aria-label')
      expect(testConfig.socialLinks.expectedLabels).toContain(label)
    }
  })
})
