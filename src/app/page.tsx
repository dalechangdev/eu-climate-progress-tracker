import { initiatives } from '@/lib/data'
import InitiativeCard from '@/components/InitiativeCard'
import StatusBadge from '@/components/StatusBadge'

export default function Home() {
  const onTrack = initiatives.filter((i) => i.status === 'on-track').length
  const atRisk = initiatives.filter((i) => i.status === 'at-risk').length

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-eu-blue-dark to-gray-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-eu-yellow text-2xl font-bold tracking-widest">★★★★★</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            EU Climate Initiative
            <br />
            <span className="text-eu-yellow">Tracker</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Monitor the progress of the European Union&apos;s most ambitious climate programmes — from the
            overarching Green Deal to the legislative Fit for 55 package and the 2030 &amp; 2050 binding
            targets.
          </p>

          {/* Summary stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            <StatBox label="Initiatives Tracked" value={String(initiatives.length)} />
            <StatBox label="On Track" value={String(onTrack)} highlight="emerald" />
            <StatBox label="At Risk" value={String(atRisk)} highlight="amber" />
            <StatBox label="Legal Basis" value="ECL 2021" />
          </div>
        </div>
      </section>

      {/* Initiatives grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white">Initiatives</h2>
          <div className="flex items-center gap-3">
            <StatusBadge status="on-track" size="sm" />
            <StatusBadge status="at-risk" size="sm" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {initiatives.map((initiative) => (
            <InitiativeCard key={initiative.id} initiative={initiative} />
          ))}
        </div>
      </section>

      {/* Context banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 grid sm:grid-cols-3 gap-6">
          <ContextStat
            value="−34%"
            label="Current GHG reduction vs 1990"
            note="Latest: 2022 data (EEA)"
          />
          <ContextStat
            value="24%"
            label="Renewable energy share (2023)"
            note="Target: 42.5% by 2030"
          />
          <ContextStat
            value="4 yrs"
            label="Until the 2030 target deadline"
            note="European Climate Law binding"
          />
        </div>
      </section>
    </div>
  )
}

function StatBox({
  label,
  value,
  highlight,
}: {
  label: string
  value: string
  highlight?: 'emerald' | 'amber'
}) {
  const valueColor =
    highlight === 'emerald'
      ? 'text-emerald-400'
      : highlight === 'amber'
        ? 'text-amber-400'
        : 'text-white'

  return (
    <div className="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
      <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
      <p className="text-xs text-blue-200 mt-0.5 leading-snug">{label}</p>
    </div>
  )
}

function ContextStat({ value, label, note }: { value: string; label: string; note: string }) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
      <p className="text-sm text-slate-300 font-medium">{label}</p>
      <p className="text-xs text-slate-500 mt-1">{note}</p>
    </div>
  )
}
