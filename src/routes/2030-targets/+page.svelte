<script lang="ts">
  import { getInitiative } from '$lib/data';
  import StatusBadge from '$lib/components/StatusBadge.svelte';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import MetricCard from '$lib/components/MetricCard.svelte';
  import MilestoneList from '$lib/components/MilestoneList.svelte';

  const initiative = getInitiative('2030-targets')!;

  const sectors = [
    { name: 'Power Generation', current: '−66%', target2030: '~−78%', note: 'Rapid renewable scale-up; ETS driving coal phase-out', progress: 85, status: 'on-track' },
    { name: 'Industry (ETS)', current: '−41%', target2030: '−62%', note: 'ETS reform tightens cap; CBAM prevents carbon leakage', progress: 66, status: 'on-track' },
    { name: 'Road Transport', current: '+5%', target2030: '−13% (ESR)', note: 'EV uptake accelerating but from low base; ETS 2 from 2027', progress: 28, status: 'at-risk' },
    { name: 'Buildings', current: '−33%', target2030: '−43% (ESR avg)', note: 'Renovation Wave progressing slowly; gas boiler bans phasing in', progress: 55, status: 'at-risk' },
    { name: 'Agriculture', current: '−8%', target2030: '~−13%', note: 'Slowest-moving sector; methane and N₂O emissions challenging', progress: 42, status: 'at-risk' },
    { name: 'Land Use (LULUCF)', current: 'Declining sink', target2030: '310 Mt CO₂ sink', note: 'Forests under stress from drought and pests; requires urgent action', progress: 30, status: 'delayed' },
  ] as const;

  const statusColors = {
    'on-track': 'text-emerald-400',
    'at-risk': 'text-amber-400',
    delayed: 'text-red-400',
    achieved: 'text-sky-400',
  };

  const statusLabels = {
    'on-track': 'On Track',
    'at-risk': 'At Risk',
    delayed: 'Delayed',
    achieved: 'Achieved',
  };

  const headlineTargets = [
    { value: '−55%', label: 'Net GHG emissions vs 1990', legal: 'European Climate Law', color: 'border-blue-500/40' },
    { value: '42.5%', label: 'Renewable energy share', legal: 'RED III (2023)', color: 'border-emerald-500/40' },
    { value: '−11.7%', label: 'Primary energy savings', legal: 'EED (2023)', color: 'border-sky-500/40' },
  ];
</script>

<svelte:head>
  <title>2030 Climate Targets | EU Climate Tracker</title>
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
      <span class="text-xs text-slate-500 bg-slate-800 rounded-full px-3 py-1">Target year: {initiative.targetYear}</span>
      <span class="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1">4 years remaining</span>
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

  <h2 class="text-lg font-bold text-white mb-4">Headline Targets by 2030</h2>
  <div class="grid sm:grid-cols-3 gap-4 mb-10">
    {#each headlineTargets as item}
      <div class="bg-slate-900 border {item.color} rounded-xl p-5">
        <p class="text-3xl font-extrabold text-white mb-1">{item.value}</p>
        <p class="text-sm text-slate-300 font-medium mb-2">{item.label}</p>
        <p class="text-xs text-slate-500">Legal basis: {item.legal}</p>
      </div>
    {/each}
  </div>

  <h2 class="text-lg font-bold text-white mb-4">Sectoral Progress</h2>
  <div class="space-y-3 mb-10">
    {#each sectors as sector}
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3 class="text-sm font-semibold text-white">{sector.name}</h3>
          <span class="text-xs font-semibold {statusColors[sector.status]}">{statusLabels[sector.status]}</span>
        </div>
        <div class="flex items-center gap-4 text-xs text-slate-500 mb-3">
          <span>Current: <span class="text-slate-300">{sector.current}</span></span>
          <span>Target: <span class="text-slate-300">{sector.target2030}</span></span>
        </div>
        <ProgressBar value={sector.progress} showLabel={false} size="sm" />
        <p class="text-xs text-slate-500 mt-2">{sector.note}</p>
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
      { href: '/european-green-deal', label: 'European Green Deal', desc: 'Policy framework that sets this target' },
      { href: '/fit-for-55', label: 'Fit for 55', desc: 'Legislative package designed to meet 2030 targets' },
      { href: '/net-zero-2050', label: 'Net Zero 2050', desc: 'Long-term destination' },
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
