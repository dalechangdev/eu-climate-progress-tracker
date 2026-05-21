import Link from 'next/link'
import type { Initiative } from '@/lib/data'
import StatusBadge from './StatusBadge'
import ProgressBar from './ProgressBar'

export default function InitiativeCard({ initiative }: { initiative: Initiative }) {
  const { slug, title, tagline, status, overallProgress, targetYear, keyMetrics } = initiative
  const firstMetric = keyMetrics[0]

  return (
    <Link href={`/${slug}`} className="group block">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full transition-all duration-200 hover:border-slate-600 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-black/30">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
            {title}
          </h3>
          <StatusBadge status={status} size="sm" />
        </div>

        <p className="text-sm text-slate-400 mb-5 leading-relaxed">{tagline}</p>

        <div className="mb-5">
          <ProgressBar value={overallProgress} size="md" />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 border-t border-slate-800 pt-4">
          <span>Target year: <span className="text-slate-300 font-semibold">{targetYear}</span></span>
          <span className="flex items-center gap-1 text-slate-400 font-medium group-hover:text-blue-400 transition-colors">
            View details →
          </span>
        </div>

        {firstMetric && (
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-500 mb-0.5">{firstMetric.label}</p>
            <p className="text-sm font-semibold text-white">{firstMetric.value}</p>
            {firstMetric.subValue && (
              <p className="text-xs text-slate-500 mt-0.5">{firstMetric.subValue}</p>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
