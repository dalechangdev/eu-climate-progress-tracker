import type { Milestone } from '@/lib/data'

export default function MilestoneList({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-700" />
      <ul className="space-y-4">
        {milestones.map((m, i) => (
          <li key={i} className="flex gap-4 items-start">
            <div
              className={`mt-1 w-3.5 h-3.5 rounded-full border-2 shrink-0 z-10 ${
                m.achieved
                  ? 'bg-emerald-500 border-emerald-500'
                  : 'bg-slate-900 border-slate-600'
              }`}
            />
            <div>
              <span
                className={`text-xs font-semibold px-1.5 py-0.5 rounded mr-2 ${
                  m.achieved
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-slate-800 text-slate-500'
                }`}
              >
                {m.year}
              </span>
              <span className={`text-sm ${m.achieved ? 'text-slate-200' : 'text-slate-400'}`}>
                {m.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
