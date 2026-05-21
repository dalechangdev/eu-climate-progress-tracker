<script lang="ts">
  import type { Metric } from '$lib/data';

  let { metric }: { metric: Metric } = $props();

  const trendMap = {
    improving: { icon: '↑', color: 'text-emerald-400' },
    worsening: { icon: '↓', color: 'text-red-400' },
    stable: { icon: '→', color: 'text-slate-400' },
  };

  const trend = $derived(metric.trend ? trendMap[metric.trend] : null);
</script>

<div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
  <p class="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wider">{metric.label}</p>
  <div class="flex items-end gap-2">
    <span class="text-2xl font-bold text-white">{metric.value}</span>
    {#if trend}
      <span class="text-lg font-bold mb-0.5 {trend.color}">{trend.icon}</span>
    {/if}
  </div>
  {#if metric.subValue}
    <p class="text-xs text-slate-500 mt-1">{metric.subValue}</p>
  {/if}
</div>
