/**
 * Article catalogue for The Afghanistan Affairs.
 *
 * These entries are migrated from the original Blogger publication
 * (https://theafghanistanaffairs.blogspot.com). This module holds the
 * canonical metadata for every piece; full article bodies are ported into
 * per-post pages in a later phase. Until a post's body is ported, `sourceUrl`
 * links readers to the original on Blogger.
 *
 * NOTE: a handful of the October 2013 pieces carry approximate publication
 * days (the month/year are accurate); these are refined as bodies are ported.
 */

export type ArticleLanguage = 'en' | 'ps' | 'fa' // English, Pashto, Dari (Persian)

export type ResearchAreaId =
  | 'governance'
  | 'economy'
  | 'security'
  | 'regional-affairs'
  | 'human-rights'
  | 'womens-rights'
  | 'education'
  | 'climate-environment'
  | 'migration-displacement'
  | 'society-culture'

export type ArticleType = 'featured-report' | 'policy-brief' | 'analysis' | 'commentary'

export interface Article {
  /** URL-safe identifier, also used as the /articles/[slug] route segment. */
  slug: string
  title: string
  /** ISO date (yyyy-mm-dd). */
  date: string
  area: ResearchAreaId
  type: ArticleType
  language: ArticleLanguage
  author: string
  excerpt: string
  /** Original post on the legacy Blogger site. */
  sourceUrl: string
  /** Marks the single flagship "Featured Report" on the homepage. */
  featured?: boolean
}

const AUTHOR = 'Moheb Jabarkhail'
const BLOG = 'https://theafghanistanaffairs.blogspot.com'

