import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Events Section Tests
 *
 * The Events column lives in the "Events / Data & Insights / Commentary"
 * section (#events). With no events currently scheduled it shows an honest
 * empty state plus a "Get Notified" CTA. These tests verify the section
 * renders, the empty state is present, and the footer navigation reaches it.
 */

test.describe('Events Section', () => {
  test('should render the Events section on the homepage', async ({ page }) => {
    await page.goto('/')

    const eventsSection = page.locator(`#${testConfig.events.sectionId}`)
    await expect(eventsSection).toBeVisible()

    await expect(
      eventsSection.getByRole('heading', { name: testConfig.events.heading })
    ).toBeVisible()
  })

  test('should show the empty state and a notify CTA', async ({ page }) => {
    await page.goto('/')

    const eventsSection = page.locator(`#${testConfig.events.sectionId}`)
    await expect(eventsSection).toContainText(testConfig.events.emptyStateText)

    const cta = eventsSection.locator(`a[href="/#newsletter"]`)
    await expect(cta.first()).toBeVisible()
    await expect(cta.first()).toContainText(testConfig.events.ctaText)
  })

  test('should be reachable from the footer navigation', async ({ page }) => {
    await page.goto('/')

    const footerEventsLink = page.locator(`footer a[href="/#${testConfig.events.sectionId}"]`)
    await expect(footerEventsLink).toBeVisible()
    await expect(footerEventsLink).toContainText(testConfig.events.footerLinkText)

    await footerEventsLink.click()
    await page.waitForTimeout(400)
    await expect(page.locator(`#${testConfig.events.sectionId}`)).toBeVisible()
  })

  test('should render on a mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const eventsSection = page.locator(`#${testConfig.events.sectionId}`)
    await eventsSection.scrollIntoViewIfNeeded()
    await expect(eventsSection).toBeVisible()
    await expect(
      eventsSection.getByRole('heading', { name: testConfig.events.heading })
    ).toBeVisible()
  })
})
