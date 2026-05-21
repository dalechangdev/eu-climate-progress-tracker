import { getInitiative } from '@/lib/data'
import { notFound } from 'next/navigation'
import StatusBadge from '@/components/StatusBadge'
import ProgressBar from '@/components/ProgressBar'
import MetricCard from '@/components/MetricCard'
import MilestoneList from '@/components/MilestoneList'
import Link from 'next/link'

export const metadata = {
  title: 'Fit for 55 | EU Climate Tracker',
}

const policyStatusStyles: Record<string, string> = {
  'in-force': 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  adopted: 'bg-sky-500/15 text-sky-400 border border-sky-500/30',
  proposed: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
  'under-negotiation': 'bg-purple-500/15 text-purple-400 border border-purple-500/30',
}

const policyStatusLabel: Record<string, string> = {
  'in-force': 'In Force',
  adopted: 'Adopted',
  proposed: 'Proposed',
  'under-negotiation': 'Under Negotiation',
}

export default function FitFor55Page() {
  const initiative = getInitiative('fit-for-55')
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
            Launched {initiative.announcedYear} · Target {initiative.targetYear}
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

      {/* Policy tracker */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">Legislative Tracker</h2>
        <span className="text-xs text-slate-500">
          All {initiative.policies?.length} proposals adopted
        </span>
      </div>
      <div className="space-y-3 mb-10">
        {initiative.policies?.map((policy, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors">
            <div className="flex flex-wrap items-start gap-3 mb-2">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white leading-snug">{policy.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">Sector: {policy.sector}{policy.adoptedDate ? ` · Adopted: ${policy.adoptedDate}` : ''}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${policyStatusStyles[policy.status]}`}>
                {policyStatusLabel[policy.status]}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{policy.description}</p>
          </div>
        ))}
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
          { href: '/european-green-deal', label: 'European Green Deal', desc: 'Overarching policy framework' },
          { href: '/2030-targets', label: '2030 Climate Targets', desc: 'What Fit for 55 is designed to achieve' },
          { href: '/net-zero-2050', label: 'Net Zero 2050', desc: 'Long-term destination for the EU' },
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
