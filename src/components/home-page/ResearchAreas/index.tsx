import React from 'react'
import Link from 'next/link'
import {
  Landmark,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Scale,
  Users,
  GraduationCap,
  Leaf,
  Plane,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'

interface Area {
  label: string
  icon: LucideIcon
  href: string
}

// Mirrors the nine focus areas in the design doc. Links route to the
// publications list (/articles); per-area filtering is wired up in a
// later phase.
const areas: Area[] = [
  { label: 'Governance', icon: Landmark, href: '/articles' },
  { label: 'Economy', icon: TrendingUp, href: '/articles' },
  { label: 'Security', icon: ShieldCheck, href: '/articles' },
  { label: 'Regional Affairs', icon: Globe2, href: '/articles' },
  { label: 'Human Rights', icon: Scale, href: '/articles' },
  { label: "Women's Rights", icon: Users, href: '/articles' },
  { label: 'Education', icon: GraduationCap, href: '/articles' },
  { label: 'Climate & Environment', icon: Leaf, href: '/articles' },
  { label: 'Migration & Displacement', icon: Plane, href: '/articles' },
]

const ResearchAreas = () => {
  return (
    <section id="research-areas" className="border-y border-[#e3e8ee] bg-[#f7f9fb] py-14">
      <div className="mx-auto max-w-[1248px] px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-[14px] font-[700] uppercase tracking-[0.2em] text-[#0e2742]">
            Research Areas
          </h2>
          <Link
            href="/articles"
            className="inline-flex items-center gap-1 text-[12px] font-[700] uppercase tracking-wide text-[#c79a3b] hover:text-[#0e2742]"
          >
            View All Areas <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <ul className="grid grid-cols-3 gap-y-8 sm:grid-cols-5 lg:grid-cols-9">
          {areas.map(({ label, icon: Icon, href }) => (
            <li key={label}>
              <Link href={href} className="group flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center text-[#0e2742] transition-colors group-hover:text-[#c79a3b]">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <span className="text-[12px] font-[600] leading-tight text-[#5b6b7f] group-hover:text-[#0e2742]">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ResearchAreas
