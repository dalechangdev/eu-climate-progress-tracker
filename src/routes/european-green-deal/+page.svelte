<script lang="ts">
  import { getInitiative } from '$lib/data';
  import StatusBadge from '$lib/components/StatusBadge.svelte';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import MetricCard from '$lib/components/MetricCard.svelte';
  import MilestoneList from '$lib/components/MilestoneList.svelte';

  const initiative = getInitiative('european-green-deal')!;

  const policyAreas = [
    'Climate & Energy',
    'Sustainable Industry',
    'Building Renovation Wave',
    'Farm to Fork Strategy',
    'Biodiversity Strategy',
    'Sustainable Finance',
    'Just Transition Mechanism',
    'EU Climate Diplomacy',
  ];

  const legalFramework = [
    { title: 'European Climate Law', detail: 'Net zero 2050 & −55% by 2030 legally binding', year: '2021' },
    { title: 'European Climate Law', detail: 'Yearly GHG budgets to be set by Commission', year: '2021' },
    { title: 'Just Transition Fund', detail: '€17.5 billion for fossil-fuel dependent regions', year: '2021' },
    { title: 'REPowerEU Plan', detail: 'Accelerated clean energy to reduce Russian gas dependence', year: '2022' },
  ];
</script>

<svelte:head>
  <title>European Green Deal | EU Climate Tracker</title>
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
        Announced {initiative.announcedYear} · Target {initiative.targetYear}
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

  <div class="grid sm:grid-cols-2 gap-6 mb-10">
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Policy Areas</h3>
      <ul class="space-y-2">
        {#each policyAreas as area}
          <li class="flex items-center gap-2 text-sm text-slate-300">
            <span class="w-1.5 h-1.5 rounded-full bg-eu-yellow shrink-0"></span>
            {area}
          </li>
        {/each}
      </ul>
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal Framework</h3>
      <ul class="space-y-3">
        {#each legalFramework as item}
          <li class="border-l-2 border-eu-blue-light pl-3">
            <p class="text-sm font-semibold text-white">
              {item.title} <span class="text-xs text-slate-500">({item.year})</span>
            </p>
            <p class="text-xs text-slate-400">{item.detail}</p>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <h2 class="text-lg font-bold text-white mb-4">Timeline & Milestones</h2>
  <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-10">
    <MilestoneList milestones={initiative.milestones} />
  </div>

  <h2 class="text-lg font-bold text-white mb-4">Sub-initiatives</h2>
  <div class="grid sm:grid-cols-3 gap-4">
    {#each [
      { href: '/fit-for-55', label: 'Fit for 55', desc: 'Legislative package for −55% by 2030' },
      { href: '/2030-targets', label: '2030 Climate Targets', desc: 'Binding sectoral emissions goals' },
      { href: '/net-zero-2050', label: 'Net Zero 2050', desc: 'Climate neutrality by mid-century' },
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
