import { getInitiative } from '@/lib/data'
import { notFound } from 'next/navigation'
import StatusBadge from '@/components/StatusBadge'
import ProgressBar from '@/components/ProgressBar'
import MetricCard from '@/components/MetricCard'
import MilestoneList from '@/components/MilestoneList'
import Link from 'next/link'

export const metadata = {
  title: 'Net Zero 2050 | EU Climate Tracker',
}

const transformations = [
  {
    sector: 'Energy System',
    goal: 'Near-100% renewables in electricity by 2040; phase-out of unabated coal and oil',
    progress: 44,
    keyAction: 'Solar & wind capacity doubled under REPowerEU',
  },
  {
    sector: 'Buildings',
    goal: 'Zero-emission building stock by 2050; renovation wave targeting 35 million units',
    progress: 25,
    keyAction: 'Energy Performance of Buildings Directive recast (2024)',
  },
  {
    sector: 'Transport',
    goal: '100% ZEV for new cars from 2035; shipping and aviation near-zero fuels by 2050',
    progress: 30,
    keyAction: 'CO₂ standards for cars adopted; AFIR charging network rollout',
  },
  {
    sector: 'Industry',
    goal: 'Deep decarbonisation via electrification, green hydrogen, and CCS',
    progress: 38,
    keyAction: 'Green Deal Industrial Plan; Net-Zero Industry Act (2024)',
  },
  {
    sector: 'Agriculture & Food',
    goal: 'Methane & N₂O reduction; Farm to Fork targets; sustainable land management',
    progress: 18,
    keyAction: 'Farm to Fork Strategy; revised Common Agricultural Policy',
  },
  {
    sector: 'Carbon Removal',
    goal: '310 Mt CO₂ land sink by 2030; scaling engineered removal (DACCS, BECCS) to 2050',
    progress: 20,
    keyAction: 'Carbon Removal Certification Framework adopted (2024)',
  },
]

export default function NetZero2050Page() {
  const initiative = getInitiative('net-zero-2050')
  if (!initiative) notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-300 transition-colors">Overview</Link>
        <span className="mx-2">›</span>
        <span className="text-slate-300">{initiative.title}</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <StatusBadge status={initiative.status} />
          <span className="text-xs text-slate-500 bg-slate-800 rounded-full px-3 py-1">
            European Climate Law · 2050
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
          {initiative.title}
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-6">
          {initiative.tagline}
        </p>
        <div className="max-w-md">
          <ProgressBar value={initiative.overallProgress} size="lg" />
        </div>
      </div>

      {/* Description */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">
        <p className="text-slate-300 leading-relaxed">{initiative.description}</p>
      </div>

      {/* Key metrics */}
      <h2 className="text-lg font-bold text-white mb-4">Key Metrics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {initiative.keyMetrics.map((metric, i) => (
          <MetricCard key={i} metric={metric} />
        ))}
      </div>

      {/* Interim targets */}
      <h2 className="text-lg font-bold text-white mb-4">Target Pathway</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {[
          { year: '2030', value: '−55%', label: 'Net GHG reduction', legal: 'European Climate Law (binding)', color: 'border-amber-500/40 bg-amber-500/5' },
          { year: '2040', value: '−90%', label: 'Net GHG reduction (proposed)', legal: 'Commission Communication, Feb 2024', color: 'border-sky-500/40 bg-sky-500/5' },
          { year: '2050', value: 'Net Zero', label: 'Climate neutrality', legal: 'European Climate Law (binding)', color: 'border-emerald-500/40 bg-emerald-500/5' },
        ].map((item) => (
          <div key={item.year} className={`border rounded-xl p-5 ${item.color}`}>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">{item.year} Target</p>
            <p className="text-3xl font-extrabold text-white mb-1">{item.value}</p>
            <p className="text-sm text-slate-300 mb-3">{item.label}</p>
            <p className="text-xs text-slate-500">{item.legal}</p>
          </div>
        ))}
      </div>

      {/* Sectoral transformations */}
      <h2 className="text-lg font-bold text-white mb-4">Required Sectoral Transformations</h2>
      <div className="space-y-3 mb-10">
        {transformations.map((t) => (
          <div key={t.sector} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-sm font-semibold text-white">{t.sector}</h3>
              <span className="text-xs text-slate-500">{t.progress}% progress</span>
            </div>
            <ProgressBar value={t.progress} showLabel={false} size="sm" />
            <p className="text-xs text-slate-400 mt-2 mb-1">{t.goal}</p>
            <p className="text-xs text-slate-600 italic">Key action: {t.keyAction}</p>
          </div>
        ))}
      </div>

      {/* Key challenge callout */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 mb-10">
        <h3 className="text-sm font-bold text-amber-400 mb-2">⚠ Trajectory Gap</h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          At the current rate of emissions reduction (~1–2% per year), the EU is not on track to reach net zero
          by 2050. The IPCC and European Scientific Advisory Board on Climate Change conclude that a 4–5% annual
          reduction is required from 2025 onward. Accelerated action in buildings, agriculture, and transport is
          critical in this decade.
        </p>
      </div>

      {/* Milestones */}
      <h2 className="text-lg font-bold text-white mb-4">Timeline</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-10">
        <MilestoneList milestones={initiative.milestones} />
      </div>

      {/* Related */}
      <h2 className="text-lg font-bold text-white mb-4">Related Initiatives</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { href: '/european-green-deal', label: 'European Green Deal', desc: 'Policy framework that established this goal' },
          { href: '/fit-for-55', label: 'Fit for 55', desc: 'Near-term legislative engine' },
          { href: '/2030-targets', label: '2030 Climate Targets', desc: 'Critical next stepping stone' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-600 hover:bg-slate-800 transition-all group"
          >
            <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors mb-1">{item.label}</p>
            <p className="text-xs text-slate-400">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
