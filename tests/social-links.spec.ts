import { test, expect } from '@playwright/test'

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

  test('any rendered social links are well-formed', async ({ page }) => {
    await page.goto('/')

    // Social icons live in the brand column and open in a new tab.
    const socialLinks = page.locator('footer a[target="_blank"][aria-label]')
    const count = await socialLinks.count()

    for (let i = 0; i < count; i++) {
      const link = socialLinks.nth(i)
      await expect(link).toHaveAttribute('rel', /noopener/)
      const href = await link.getAttribute('href')
      expect(href && href.startsWith('https://')).toBeTruthy()
    }
  })
})
