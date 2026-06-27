import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Insights Section Tests
 *
 * The homepage "From the Archive / Data & Insights / Commentary" section
 * (#insights) presents real archive data — a by-year index of every
 * publication, sourced development figures, and recent commentary. These
 * tests verify the section renders its three columns on desktop and mobile
 * and that the archive index links into the Publications page. There are no
 * empty states or placeholders to assert against.
 */

test.describe('Insights Section', () => {
  test('should render the insights section on the homepage', async ({ page }) => {
    await page.goto('/')

    const section = page.locator(`#${testConfig.insights.sectionId}`)
    await section.scrollIntoViewIfNeeded()
    await expect(section).toBeVisible()

    await expect(
      section.getByRole('heading', { name: testConfig.insights.archiveHeading })
    ).toBeVisible()
    await expect(
      section.getByRole('heading', { name: testConfig.insights.dataHeading })
    ).toBeVisible()
    await expect(
      section.getByRole('heading', { name: testConfig.insights.commentaryHeading })
    ).toBeVisible()
  })

  test('should show sourced development data, not a placeholder', async ({ page }) => {
    await page.goto('/')

    const section = page.locator(`#${testConfig.insights.sectionId}`)
    await section.scrollIntoViewIfNeeded()
    await expect(section).toContainText(testConfig.insights.glanceTitle)
    // The figures are cited from a real publication and link to its source.
    await expect(section.getByRole('link', { name: /Source:/ })).toBeVisible()
  })

  test('should link the archive index to the Publications page', async ({ page }) => {
    await page.goto('/')

    const section = page.locator(`#${testConfig.insights.sectionId}`)
    await section.scrollIntoViewIfNeeded()

    const archiveLinks = section.locator('a[href="/articles"]')
    await expect(archiveLinks.first()).toBeVisible()
  })

  test('should render on a mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const section = page.locator(`#${testConfig.insights.sectionId}`)
    await section.scrollIntoViewIfNeeded()
    await expect(section).toBeVisible()
    await expect(
      section.getByRole('heading', { name: testConfig.insights.archiveHeading })
    ).toBeVisible()
  })
})