export const articles: Article[] = [
  {
    slug: 'rethinking-democratization-in-post-911-afghanistan',
    title: 'Rethinking Democratization in Post-9/11 Afghanistan: State-Building Before Democracy?',
    date: '2026-06-25',
    area: 'governance',
    type: 'featured-report',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Democracy failed in Afghanistan not because it is incompatible with Afghan society, but because democratic competition was introduced before the institutional foundations were firmly established. The sequencing of political development matters.',
    sourceUrl: `${BLOG}/2026/06/rethinking-democratization-in-post-911_0596625879.html`,
    featured: true,
  },
  {
    slug: 'review-of-the-latest-world-bank-afghanistan-development-update',
    title: "A Review of the Latest World Bank's Afghanistan Development Update (ADU)",
    date: '2026-06-10',
    area: 'economy',
    type: 'policy-brief',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Afghanistan achieved 4.8% GDP growth and improved tax revenues, yet GDP per capita declined 5.6% as refugee returns drove rapid population growth. Macroeconomic gains have not yet reached most Afghans.',
    sourceUrl: `${BLOG}/2026/06/a-review-of-latest-world-banks.html`,
  },
  {
    slug: 'afghanistan-and-pakistan-fairy-tale-of-two-upset-neighbors',
    title: 'Afghanistan and Pakistan: Fairy Tale of Two Upset Neighbors',
    date: '2020-06-12',
    area: 'regional-affairs',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Mutual mistrust persists between two neighbors who share cultural heritage and language. Terrorism, refugee populations, and a long blame game keep the relationship locked in suspicion.',
    sourceUrl: `${BLOG}/2020/06/the-way-forward-for-afghanistan-and.html`,
  },
  {
    slug: 'peace-in-afghanistan-the-unanswered-question-of-governance',
    title: 'Peace in Afghanistan: The Unanswered Question of Governance',
    date: '2019-08-14',
    area: 'governance',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'As US–Taliban negotiations advanced in 2019, the central question of governance went unaddressed — constitutional democracy versus the Taliban’s Emirate model remained unreconciled.',
    sourceUrl: `${BLOG}/2019/08/the-governance-question-in-post-us.html`,
  },
  {
    slug: 'afghanistans-new-ambassador-to-pakistan',
    title: "Afghanistan's New Ambassador to Pakistan: Opportunity for Better Af-Pak Relations?",
    date: '2015-12-02',
    area: 'regional-affairs',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'The appointment of Dr. Hazrat-Omar Zakhilwal, a former Chief Economist, signals a chance to anchor Afghanistan–Pakistan ties in economic cooperation rather than recurring crisis.',
    sourceUrl: `${BLOG}/2015/12/afghanistans-new-ambassador-to-pakistan.html`,
  },
  {
    slug: 'dealing-with-poverty-is-another-priority-for-the-new-government',
    title: 'Dealing with Poverty is Another Priority for the New Govt. in Kabul',
    date: '2015-03-16',
    area: 'economy',
    type: 'policy-brief',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'With President Ashraf Ghani’s government taking hold, poverty — stubbornly near 38 percent despite years of aid — demands a central place on the national agenda.',
    sourceUrl: `${BLOG}/2015/03/dealing-with-poverty-is-another.html`,
  },
  {
    slug: 'time-is-ripe-for-a-new-chapter-in-af-pak-relations',
    title: 'Time is Ripe for a New Chapter in Af-Pak Relations',
    date: '2014-10-19',
    area: 'regional-affairs',
    type: 'commentary',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Ashraf Ghani’s presidency offered fresh hope for peace and stability — and an early opening to reset Afghanistan’s troubled relationship with Pakistan.',
    sourceUrl: `${BLOG}/2014/10/the-time-is-ripe-for-new-chapter-in-af.html`,
  },
  {
    slug: 'afghans-successfully-conduct-run-off-presidential-elections',
    title: 'Afghans Successfully Conduct Run-Off Presidential Elections',
    date: '2014-06-17',
    area: 'governance',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'On June 14, nearly 7 million Afghans again voted for peace and democracy, completing a run-off that underscored the public’s commitment to the ballot.',
    sourceUrl: `${BLOG}/2014/06/afghans-successfully-conduct-run-off.html`,
  },
  {
    slug: 'yawa-tsoki-aw-yolas-kandidan',
    title: 'يوه څوکۍ او ۱۱ کاندیدان (One Seat and Eleven Candidates)',
    date: '2014-04-27',
    area: 'governance',
    type: 'analysis',
    language: 'ps',
    author: AUTHOR,
    excerpt:
      'A Pashto-language analysis of Afghanistan’s 2014 presidential contest and the crowded field of candidates competing for the country’s highest office.',
    sourceUrl: `${BLOG}/2014/04/blog-post_27.html`,
  },
  {
    slug: 'afghanistan-after-2014',
    title: 'افغانستان بعد از ۲۰۱۴ (Afghanistan After 2014)',
    date: '2014-04-22',
    area: 'security',
    type: 'analysis',
    language: 'fa',
    author: AUTHOR,
    excerpt:
      'A Dari-language examination of Afghanistan’s transition after the drawdown of international forces, and the development shifts the country has seen since the 1990s.',
    sourceUrl: `${BLOG}/2014/04/blog-post.html`,
  },
  {
    slug: 'afghan-elections-a-proof-of-success',
    title: 'Afghan Elections: A Proof of Success in Afghanistan',
    date: '2014-04-22',
    area: 'governance',
    type: 'commentary',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'As Afghanistan transitions toward democracy, the world should recognize that intervention has not failed — the elections are themselves proof of meaningful progress.',
    sourceUrl: `${BLOG}/2014/04/afghan-elections-proof-of-success-in.html`,
  },
  {
    slug: 'the-west-should-reconsider-total-afghan-exit',
    title: 'The West Should Reconsider Total Afghan Exit',
    date: '2014-03-28',
    area: 'security',
    type: 'commentary',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'If the West is unhappy with Russia’s move on Crimea, it should reconsider a total exit from Afghanistan to avoid creating another zone of instability.',
    sourceUrl: `${BLOG}/2014/03/the-west-should-reconsider-total-afghan.html`,
  },
  {
    slug: 'the-quarrel-on-bsa-wishes-of-the-afghan-people',
    title: 'The Quarrel on BSA — Wishes of the Afghan People',
    date: '2014-03-12',
    area: 'security',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Negotiations on the Bilateral Security Agreement stalled over differing views on peace guarantees, even as most Afghans favored concluding the deal.',
    sourceUrl: `${BLOG}/2014/03/the-quarrel-on-bsa-wishes-of-afghan.html`,
  },
  {
    slug: 'why-afghans-are-the-dark-horse-in-sports',
    title: "Why Afghans are 'The Dark Horse' in Sports",
    date: '2014-03-05',
    area: 'society-culture',
    type: 'commentary',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Afghan cricketers, dubbed the “Dark Horse” of the international game, embody a resilience and unity that extends well beyond the pitch.',
    sourceUrl: `${BLOG}/2014/03/why-afghans-are-dark-horse-in-sports.html`,
  },
  {
    slug: 'the-bilateral-security-agreement-in-afghanistan',
    title: 'The Bilateral Security Agreement in Afghanistan',
    date: '2014-02-22',
    area: 'security',
    type: 'policy-brief',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'The BSA extends base access to US forces and sets the framework for American military operations in post-2014 Afghanistan.',
    sourceUrl: `${BLOG}/2014/02/the-bilateral-security-agreement-in.html`,
  },
  {
    slug: 'fighting-poverty-today',
    title: 'Fighting Poverty Today',
    date: '2014-02-22',
    area: 'economy',
    type: 'policy-brief',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Our generation has seen unprecedented progress against global poverty, yet millions — many of them Afghans — remain at risk and unreached.',
    sourceUrl: `${BLOG}/2014/02/fighting-poverty-today.html`,
  },
  {
    slug: 'perception-of-corruption-in-afghanistan',
    title: 'Perception of Corruption in Afghanistan',
    date: '2013-12-11',
    area: 'governance',
    type: 'policy-brief',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Transparency International ranked Afghanistan 175th on corruption perception, reflecting systemic challenges in governance and the use of development aid.',
    sourceUrl: `${BLOG}/2013/12/corruption-remains-rampant-in.html`,
  },
  {
    slug: 'kabul-consults-on-afghan-us-treaty-in-a-loya-jirga',
    title: 'Kabul Consults on Afghan-US Treaty in a Loya Jirga',
    date: '2013-11-04',
    area: 'governance',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'President Karzai convened a Loya Jirga consultative council to weigh the fate of the bilateral agreement with the United States.',
    sourceUrl: `${BLOG}/2013/11/kabul-consults-on-afghan-us-treaty.html`,
  },
  {
    slug: 'afghan-prospects-for-the-post-2014-era',
    title: 'Afghan Prospects for Post-2014 Era',
    date: '2013-10-10',
    area: 'security',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'The coalition’s 2014 withdrawal plans set in motion a handover of security responsibility and a recalibration of development across the country.',
    sourceUrl: `${BLOG}/2013/10/afghan-prospects-for-post-2014-era.html`,
  },
  {
    slug: 'afghan-elections-for-the-future-of-afghanistan',
    title: 'Afghan Elections for the Future of Afghanistan',
    date: '2013-10-10',
    area: 'governance',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Inclusiveness, candidate credibility, and electoral transparency emerge as the critical tests facing Afghanistan’s 2014 presidential elections.',
    sourceUrl: `${BLOG}/2013/10/afghan-elections-for-future-of.html`,
  },
  {
    slug: 'afghan-security-after-us-withdrawal',
    title: 'Afghan Security After US Withdrawal',
    date: '2013-10-10',
    area: 'security',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'As coalition forces prepare to leave by 2014, concerns mount that echo the uncertainty of the Soviet withdrawal era.',
    sourceUrl: `${BLOG}/2013/10/afghan-security-after-us-withdrawal.html`,
  },
  {
    slug: 'afghanistans-pakistan-challenge',
    title: "Afghanistan's Pakistan Challenge",
    date: '2013-10-08',
    area: 'regional-affairs',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'The cross-border dynamics with Pakistan remain among the most consequential — and most intractable — challenges to Afghan stability.',
    sourceUrl: `${BLOG}/2013/10/afghanistans-pakistan-challenge.html`,
  },
  {
    slug: 'the-mistake-of-forgetting-afghanistan',
    title: 'The Mistake of Forgetting Afghanistan',
    date: '2013-10-07',
    area: 'security',
    type: 'commentary',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Disengagement carries a price. Allowing Afghanistan to slip from international attention risks repeating the costly errors of the 1990s.',
    sourceUrl: `${BLOG}/2013/10/the-mistake-of-forgetting-afghanistan.html`,
  },
  {
    slug: 'a-unified-kabul-after-coalition-withdrawal',
    title: 'A Unified Kabul After Coalition Withdrawal',
    date: '2013-10-06',
    area: 'governance',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Political cohesion in Kabul will determine whether the post-coalition transition holds together or fractures along familiar fault lines.',
    sourceUrl: `${BLOG}/2013/10/a-unified-kabul-after-coalition.html`,
  },
  {
    slug: 'the-challenge-of-democracy-in-afghanistan',
    title: 'The Challenge of Democracy in Afghanistan',
    date: '2013-10-05',
    area: 'governance',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'Building durable democratic practice in Afghanistan means contending with institutions, expectations, and a difficult security environment all at once.',
    sourceUrl: `${BLOG}/2013/10/the-challnege-of-democracy-in.html`,
  },
  {
    slug: 'doha-taliban-talks-opportunity-or-threat',
    title: 'Doha Taliban Talks: Opportunity or Threat?',
    date: '2013-10-04',
    area: 'security',
    type: 'analysis',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'The opening of a Taliban office in Doha raised hopes for dialogue — and fears about legitimacy and leverage in any negotiated settlement.',
    sourceUrl: `${BLOG}/2013/10/doha-taliban-talks-opportunity-or-threat.html`,
  },
  {
    slug: 'sports-uniting-afghans',
    title: 'Sports Uniting Afghans',
    date: '2013-10-02',
    area: 'society-culture',
    type: 'commentary',
    language: 'en',
    author: AUTHOR,
    excerpt:
      'From cricket to football, sport has become a rare and powerful force for national unity across Afghanistan’s diverse communities.',
    sourceUrl: `${BLOG}/2013/10/sports-uniting-afghans-moheb-arsalan-j.html`,
  },
]

