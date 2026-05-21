export type Status = 'on-track' | 'at-risk' | 'delayed' | 'achieved'
export type PolicyStatus = 'adopted' | 'in-force' | 'proposed' | 'under-negotiation'
export type Trend = 'improving' | 'worsening' | 'stable'

export interface Metric {
  label: string
  value: string
  subValue?: string
  trend?: Trend
  href?: string
}

export interface LegislativePackage {
  id: string
  name: string
  shortName?: string
  legalAct: string
  sector: string
  adoptedDate: string
  description: string
  keyProvisions: string[]
  references: Reference[]
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

export interface Reference {
  title: string
  url: string
}

export interface Initiative {
  id: string
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  references?: Reference[]
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
    references: [
      { title: 'COM(2019) 640 final – European Green Deal Communication', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:52019DC0640' },
      { title: 'EC press release, 11 Dec 2019', url: 'https://neighbourhood-enlargement.ec.europa.eu/news/european-green-deal-sets-out-how-make-europe-first-climate-neutral-continent-2050-boosting-economy-2019-12-11_en' },
      { title: 'EUR-Lex summary of the European Green Deal', url: 'https://eur-lex.europa.eu/EN/legal-content/summary/european-green-deal.html' },
      { title: 'Council of the EU – European Green Deal', url: 'https://www.consilium.europa.eu/en/policies/european-green-deal/' },
    ],
    status: 'on-track',
    overallProgress: 71,
    targetYear: 2050,
    announcedYear: 2019,
    keyMetrics: [
      { label: 'Legislative Packages Adopted', value: '13/13', trend: 'improving', href: '/legislative-packages' },
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
      "Fit for 55 is the EU's comprehensive package of 13 legislative proposals published in July 2021, designed to reduce net greenhouse gas emissions by at least 55% by 2030 vs 1990 levels. All 13 core proposals have been adopted into law (2022–2023) and are now in their implementation phase across energy, transport, industry, land use, and carbon markets.",
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
          'Land use, land-use change and forestry carbon sink target of 310 Mt CO₂eq by 2030, with binding national targets.',
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
      "The EU's 2030 climate targets represent the most critical near-term milestone on the road to net zero. Legally binding under the European Climate Law (June 2021), the EU must achieve at least a 55% net reduction in GHG emissions by 2030 vs 1990 levels. Sub-targets cover renewable energy (42.5%), energy efficiency (−11.7%), and sectoral transition milestones.",
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
      "The EU's commitment to climate neutrality by 2050 is enshrined in the European Climate Law, making the EU the first major economy to set this target in binding legislation. Achieving net zero requires transforming every sector — power, transport, buildings, industry, agriculture, and land use — while maintaining economic competitiveness. The Commission proposed a 2040 interim target of −90% in February 2024.",
    status: 'at-risk',
    overallProgress: 34,
    targetYear: 2050,
    announcedYear: 2019,
    keyMetrics: [
      { label: 'GHG Reduction vs 1990 (2022)', value: '−34%', subValue: 'Target: net zero by 2050', trend: 'improving' },
      { label: '2040 Target (proposed)', value: '−90%', subValue: 'vs 1990; under legislation', trend: 'stable' },
      { label: 'Renewable Share in Electricity (2023)', value: '~44%', subValue: 'Target: ~100% by 2035–40', trend: 'improving' },
      { label: 'Annual Reduction Rate Needed', value: '~4–5%/yr', subValue: 'Current rate: ~1–2%/yr', trend: 'worsening' },
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

export const legislativePackages: LegislativePackage[] = [
  {
    id: 'eu-ets-reform',
    name: 'EU Emissions Trading System Reform',
    shortName: 'EU ETS',
    legalAct: 'Directive (EU) 2023/959',
    sector: 'Cross-sector',
    adoptedDate: 'Apr 2023',
    description:
      'Revised the EU ETS (the world\'s largest carbon market) by steepening the annual cap reduction to 4.3% from 2024, expanding coverage to the maritime sector, accelerating the phase-out of free allowances for industry, and creating ETS 2 (a separate system for buildings and road transport launching in 2027).',
    keyProvisions: [
      'Annual cap reduction rate raised from 2.2% to 4.3% (2024–2027), then 4.4%',
      'Maritime sector included from 2024 (full coverage by 2026)',
      'Free allowances for industry phased out 2026–2034',
      'New ETS 2 for buildings and road transport fuel (Chapter IVa)',
      'Innovation Fund strengthened with additional ETS auction revenues',
    ],
    references: [
      { title: 'Directive (EU) 2023/959 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023L0959' },
      { title: 'Council adopts key Fit for 55 legislation (Apr 2023)', url: 'https://www.consilium.europa.eu/en/press/press-releases/2023/04/25/fit-for-55-council-adopts-key-pieces-of-legislation-delivering-on-2030-climate-targets/' },
      { title: 'EC press release on ETS reform', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_23_2061' },
    ],
  },
  {
    id: 'ets2',
    name: 'ETS 2 — Buildings & Road Transport',
    shortName: 'ETS 2',
    legalAct: 'Directive (EU) 2023/959 (Chapter IVa)',
    sector: 'Buildings / Transport',
    adoptedDate: 'Apr 2023',
    description:
      'A new, separate emissions trading system covering fuel combustion in buildings and road transport, created within the same legislative act as the ETS reform. It will launch in 2027 with a transitional price cap of €45/t to cushion the initial impact on households and businesses.',
    keyProvisions: [
      'Covers fuel distributors supplying buildings and road transport from 2027',
      'Price stability mechanism: €45/t cap in early years',
      'Revenues flow to the Social Climate Fund to protect vulnerable groups',
      'Commission may delay launch if energy prices are exceptionally high',
    ],
    references: [
      { title: 'Directive (EU) 2023/959 (ETS 2, Chapter IVa) — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023L0959' },
      { title: 'Council press release, Apr 2023', url: 'https://www.consilium.europa.eu/en/press/press-releases/2023/04/25/fit-for-55-council-adopts-key-pieces-of-legislation-delivering-on-2030-climate-targets/' },
    ],
  },
  {
    id: 'cbam',
    name: 'Carbon Border Adjustment Mechanism',
    shortName: 'CBAM',
    legalAct: 'Regulation (EU) 2023/956',
    sector: 'Industry / Trade',
    adoptedDate: 'May 2023',
    description:
      'Puts a carbon price on imports of carbon-intensive goods to prevent "carbon leakage" — the risk that EU industry relocates to countries with weaker climate rules. Importers must purchase CBAM certificates matching the carbon price that would have been paid under the EU ETS.',
    keyProvisions: [
      'Covers cement, iron & steel, aluminium, fertilisers, electricity, and hydrogen',
      'Transitional reporting phase: Oct 2023–Dec 2025 (data only, no payment)',
      'Full CBAM certificates required from Jan 2026, as ETS free allowances phase out',
      'Phased in to align with phase-out of ETS free allowances (2026–2034)',
    ],
    references: [
      { title: 'Regulation (EU) 2023/956 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0956' },
      { title: 'Council press release, Apr 2023', url: 'https://www.consilium.europa.eu/en/press/press-releases/2023/04/25/fit-for-55-council-adopts-key-pieces-of-legislation-delivering-on-2030-climate-targets/' },
      { title: 'EC CBAM overview', url: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en' },
    ],
  },
  {
    id: 'effort-sharing',
    name: 'Effort Sharing Regulation',
    shortName: 'ESR',
    legalAct: 'Regulation (EU) 2023/857',
    sector: 'Non-ETS Sectors',
    adoptedDate: 'May 2023',
    description:
      'Sets binding national GHG reduction targets for sectors outside the EU ETS — road transport, buildings, agriculture, small industry, and waste — which together account for roughly 60% of EU emissions. Targets range from −10% to −50% by 2030 depending on each member state\'s economic capacity.',
    keyProvisions: [
      'Overall ESR target: −40% across covered sectors by 2030 vs 2005',
      'Country-specific targets: −10% (Bulgaria) to −50% (Denmark, Finland, Sweden, Luxembourg)',
      'Flexibility mechanisms allow limited borrowing from future years or trading between states',
      'LULUCF flexibility: limited use of land-sector removals to meet ESR targets',
    ],
    references: [
      { title: 'Regulation (EU) 2023/857 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0857' },
      { title: 'Council press release, Apr 2023', url: 'https://www.consilium.europa.eu/en/press/press-releases/2023/04/25/fit-for-55-council-adopts-key-pieces-of-legislation-delivering-on-2030-climate-targets/' },
    ],
  },
  {
    id: 'lulucf',
    name: 'LULUCF Regulation',
    shortName: 'LULUCF',
    legalAct: 'Regulation (EU) 2023/839',
    sector: 'Land Use',
    adoptedDate: 'May 2023',
    description:
      'Sets a binding EU-wide carbon sink target of 310 Mt CO₂eq by 2030 for the land use, land-use change, and forestry sector. Member states receive individual binding targets and must ensure their forests, soils, and wetlands absorb more carbon than they emit. From 2026, agriculture is included in the accounting.',
    keyProvisions: [
      'EU sink target of 310 Mt CO₂eq by 2030 (up from ~265 Mt)',
      'Individual binding national targets for each member state',
      'Agriculture included in accounts from 2026 (new AFOLU pillar)',
      'New compliance cycle: 2021–2025 and 2026–2030',
    ],
    references: [
      { title: 'Regulation (EU) 2023/839 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0839' },
      { title: 'Council press release, Apr 2023', url: 'https://www.consilium.europa.eu/en/press/press-releases/2023/04/25/fit-for-55-council-adopts-key-pieces-of-legislation-delivering-on-2030-climate-targets/' },
    ],
  },
  {
    id: 'co2-cars',
    name: 'CO₂ Standards for Cars & Vans',
    shortName: 'Cars CO₂',
    legalAct: 'Regulation (EU) 2023/851',
    sector: 'Transport',
    adoptedDate: 'Apr 2023',
    description:
      'Requires all new passenger cars and light commercial vehicles sold in the EU to be zero-emission from 2035, effectively ending sales of new petrol and diesel vehicles. Interim targets tighten from 2025 and 2030. A review clause (the "2026 review") allows for e-fuels as a pathway if evidence supports it.',
    keyProvisions: [
      '100% zero-emission new cars and vans from 2035',
      '2030 interim targets: −55% CO₂ for cars, −50% for vans vs 2021',
      '2025 interim target: −15% CO₂ for both cars and vans',
      '2026 review clause: Commission to assess progress and e-fuel pathway',
      'Incentive mechanism for zero- and low-emission vehicles 2025–2029',
    ],
    references: [
      { title: 'Regulation (EU) 2023/851 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0851' },
      { title: 'Council press release, Apr 2023', url: 'https://www.consilium.europa.eu/en/press/press-releases/2023/04/25/fit-for-55-council-adopts-key-pieces-of-legislation-delivering-on-2030-climate-targets/' },
    ],
  },
  {
    id: 'afir',
    name: 'Alternative Fuels Infrastructure Regulation',
    shortName: 'AFIR',
    legalAct: 'Regulation (EU) 2023/1804',
    sector: 'Transport',
    adoptedDate: 'Sep 2023',
    description:
      'Makes deployment of EV charging and hydrogen refuelling infrastructure mandatory along the Trans-European Transport Network (TEN-T), removing the infrastructure gap as a barrier to vehicle electrification. Replaces the previous directive-based approach with a directly applicable regulation.',
    keyProvisions: [
      'EV fast charging (≥150 kW) every 60 km on TEN-T core network by end-2025',
      'Full TEN-T comprehensive coverage by end-2027',
      'Hydrogen refuelling stations in major urban nodes and ports by 2030',
      'Price transparency: per-kWh pricing mandatory, ad-hoc payment without subscription',
      'Shore-side electricity supply at major maritime and inland ports by 2030',
    ],
    references: [
      { title: 'Regulation (EU) 2023/1804 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1804' },
      { title: 'Commission welcomes completion of Fit for 55 (Oct 2023)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_23_4754' },
    ],
  },
  {
    id: 'red3',
    name: 'Renewable Energy Directive III',
    shortName: 'RED III',
    legalAct: 'Directive (EU) 2023/2413',
    sector: 'Energy',
    adoptedDate: 'Oct 2023',
    description:
      'Raises the EU\'s binding renewable energy target from 32% to 42.5% of gross final energy consumption by 2030, with a non-binding aspiration of 45%. Introduces sector-specific sub-targets for industry, transport, buildings, and district heating. The final adoption of RED III in October 2023 marked the completion of the core Fit for 55 package.',
    keyProvisions: [
      'Binding EU target: 42.5% renewables in gross final energy by 2030 (indicative 45%)',
      'Industry sub-target: 42% renewable hydrogen/fuels by 2030',
      'Transport: 29% renewable energy or 14.5% GHG intensity reduction by 2030',
      'Buildings: 49% renewable energy target (indicative)',
      'Accelerated permitting: max 12-month permit process for renewable projects',
    ],
    references: [
      { title: 'Directive (EU) 2023/2413 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023L2413' },
      { title: 'Council adopts RED III (Oct 2023)', url: 'https://www.consilium.europa.eu/en/press/press-releases/2023/10/09/renewable-energy-council-adopts-new-rules/' },
      { title: 'Commission welcomes completion of Fit for 55 (Oct 2023)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_23_4754' },
    ],
  },
  {
    id: 'eed',
    name: 'Energy Efficiency Directive',
    shortName: 'EED',
    legalAct: 'Directive (EU) 2023/1791',
    sector: 'Energy',
    adoptedDate: 'Sep 2023',
    description:
      'Recast of the Energy Efficiency Directive establishing a binding EU-level target of 11.7% reduction in final energy consumption by 2030 vs the 2020 reference scenario. Strengthens the "energy efficiency first" principle and places binding renovation obligations on public sector buildings.',
    keyProvisions: [
      'Binding final energy savings target: −11.7% by 2030 vs 2020 reference scenario',
      'Public sector annual renovation obligation: 3% of heated/cooled floor area',
      '"Energy efficiency first" principle now legally binding across policy decisions',
      'Annual energy savings obligation of 1.9% of final energy consumption 2024–2030',
      'Stricter metering and billing requirements for heat and cooling',
    ],
    references: [
      { title: 'Directive (EU) 2023/1791 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023L1791' },
      { title: 'Commission welcomes completion of Fit for 55 (Oct 2023)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_23_4754' },
    ],
  },
  {
    id: 'refueleu-aviation',
    name: 'ReFuelEU Aviation',
    shortName: 'ReFuelEU Aviation',
    legalAct: 'Regulation (EU) 2023/2405',
    sector: 'Aviation',
    adoptedDate: 'Oct 2023',
    description:
      'Mandates increasing blends of sustainable aviation fuels (SAF) at EU airports, creating a guaranteed demand signal for SAF producers. Fuel suppliers must ensure a minimum SAF share in aviation fuel uplifted at EU airports, stepping up every five years to 2050.',
    keyProvisions: [
      '6% SAF by 2030, 34% by 2040, 70% by 2050',
      'Sub-mandate for synthetic fuels: 1.2% by 2030, rising to 35% by 2050',
      'Applies to fuel suppliers at all EU airports',
      'Airlines must not fuel up outside the EU to avoid the mandate ("tankering")',
      'Linked to the ETS revision for aviation emissions cost',
    ],
    references: [
      { title: 'Regulation (EU) 2023/2405 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R2405' },
      { title: 'Commission welcomes completion of Fit for 55 (Oct 2023)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_23_4754' },
    ],
  },
  {
    id: 'fueleu-maritime',
    name: 'FuelEU Maritime',
    shortName: 'FuelEU Maritime',
    legalAct: 'Regulation (EU) 2023/1805',
    sector: 'Maritime',
    adoptedDate: 'Sep 2023',
    description:
      'Sets declining GHG intensity limits on the energy used by ships calling at EU ports, driving the uptake of alternative marine fuels. Covers all ships of 5,000 GT or more on voyages to, from, or between EU ports, with escalating reduction requirements through 2050.',
    keyProvisions: [
      'GHG intensity limits: −2% by 2025, −6% by 2030, −14.5% by 2035, −80% by 2050',
      'Covers vessels ≥5,000 GT on EU port calls (100%) and international legs (50%)',
      'Shore-side electricity mandatory for container and passenger ships at TEN-T ports by 2030',
      'Compliance pooling mechanism between ships under the same company',
    ],
    references: [
      { title: 'Regulation (EU) 2023/1805 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1805' },
      { title: 'Commission welcomes completion of Fit for 55 (Oct 2023)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_23_4754' },
    ],
  },
  {
    id: 'social-climate-fund',
    name: 'Social Climate Fund',
    shortName: 'SCF',
    legalAct: 'Regulation (EU) 2023/955',
    sector: 'Social Policy',
    adoptedDate: 'May 2023',
    description:
      'Establishes a fund of up to €86.7 billion (2026–2032) financed from ETS 2 revenues to help vulnerable households, micro-enterprises, and transport users cope with the cost impacts of ETS 2. Member states submit Social Climate Plans outlining how they will use the money.',
    keyProvisions: [
      '€86.7 billion available 2026–2032 (co-financed by EU and member states)',
      'Funded by 25% of ETS 2 revenues',
      'Member states must submit Social Climate Plans by June 2025',
      'Measures: direct income support, energy efficiency investments, clean mobility',
      'At least 50% of expenditure must target vulnerable households in energy poverty',
    ],
    references: [
      { title: 'Regulation (EU) 2023/955 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0955' },
      { title: 'Council press release, Apr 2023', url: 'https://www.consilium.europa.eu/en/press/press-releases/2023/04/25/fit-for-55-council-adopts-key-pieces-of-legislation-delivering-on-2030-climate-targets/' },
    ],
  },
  {
    id: 'ten-e',
    name: 'TEN-E Regulation (Energy Infrastructure)',
    shortName: 'TEN-E',
    legalAct: 'Regulation (EU) 2022/869',
    sector: 'Energy Infrastructure',
    adoptedDate: 'Mar 2022',
    description:
      'Revised the Trans-European Energy Infrastructure framework, removing support for new fossil fuel infrastructure projects (gas/oil pipelines) and redirecting EU funding toward offshore renewables, green hydrogen networks, carbon capture and storage, and smart electricity grids.',
    keyProvisions: [
      'No new fossil fuel projects eligible for EU financial support under TEN-E',
      'New priority corridors for offshore wind (North Sea, Baltic, Mediterranean)',
      'Hydrogen and electrolysis infrastructure added as Projects of Common Interest (PCI)',
      'Smart electricity grid and CO₂ transport networks added as PCI categories',
      'Accelerated 3.5-year permit process for cross-border energy projects',
    ],
    references: [
      { title: 'Regulation (EU) 2022/869 — EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R0869' },
      { title: 'Council adopts TEN-E Regulation (Mar 2022)', url: 'https://www.consilium.europa.eu/en/press/press-releases/2022/03/28/trans-european-energy-networks-council-adopts-regulation/' },
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
