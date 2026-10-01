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
  Trophy,
  type LucideIcon,
} from 'lucide-react'
import type { ResearchAreaId } from '@/data/articles'

/**
 * Icon for each research area. Used both by the homepage Research Areas row
 * and as the watermark inside article thumbnails, so the two stay in sync.
 */
export const researchAreaIcon: Record<ResearchAreaId, LucideIcon> = {
  governance: Landmark,
  economy: TrendingUp,
  security: ShieldCheck,
  'regional-affairs': Globe2,
  'human-rights': Scale,
  'womens-rights': Users,
  education: GraduationCap,
  'climate-environment': Leaf,
  'migration-displacement': Plane,
  'society-culture': Trophy,
}
