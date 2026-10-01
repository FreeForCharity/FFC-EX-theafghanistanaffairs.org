import { test, expect, type Page } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Google Tag Manager (GTM) Tests
 *
 * These tests verify that Google Tag Manager is properly integrated:
 * 1. GTM script is loaded in the head section
 * 2. dataLayer is initialized
 * 3. GTM noscript fallback exists in body
 * 4. GTM ID is configured in the component
 *
 * The GTM <Script> uses Next.js `strategy="lazyOnload"`, so the inline
 * loader is injected on requestIdleCallback AFTER the load event — not
 * synchronously during navigation. `waitForGtm` waits for that injection so
 * the assertions are deterministic instead of racing the idle callback.
 *
 * Note: Test expectations use values from test.config.ts for easy customization
 */

async function waitForGtm(page: Page): Promise<void> {
  await page.waitForLoadState('load')
  await page.waitForFunction(
    () =>
      document.querySelector('script[id="gtm-script"]') !== null &&
      Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer),
    undefined,
    { timeout: 15000 }
  )
}

test.describe('Google Tag Manager Integration', () => {
  test('should initialize dataLayer on page load', async ({ page }) => {
    await page.goto('/')
    await waitForGtm(page)

    const hasDataLayer = await page.evaluate(() => {
      return typeof window.dataLayer !== 'undefined' && Array.isArray(window.dataLayer)
    })

    expect(hasDataLayer).toBe(true)
  })

  test('should load GTM script with correct ID', async ({ page }) => {
    await page.goto('/')
    await waitForGtm(page)

    const gtmScript = page.locator('script[id="gtm-script"]')
    await expect(gtmScript).toHaveCount(1)

    const scriptContent = await gtmScript.innerHTML()
    expect(scriptContent).toContain('googletagmanager.com/gtm.js')
    expect(scriptContent).toContain('dataLayer')
  })

  test('should have GTM noscript fallback in body', async ({ page }) => {
    await page.goto('/')

    // The noscript fallback is server-rendered, so it's present immediately.
    const pageContent = await page.content()
    expect(pageContent).toContain('googletagmanager.com/ns.html')
    expect(pageContent).toContain('noscript')
  })

  test('should push events to dataLayer', async ({ page }) => {
    await page.goto('/')
    await waitForGtm(page)

    const canPushToDataLayer = await page.evaluate(() => {
      if (typeof window.dataLayer === 'undefined') return false

      const initialLength = window.dataLayer.length
      window.dataLayer.push({ event: 'test_event', test: true })
      return window.dataLayer.length > initialLength
    })

    expect(canPushToDataLayer).toBe(true)
  })

  test('should load GTM script after page interaction', async ({ page }) => {
    await page.goto('/')
    await waitForGtm(page)

    const gtmScript = await page.evaluate(() => {
      const script = document.querySelector('script[id="gtm-script"]')
      return script !== null
    })

    expect(gtmScript).toBe(true)

    const dataLayerInitialized = await page.evaluate(() => {
      return typeof window.dataLayer !== 'undefined'
    })

    expect(dataLayerInitialized).toBe(true)
  })

  test('should work with cookie consent system', async ({ page, context }) => {
    // Clear cookies and localStorage
    await context.clearCookies()
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    // Wait for cookie banner
    const banner = page.locator('[role="region"][aria-label="Cookie consent notice"]')
    await expect(banner).toBeVisible()

    // Accept all cookies
    await page.getByRole('button', { name: 'Accept All' }).click()

    // Verify dataLayer receives consent update event
    const hasConsentEvent = await page.evaluate(() => {
      if (typeof window.dataLayer === 'undefined') return false

      // Check if dataLayer has any consent-related events
      return window.dataLayer.some((item: { event?: string }) => item.event === 'consent_update')
    })

    expect(hasConsentEvent).toBe(true)
  })
})

test.describe('Google Tag Manager Configuration', () => {
  test('should load GTM script with configured ID', async ({ page }) => {
    // This test verifies that GTM loads with the configured ID from test.config.ts
    // The GTM_ID is configured in the component

    await page.goto('/')
    await waitForGtm(page)

    const gtmScript = page.locator('script[id="gtm-script"]')
    await expect(gtmScript).toHaveCount(1)

    // Verify the script contains the correct GTM ID
    const scriptContent = await gtmScript.innerHTML()
    expect(scriptContent).toContain(testConfig.googleTagManager.id)
  })
})
