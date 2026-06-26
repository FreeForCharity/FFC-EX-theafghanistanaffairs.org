import React from 'react'
import { researchAreaIcon } from '@/lib/research-area-icons'
import type { ResearchAreaId } from '@/data/articles'

/**
 * Branded placeholder thumbnail for article cards. Until real photography is
 * commissioned, this renders an intentional navy/gold treatment — a faint
 * research-area watermark plus a gold diamond accent matching the wordmark —
 * rather than an empty gray box that reads as a missing image.
 */
const ArticleThumb = ({ area, className }: { area: ResearchAreaId; className?: string }) => {
  const Icon = researchAreaIcon[area]
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#0e2742] via-[#13314f] to-[#1a3a5c] ${className ?? ''}`}
      aria-hidden="true"
    >
      {/* gold diamond accent */}
      <span className="absolute right-4 top-4 inline-block h-6 w-6 rotate-45 border border-[#c79a3b]/40" />
      {/* faint area watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="h-1/2 w-1/2 text-white/10" strokeWidth={1} />
      </div>
    </div>
  )
}

export default ArticleThumb
