import React from 'react'
import Hero from '@/components/home-page/Hero'
import FeaturedResearch from '@/components/home-page/FeaturedResearch'
import ResearchAreas from '@/components/home-page/ResearchAreas'
import LatestAnalysis from '@/components/home-page/LatestAnalysis'
import InsightsSection from '@/components/home-page/InsightsSection'
import TrustBand from '@/components/home-page/TrustBand'
import NewsletterCta from '@/components/home-page/NewsletterCta'

const index = () => {
  return (
    <div>
      <Hero />
      <FeaturedResearch />
      <ResearchAreas />
      <LatestAnalysis />
      <InsightsSection />
      <TrustBand />
      <NewsletterCta />
    </div>
  )
}

export default index
