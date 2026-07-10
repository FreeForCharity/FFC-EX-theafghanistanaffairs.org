import React from 'react'
import { siteConfig, siteUrl } from '@/lib/site.config'
import { assetPath } from '@/lib/assetPath'
import type { Article, ArticleLanguage } from '@/data/articles'

// schema.org uses BCP 47 language tags; map our internal codes.
const inLanguageByCode: Record<ArticleLanguage, string> = {
  en: 'en',
  ps: 'ps',
  fa: 'fa',
}

/**
 * Builds a schema.org Article JSON-LD object for a single publication. Kept as
 * a pure function (mirroring buildOrganizationSchema) so it can be asserted in
 * unit tests without rendering.
 */
export function buildArticleSchema(article: Article): Record<string, unknown> {
  const canonical = siteUrl(`/articles/${article.slug}`)
  const image = siteUrl(assetPath('/Images/og-image.png'))

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: inLanguageByCode[article.language],
    image,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    url: canonical,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'NGO',
      name: siteConfig.name,
      url: siteUrl('/'),
      logo: {
        '@type': 'ImageObject',
        url: siteUrl(assetPath('/web-app-manifest-512x512.png')),
      },
    },
  }
}

/**
 * Emits a single <script type="application/ld+json"> block carrying an Article
 * schema for one publication so search engines can surface rich results
 * (headline, author, publish date). Render once per article detail page.
 *
 * Server component — no client runtime cost.
 */
export default function ArticleSchema({ article }: { article: Article }) {
  const schema = buildArticleSchema(article)
  return (
    <script
      type="application/ld+json"
      // Stable JSON output with no whitespace, matching OrganizationSchema.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
