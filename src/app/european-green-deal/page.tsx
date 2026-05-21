import { getInitiative } from '@/lib/data'
import { notFound } from 'next/navigation'
import StatusBadge from '@/components/StatusBadge'
import ProgressBar from '@/components/ProgressBar'
import MetricCard from '@/components/MetricCard'
import MilestoneList from '@/components/MilestoneList'
import Link from 'next/link'

export const metadata = {
  title: 'European Green Deal | EU Climate Tracker',
}

export default function EuropeanGreenDealPage() {
  const initiative = getInitiative('european-green-deal')
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
            Announced {initiative.announcedYear} · Target {initiative.targetYear}
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

      {/* What it covers */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Policy Areas</h3>
          <ul className="space-y-2">
            {[
              'Climate & Energy',
              'Sustainable Industry',
              'Building Renovation Wave',
              'Farm to Fork Strategy',
              'Biodiversity Strategy',
              'Sustainable Finance',
              'Just Transition Mechanism',
              'EU Climate Diplomacy',
            ].map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-eu-yellow shrink-0" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal Framework</h3>
          <ul className="space-y-3">
            {[
              { title: 'European Climate Law', detail: 'Net zero 2050 & −55% by 2030 legally binding', year: '2021' },
              { title: 'European Climate Law', detail: 'Yearly GHG budgets to be set by Commission', year: '2021' },
              { title: 'Just Transition Fund', detail: '€17.5 billion for fossil-fuel dependent regions', year: '2021' },
              { title: 'REPowerEU Plan', detail: 'Accelerated clean energy to reduce Russian gas dependence', year: '2022' },
            ].map((item) => (
              <li key={item.title + item.year} className="border-l-2 border-eu-blue-light pl-3">
                <p className="text-sm font-semibold text-white">{item.title} <span className="text-xs text-slate-500">({item.year})</span></p>
                <p className="text-xs text-slate-400">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Milestones */}
      <h2 className="text-lg font-bold text-white mb-4">Timeline & Milestones</h2>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-10">
        <MilestoneList milestones={initiative.milestones} />
      </div>

      {/* Related */}
      <h2 className="text-lg font-bold text-white mb-4">Sub-initiatives</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { href: '/fit-for-55', label: 'Fit for 55', desc: 'Legislative package for −55% by 2030' },
          { href: '/2030-targets', label: '2030 Climate Targets', desc: 'Binding sectoral emissions goals' },
          { href: '/net-zero-2050', label: 'Net Zero 2050', desc: 'Climate neutrality by mid-century' },
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
