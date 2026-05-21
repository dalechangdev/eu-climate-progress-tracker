interface ProgressBarProps {
  value: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

function getBarColor(value: number): string {
  if (value >= 80) return 'bg-emerald-500'
  if (value >= 55) return 'bg-sky-500'
  if (value >= 30) return 'bg-amber-500'
  return 'bg-red-500'
}

export default function ProgressBar({
  value,
  showLabel = true,
  size = 'md',
  className = '',
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value))
  const barColor = getBarColor(clamped)
  const heights: Record<string, string> = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-3.5' }

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-slate-400 font-medium">Overall progress</span>
          <span className="text-sm font-bold text-white">{clamped}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-700 rounded-full ${heights[size]} overflow-hidden`}>
        <div
          className={`${heights[size]} rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
