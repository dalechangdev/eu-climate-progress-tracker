export type Status = 'on-track' | 'at-risk' | 'delayed' | 'achieved'
export type PolicyStatus = 'adopted' | 'in-force' | 'proposed' | 'under-negotiation'
export type Trend = 'improving' | 'worsening' | 'stable'

export interface Metric {
  label: string
  value: string
  subValue?: string
  trend?: Trend
}

export interface Policy {
  name: string
  sector: string
  status: PolicyStatus
  adoptedDate?: string
  description: string
}

export interface Milestone {
  year: number
  title: string
  achieved: boolean
}

export interface Initiative {
  id: string
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  status: Status
  overallProgress: number
  targetYear: number
  announcedYear: number
  keyMetrics: Metric[]
  policies?: Policy[]
  milestones: Milestone[]
}

export const initiatives: Initiative[] = [
  {
    id: 'european-green-deal',
    slug: 'european-green-deal',
    title: 'European Green Deal',
    shortTitle: 'Green Deal',
    tagline: "Europe's roadmap to climate neutrality",
    description:
      'The European Green Deal is the overarching policy framework announced in December 2019 by the Von der Leyen Commission. It sets the ambition for the EU to become the first climate-neutral continent by 2050, covering energy, transport, industry, agriculture, and biodiversity. It underpins all other EU climate legislation.',
    status: 'on-track',
    overallProgress: 71,
    targetYear: 2050,
    announcedYear: 2019,
    keyMetrics: [
      { label: 'Legislative Packages Adopted', value: '13/13', trend: 'improving' },
      { label: 'GHG Reduction vs 1990 (2022)', value: '−34%', subValue: 'Target: −55% by 2030', trend: 'improving' },
      { label: 'Investment Mobilised', value: '€1T+', subValue: 'Sustainable Europe Investment Plan', trend: 'improving' },
      { label: 'Active Sub-initiatives', value: '50+', trend: 'stable' },
    ],
    milestones: [
      { year: 2019, title: 'European Green Deal announced (December)', achieved: true },
      { year: 2020, title: 'European Climate Law proposed', achieved: true },
      { year: 2021, title: 'European Climate Law adopted', achieved: true },
      { year: 2021, title: 'Fit for 55 package of 13 proposals launched', achieved: true },
      { year: 2022, title: 'TEN-E & REPowerEU adopted', achieved: true },
      { year: 2023, title: 'All Fit for 55 core legislation adopted', achieved: true },
      { year: 2024, title: '2040 climate target (−90%) proposed by Commission', achieved: true },
      { year: 2026, title: 'Industrial transition mid-point review', achieved: false },
      { year: 2030, title: '55% net GHG reduction target', achieved: false },
      { year: 2040, title: '90% GHG reduction (proposed intermediate target)', achieved: false },
      { year: 2050, title: 'Climate neutrality achieved', achieved: false },
    ],
  },
  {
    id: 'fit-for-55',
    slug: 'fit-for-55',
    title: 'Fit for 55',
    shortTitle: 'Fit for 55',
    tagline: 'The legislative engine of the Green Deal',
    description:
      'Fit for 55 is the EU\'s comprehensive package of 13 legislative proposals published in July 2021, designed to reduce net greenhouse gas emissions by at least 55% by 2030 vs 1990 levels. All 13 core proposals have been adopted into law (2022–2023) and are now in their implementation phase across energy, transport, industry, land use, and carbon markets.',
    status: 'on-track',
    overallProgress: 85,
    targetYear: 2030,
    announcedYear: 2021,
    keyMetrics: [
      { label: 'Core Proposals Adopted', value: '13/13', trend: 'improving' },
      { label: 'Proposals In Force', value: '13', subValue: 'Full implementation underway', trend: 'improving' },
      { label: 'EU ETS Carbon Price (2025)', value: '~€65/t', subValue: 'CO₂ equivalent', trend: 'stable' },
      { label: 'CBAM Phase', value: 'Transitional', subValue: 'Full enforcement from 2026', trend: 'improving' },
    ],
    policies: [
      {
        name: 'EU ETS Reform',
        sector: 'Cross-sector',
        status: 'in-force',
        adoptedDate: 'Apr 2023',
        description:
          'Revised Emissions Trading System with a steeper annual cap reduction (4.3% from 2024), expansion to maritime sector, and phase-out of free allowances for industry.',
      },
      {
        name: 'EU ETS 2 (Buildings & Road Transport)',
        sector: 'Buildings / Transport',
        status: 'in-force',
        adoptedDate: 'Apr 2023',
        description:
          'A new, separate ETS covering fuel combustion in buildings and road transport, launching in 2027 with a €45/t price cap in early years.',
      },
      {
        name: 'Carbon Border Adjustment Mechanism (CBAM)',
        sector: 'Industry / Trade',
        status: 'in-force',
        adoptedDate: 'May 2023',
        description:
          'Carbon price on imports of cement, steel, aluminium, fertilisers, electricity, and hydrogen. Transitional phase Oct 2023–Dec 2025; full enforcement from Jan 2026.',
      },
      {
        name: 'CO₂ Standards for Cars & Vans',
        sector: 'Transport',
        status: 'in-force',
        adoptedDate: 'Apr 2023',
        description:
          '100% zero-emission new passenger cars and vans from 2035. Interim targets: −55% CO₂ for cars and −50% for vans by 2030 vs 2021 baseline.',
      },
      {
        name: 'Renewable Energy Directive III (RED III)',
        sector: 'Energy',
        status: 'in-force',
        adoptedDate: 'Sep 2023',
        description:
          'Binding EU-wide target of 42.5% renewable energy in the gross final energy consumption by 2030, up from the previous 32% target.',
      },
      {
        name: 'Energy Efficiency Directive (EED)',
        sector: 'Energy',
        status: 'in-force',
        adoptedDate: 'Sep 2023',
        description:
          'Binding 11.7% energy savings target vs 2020 reference scenario by 2030. Public sector required to renovate 3% of floor area annually.',
      },
      {
        name: 'Alternative Fuels Infrastructure Regulation (AFIR)',
        sector: 'Transport',
        status: 'in-force',
        adoptedDate: 'Sep 2023',
        description:
          'Mandatory deployment of EV charging (150 kW minimum every 60 km) and hydrogen refuelling stations along the TEN-T core network.',
      },
      {
        name: 'ReFuelEU Aviation',
        sector: 'Aviation',
        status: 'in-force',
        adoptedDate: 'Oct 2023',
        description:
          'Sustainable aviation fuel (SAF) blending mandate at EU airports: 6% by 2030, 34% by 2040, 70% by 2050.',
      },
      {
        name: 'FuelEU Maritime',
        sector: 'Maritime',
        status: 'in-force',
        adoptedDate: 'Sep 2023',
        description:
          'GHG intensity limits on marine fuels: −2% by 2025, −6% by 2030, −14.5% by 2035, −80% by 2050 vs 2020 baseline.',
      },
      {
        name: 'Effort Sharing Regulation (ESR)',
        sector: 'Non-ETS Sectors',
        status: 'in-force',
        adoptedDate: 'May 2023',
        description:
          'Binding national GHG reduction targets for sectors outside ETS (road transport, buildings, agriculture, small industry, waste) — ranging from −10% to −50% by 2030.',
      },
      {
        name: 'LULUCF Regulation',
        sector: 'Land Use',
        status: 'in-force',
        adoptedDate: 'May 2023',
        description:
          'Land use, land-use change and forestry carbon sink target of 310 Mt CO₂eq by 2030, with binding national targets. Phase 2 (2026–2030) sets overall EU net-removal accounting.',
      },
      {
        name: 'Social Climate Fund',
        sector: 'Social Policy',
        status: 'in-force',
        adoptedDate: 'May 2023',
        description:
          '€86.7 billion fund (2026–2032) to support vulnerable households, micro-enterprises, and transport users facing cost increases from ETS 2.',
      },
      {
        name: 'TEN-E Regulation (Energy Infrastructure)',
        sector: 'Energy Infrastructure',
        status: 'in-force',
        adoptedDate: 'Mar 2022',
        description:
          'Trans-European energy infrastructure framework supporting offshore renewable energy, green hydrogen networks, and smart grids while phasing out fossil fuel project support.',
      },
    ],
    milestones: [
      { year: 2021, title: 'Fit for 55 package published (13 legislative proposals)', achieved: true },
      { year: 2022, title: 'TEN-E Regulation enters into force', achieved: true },
      { year: 2023, title: 'EU ETS reform, CBAM, Cars CO₂ standards adopted', achieved: true },
      { year: 2023, title: 'RED III, EED, AFIR, Maritime, Aviation legislation adopted', achieved: true },
      { year: 2023, title: 'CBAM transitional reporting phase begins (October)', achieved: true },
      { year: 2024, title: 'ETS maritime coverage begins', achieved: true },
      { year: 2026, title: 'CBAM full enforcement; ETS free allowances phase-out begins', achieved: false },
      { year: 2027, title: 'ETS 2 (buildings & road transport) launches', achieved: false },
      { year: 2030, title: '55% net GHG reduction achieved', achieved: false },
    ],
  },
  {
    id: '2030-targets',
    slug: '2030-targets',
    title: '2030 Climate Targets',
    shortTitle: '2030 Targets',
    tagline: "The EU's binding near-term climate commitments",
    description:
      'The EU\'s 2030 climate targets represent the most critical near-term milestone on the road to net zero. Legally binding under the European Climate Law (June 2021), the EU must achieve at least a 55% net reduction in GHG emissions by 2030 vs 1990 levels. Sub-targets cover renewable energy (42.5%), energy efficiency (−11.7%), and sectoral transition milestones.',
    status: 'at-risk',
    overallProgress: 62,
    targetYear: 2030,
    announcedYear: 2020,
    keyMetrics: [
      { label: 'GHG Reduction vs 1990 (2022 data)', value: '−34%', subValue: '2030 target: −55%', trend: 'improving' },
      { label: 'Renewable Energy Share (2023)', value: '24%', subValue: 'Target: 42.5% by 2030', trend: 'improving' },
      { label: 'Primary Energy Efficiency Gain', value: '−3.2%', subValue: 'Target: −11.7% by 2030', trend: 'worsening' },
      { label: 'EV Share of New Car Sales (2024)', value: '~18%', subValue: 'Needs ~60%+ by 2030', trend: 'improving' },
    ],
    milestones: [
      { year: 2019, title: 'European Green Deal sets 2050 neutrality goal', achieved: true },
      { year: 2020, title: 'EU raises 2030 target from −40% to −55%', achieved: true },
      { year: 2021, title: 'European Climate Law: −55% by 2030 legally binding', achieved: true },
      { year: 2021, title: 'Fit for 55 package launched to deliver the target', achieved: true },
      { year: 2023, title: 'Full Fit for 55 legislative package adopted', achieved: true },
      { year: 2024, title: 'National Energy & Climate Plans (NECPs) updated', achieved: true },
      { year: 2025, title: 'ETS 2 implementation planning complete', achieved: false },
      { year: 2026, title: 'CBAM full phase-in; ETS free allowances phase-out begins', achieved: false },
      { year: 2027, title: 'ETS 2 launches (buildings & road transport)', achieved: false },
      { year: 2030, title: '55% net GHG reduction vs 1990 achieved', achieved: false },
    ],
  },
  {
    id: 'net-zero-2050',
    slug: 'net-zero-2050',
    title: 'Net Zero 2050',
    shortTitle: 'Net Zero 2050',
    tagline: 'Climate neutrality by mid-century',
    description:
      'The EU\'s commitment to climate neutrality by 2050 is enshrined in the European Climate Law, making the EU the first major economy to set this target in binding legislation. Achieving net zero requires transforming every sector — power, transport, buildings, industry, agriculture, and land use — while maintaining economic competitiveness. The Commission proposed a 2040 interim target of −90% in February 2024.',
    status: 'at-risk',
    overallProgress: 34,
    targetYear: 2050,
    announcedYear: 2019,
    keyMetrics: [
      { label: 'GHG Reduction vs 1990 (2022)', value: '−34%', subValue: 'Target: net zero by 2050', trend: 'improving' },
      { label: '2040 Target (proposed)', value: '−90%', subValue: 'vs 1990; under legislation', trend: 'stable' },
      { label: 'Renewable Share in Electricity (2023)', value: '~44%', subValue: 'Target: ~100% by 2035–40', trend: 'improving' },
      { label: 'Annual Emissions Reduction Rate Needed', value: '~4–5%/yr', subValue: 'Current rate: ~1–2%/yr', trend: 'worsening' },
    ],
    milestones: [
      { year: 2019, title: 'EU Green Deal sets 2050 climate neutrality goal', achieved: true },
      { year: 2021, title: 'European Climate Law codifies 2050 net-zero in EU law', achieved: true },
      { year: 2022, title: 'REPowerEU: accelerated clean energy deployment', achieved: true },
      { year: 2024, title: '2040 interim target (−90%) proposed by Commission', achieved: true },
      { year: 2025, title: '2040 target enters legislative process', achieved: false },
      { year: 2030, title: '−55% GHG (critical 2030 stepping stone)', achieved: false },
      { year: 2035, title: '100% ZEV mandate for new cars & vans', achieved: false },
      { year: 2035, title: 'No new fossil fuel boiler installations', achieved: false },
      { year: 2040, title: '−90% GHG emissions (proposed target)', achieved: false },
      { year: 2045, title: 'Near-complete phase-out of unabated fossil fuels', achieved: false },
      { year: 2050, title: 'Climate neutrality: net-zero GHG emissions EU-wide', achieved: false },
    ],
  },
]

export function getInitiative(slug: string): Initiative | undefined {
  return initiatives.find((i) => i.slug === slug)
}

export function getStatusLabel(status: Status): string {
  const labels: Record<Status, string> = {
    'on-track': 'On Track',
    'at-risk': 'At Risk',
    delayed: 'Delayed',
    achieved: 'Achieved',
  }
  return labels[status]
}
