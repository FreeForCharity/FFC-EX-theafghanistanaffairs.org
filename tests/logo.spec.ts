import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Branding / Wordmark Visibility Tests
 *
 * This design uses a text wordmark (no image logo). These tests verify that
 * the header wordmark is present, links to the homepage, and is repeated in
 * the footer.
 *
 * Note: Test expectations use values from test.config.ts for easy customization
 */

test.describe('Header Wordmark', () => {
  test('should display the wordmark in the header linking to home', async ({ page }) => {
    await page.goto('/')

    const brandLink = page.locator('header a[href="/"]').first()
    await expect(brandLink).toBeVisible()
    await expect(brandLink).toContainText(testConfig.logo.wordmarkTop)
    await expect(brandLink).toContainText(testConfig.logo.wordmarkBottom)
  })

  test('should repeat the wordmark in the footer', async ({ page }) => {
    await page.goto('/')

    const footer = page.locator('footer')
    await expect(footer).toContainText(testConfig.logo.wordmarkTop)
    await expect(footer).toContainText(testConfig.logo.wordmarkBottom)
  })
})
