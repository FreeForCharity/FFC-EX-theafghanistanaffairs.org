import React from 'react'
import { render } from '@testing-library/react'
import ArticleSchema, { buildArticleSchema } from '../../../src/components/seo/ArticleSchema'
import { articles } from '../../../src/data/articles'
import { siteConfig } from '../../../src/lib/site.config'

const sample = articles[0]

describe('ArticleSchema', () => {
  it('builds a schema.org Article object from an article record', () => {
    const schema = buildArticleSchema(sample)

    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('Article')
    expect(schema.headline).toBe(sample.title)
    expect(schema.description).toBe(sample.excerpt)
    expect(schema.datePublished).toBe(sample.date)
    expect(schema.inLanguage).toBe(sample.language)

    expect(typeof schema.url).toBe('string')
    expect(schema.url as string).toContain(`/articles/${sample.slug}`)

    const author = schema.author as Record<string, unknown>
    expect(author['@type']).toBe('Person')
    expect(author.name).toBe(sample.author)

    const publisher = schema.publisher as Record<string, unknown>
    expect(publisher.name).toBe(siteConfig.name)
  })

  it('renders a single application/ld+json script block whose JSON parses', () => {
    const { container } = render(<ArticleSchema article={sample} />)
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts.length).toBe(1)
    const parsed = JSON.parse(scripts[0].textContent ?? '') as Record<string, unknown>
    expect(parsed['@type']).toBe('Article')
    expect(parsed.headline).toBe(sample.title)
  })
})
