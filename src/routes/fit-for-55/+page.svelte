<script lang="ts">
  import { getInitiative } from '$lib/data';
  import StatusBadge from '$lib/components/StatusBadge.svelte';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import MetricCard from '$lib/components/MetricCard.svelte';
  import MilestoneList from '$lib/components/MilestoneList.svelte';

  const initiative = getInitiative('fit-for-55')!;

  const policyStatusStyles: Record<string, string> = {
    'in-force': 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    adopted: 'bg-sky-500/15 text-sky-400 border border-sky-500/30',
    proposed: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
    'under-negotiation': 'bg-purple-500/15 text-purple-400 border border-purple-500/30',
  };

  const policyStatusLabel: Record<string, string> = {
    'in-force': 'In Force',
    adopted: 'Adopted',
    proposed: 'Proposed',
    'under-negotiation': 'Under Negotiation',
  };
</script>

<svelte:head>
  <title>Fit for 55 | EU Climate Tracker</title>
</svelte:head>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <nav class="text-xs text-slate-500 mb-6">
    <a href="/" class="hover:text-slate-300 transition-colors">Overview</a>
    <span class="mx-2">›</span>
    <span class="text-slate-300">{initiative.title}</span>
  </nav>

  <div class="mb-10">
    <div class="flex flex-wrap items-center gap-3 mb-3">
      <StatusBadge status={initiative.status} />
      <span class="text-xs text-slate-500 bg-slate-800 rounded-full px-3 py-1">
        Launched {initiative.announcedYear} · Target {initiative.targetYear}
      </span>
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">{initiative.title}</h1>
    <p class="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-6">{initiative.tagline}</p>
    <div class="max-w-md">
      <ProgressBar value={initiative.overallProgress} size="lg" />
    </div>
  </div>

  <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">
    <p class="text-slate-300 leading-relaxed">{initiative.description}</p>
  </div>

  <h2 class="text-lg font-bold text-white mb-4">Key Metrics</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
    {#each initiative.keyMetrics as metric}
      <MetricCard {metric} />
    {/each}
  </div>

  <div class="flex items-center justify-between mb-4">
    <h2 class="text-lg font-bold text-white">Legislative Tracker</h2>
    <span class="text-xs text-slate-500">All {initiative.policies?.length} proposals adopted</span>
  </div>
  <div class="space-y-3 mb-10">
    {#each initiative.policies ?? [] as policy}
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors">
        <div class="flex flex-wrap items-start gap-3 mb-2">
          <div class="flex-1">
            <h3 class="text-sm font-semibold text-white leading-snug">{policy.name}</h3>
            <p class="text-xs text-slate-500 mt-0.5">
              Sector: {policy.sector}{policy.adoptedDate ? ` · Adopted: ${policy.adoptedDate}` : ''}
            </p>
          </div>
          <span class="text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap {policyStatusStyles[policy.status]}">
            {policyStatusLabel[policy.status]}
          </span>
        </div>
        <p class="text-sm text-slate-400 leading-relaxed">{policy.description}</p>
      </div>
    {/each}
  </div>

  <h2 class="text-lg font-bold text-white mb-4">Timeline</h2>
  <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-10">
    <MilestoneList milestones={initiative.milestones} />
  </div>

  <h2 class="text-lg font-bold text-white mb-4">Related Initiatives</h2>
  <div class="grid sm:grid-cols-3 gap-4">
    {#each [
      { href: '/european-green-deal', label: 'European Green Deal', desc: 'Overarching policy framework' },
      { href: '/2030-targets', label: '2030 Climate Targets', desc: 'What Fit for 55 is designed to achieve' },
      { href: '/net-zero-2050', label: 'Net Zero 2050', desc: 'Long-term destination for the EU' },
    ] as item}
      <a
        href={item.href}
        class="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-600 hover:bg-slate-800 transition-all group"
      >
        <p class="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors mb-1">{item.label}</p>
        <p class="text-xs text-slate-400">{item.desc}</p>
      </a>
    {/each}
  </div>
</div>
