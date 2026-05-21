<script lang="ts">
  import { initiatives } from '$lib/data';
  import InitiativeCard from '$lib/components/InitiativeCard.svelte';
  import StatusBadge from '$lib/components/StatusBadge.svelte';

  const onTrack = initiatives.filter((i) => i.status === 'on-track').length;
  const atRisk = initiatives.filter((i) => i.status === 'at-risk').length;
</script>

<svelte:head>
  <title>EU Climate Tracker</title>
</svelte:head>

<div>
  <!-- Hero -->
  <section class="bg-gradient-to-b from-eu-blue-dark to-gray-950 border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-eu-yellow text-2xl font-bold tracking-widest">★★★★★</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
        EU Climate Initiative<br />
        <span class="text-eu-yellow">Tracker</span>
      </h1>
      <p class="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
        Monitor the progress of the European Union's most ambitious climate programmes — from the
        overarching Green Deal to the legislative Fit for 55 package and the 2030 &amp; 2050 binding
        targets.
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
        <div class="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
          <p class="text-2xl font-bold text-white">{initiatives.length}</p>
          <p class="text-xs text-blue-200 mt-0.5 leading-snug">Initiatives Tracked</p>
        </div>
        <div class="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
          <p class="text-2xl font-bold text-emerald-400">{onTrack}</p>
          <p class="text-xs text-blue-200 mt-0.5 leading-snug">On Track</p>
        </div>
        <div class="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
          <p class="text-2xl font-bold text-amber-400">{atRisk}</p>
          <p class="text-xs text-blue-200 mt-0.5 leading-snug">At Risk</p>
        </div>
        <div class="bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
          <p class="text-2xl font-bold text-white">ECL 2021</p>
          <p class="text-xs text-blue-200 mt-0.5 leading-snug">Legal Basis</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Initiatives grid -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-xl font-bold text-white">Initiatives</h2>
      <div class="flex items-center gap-3">
        <StatusBadge status="on-track" size="sm" />
        <StatusBadge status="at-risk" size="sm" />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {#each initiatives as initiative}
        <InitiativeCard {initiative} />
      {/each}
    </div>
  </section>

  <!-- Context banner -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 grid sm:grid-cols-3 gap-6">
      <div class="text-center sm:text-left">
        <p class="text-3xl font-extrabold text-white mb-1">−34%</p>
        <p class="text-sm text-slate-300 font-medium">Current GHG reduction vs 1990</p>
        <p class="text-xs text-slate-500 mt-1">Latest: 2022 data (EEA)</p>
      </div>
      <div class="text-center sm:text-left">
        <p class="text-3xl font-extrabold text-white mb-1">24%</p>
        <p class="text-sm text-slate-300 font-medium">Renewable energy share (2023)</p>
        <p class="text-xs text-slate-500 mt-1">Target: 42.5% by 2030</p>
      </div>
      <div class="text-center sm:text-left">
        <p class="text-3xl font-extrabold text-white mb-1">4 yrs</p>
        <p class="text-sm text-slate-300 font-medium">Until the 2030 target deadline</p>
        <p class="text-xs text-slate-500 mt-1">European Climate Law binding</p>
      </div>
    </div>
  </section>
</div>
