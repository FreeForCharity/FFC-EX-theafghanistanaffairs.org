/**
 * Test Configuration for Template Customization
 *
 * This file contains all content-specific values used in E2E tests.
 * When customizing this template for a new organization, update these
 * values to match your content instead of modifying individual test files.
 *
 * This makes it easy to:
 * 1. Identify what needs to change when using the template
 * 2. Keep tests working with customized content
 * 3. Maintain a single source of truth for test expectations
 */

export const testConfig = {
  /**
   * Events Section Configuration
   * Used in: tests/events.spec.ts
   */
  events: {
    sectionId: 'events',
    heading: 'Upcoming Events',
    footerLinkText: 'Events',
    emptyStateText: 'No upcoming events scheduled',
    ctaText: 'Get Notified',
  },

  /**
   * Social Media Links Configuration
   * Used in: tests/social-links.spec.ts
   *
   * Official social profiles for The Afghanistan Affairs are not yet
   * published, so the footer renders no social icons (empty hrefs are
   * filtered out in src/components/footer). These labels are the aria-labels
   * to expect once real URLs are added to siteConfig.social.
   */
  socialLinks: {
    expectedLabels: ['X (Twitter)', 'LinkedIn', 'Facebook', 'YouTube'],
  },

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'The Afghanistan Affairs. All rights reserved.',
    searchText: 'All rights reserved',
    linkUrl: 'https://freeforcharity.org',
    linkText: 'Built with Free For Charity',
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-P8V67F35',
  },

  /**
   * Branding / Wordmark Configuration
   * Used in: tests/logo.spec.ts
   *
   * The header brand is a text wordmark (no image logo in this design).
   */
  logo: {
    wordmarkTop: 'AFGHANISTAN',
    wordmarkBottom: 'AFFAIRS',
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
