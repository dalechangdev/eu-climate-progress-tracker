<script lang="ts">
  import type { Initiative } from '$lib/data';
  import StatusBadge from './StatusBadge.svelte';
  import ProgressBar from './ProgressBar.svelte';

  let { initiative }: { initiative: Initiative } = $props();

  const firstMetric = $derived(initiative.keyMetrics[0]);
</script>

<a href="/{initiative.slug}" class="group block h-full">
  <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full transition-all duration-200 hover:border-slate-600 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-black/30">
    <div class="flex items-start justify-between gap-3 mb-4">
      <h3 class="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
        {initiative.title}
      </h3>
      <StatusBadge status={initiative.status} size="sm" />
    </div>

    <p class="text-sm text-slate-400 mb-5 leading-relaxed">{initiative.tagline}</p>

    <div class="mb-5">
      <ProgressBar value={initiative.overallProgress} size="md" />
    </div>

    <div class="flex items-center justify-between text-xs text-slate-500 mb-4 border-t border-slate-800 pt-4">
      <span>Target year: <span class="text-slate-300 font-semibold">{initiative.targetYear}</span></span>
      <span class="text-slate-400 font-medium group-hover:text-blue-400 transition-colors">View details →</span>
    </div>

    {#if firstMetric}
      <div class="bg-slate-800/50 rounded-lg p-3">
        <p class="text-xs text-slate-500 mb-0.5">{firstMetric.label}</p>
        <p class="text-sm font-semibold text-white">{firstMetric.value}</p>
        {#if firstMetric.subValue}
          <p class="text-xs text-slate-500 mt-0.5">{firstMetric.subValue}</p>
        {/if}
      </div>
    {/if}
  </div>
</a>