/** Articles sorted newest-first. */
export const articlesByDate: Article[] = [...articles].sort((a, b) => b.date.localeCompare(a.date))

export const featuredArticle: Article = articles.find((a) => a.featured) ?? articlesByDate[0]

export function articlesByType(type: ArticleType, limit?: number): Article[] {
  const list = articlesByDate.filter((a) => a.type === type)
  return typeof limit === 'number' ? list.slice(0, limit) : list
}

/** Newest-first, excluding the flagship featured report. */
export function recentArticles(limit?: number): Article[] {
  const list = articlesByDate.filter((a) => !a.featured)
  return typeof limit === 'number' ? list.slice(0, limit) : list
}

export const articleTypeLabel: Record<ArticleType, string> = {
  'featured-report': 'Featured Report',
  'policy-brief': 'Policy Brief',
  analysis: 'Analysis',
  commentary: 'Commentary',
}

export const researchAreaLabel: Record<ResearchAreaId, string> = {
  governance: 'Governance',
  economy: 'Economy',
  security: 'Security',
  'regional-affairs': 'Regional Affairs',
  'human-rights': 'Human Rights',
  'womens-rights': "Women's Rights",
  education: 'Education',
  'climate-environment': 'Climate & Environment',
  'migration-displacement': 'Migration & Displacement',
  'society-culture': 'Society & Culture',
}

export function formatArticleDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1))
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
