import type { Metric } from '@/lib/data'

const trendIcons: Record<string, { icon: string; color: string }> = {
  improving: { icon: '↑', color: 'text-emerald-400' },
  worsening: { icon: '↓', color: 'text-red-400' },
  stable: { icon: '→', color: 'text-slate-400' },
}

export default function MetricCard({ metric }: { metric: Metric }) {
  const trend = metric.trend ? trendIcons[metric.trend] : null

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <p className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wider">{metric.label}</p>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-white">{metric.value}</span>
        {trend && (
          <span className={`text-lg font-bold mb-0.5 ${trend.color}`}>{trend.icon}</span>
        )}
      </div>
      {metric.subValue && (
        <p className="text-xs text-slate-500 mt-1">{metric.subValue}</p>
      )}
    </div>
  )
}
