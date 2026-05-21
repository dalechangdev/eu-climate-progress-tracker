<script lang="ts">
  import { legislativePackages } from '$lib/data';

  const sectorColors: Record<string, string> = {
    'Cross-sector': 'bg-violet-900/40 text-violet-300 border-violet-700/50',
    'Buildings / Transport': 'bg-orange-900/40 text-orange-300 border-orange-700/50',
    'Industry / Trade': 'bg-cyan-900/40 text-cyan-300 border-cyan-700/50',
    'Non-ETS Sectors': 'bg-slate-700/60 text-slate-300 border-slate-600',
    'Land Use': 'bg-green-900/40 text-green-300 border-green-700/50',
    'Transport': 'bg-blue-900/40 text-blue-300 border-blue-700/50',
    'Energy': 'bg-yellow-900/40 text-yellow-300 border-yellow-700/50',
    'Aviation': 'bg-sky-900/40 text-sky-300 border-sky-700/50',
    'Maritime': 'bg-teal-900/40 text-teal-300 border-teal-700/50',
    'Social Policy': 'bg-pink-900/40 text-pink-300 border-pink-700/50',
    'Energy Infrastructure': 'bg-indigo-900/40 text-indigo-300 border-indigo-700/50',
  };

  function sectorClass(sector: string): string {
    return sectorColors[sector] ?? 'bg-slate-700/60 text-slate-300 border-slate-600';
  }

  const packageSources = [
    { title: 'Completion of key Fit for 55 legislation — EC Press Release (Oct 2023)', url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_23_4754' },
    { title: "Council adopts key Fit for 55 legislation — Council Press Release (Apr 2023)", url: 'https://www.consilium.europa.eu/en/press/press-releases/2023/04/25/fit-for-55-council-adopts-key-pieces-of-legislation-delivering-on-2030-climate-targets/' },
    { title: 'Fit for 55 package — European Parliament Legislative Train', url: 'https://www.europarl.europa.eu/legislative-train/package-fit-for-55' },
    { title: 'COM(2021) 550 — Original Fit for 55 Communication', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021DC0550' },
  ];
</script>

<svelte:head>
  <title>Fit for 55 Legislative Packages | EU Climate Tracker</title>
</svelte:head>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <nav class="text-xs text-slate-500 mb-6">
    <a href="/" class="hover:text-slate-300 transition-colors">Overview</a>
    <span class="mx-2">›</span>
    <a href="/european-green-deal" class="hover:text-slate-300 transition-colors">European Green Deal</a>
    <span class="mx-2">›</span>
    <span class="text-slate-300">Legislative Packages</span>
  </nav>

  <div class="mb-10">
    <div class="flex flex-wrap items-center gap-3 mb-3">
      <span class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">
        13/13 Adopted
      </span>
      <span class="text-xs text-slate-500 bg-slate-800 rounded-full px-3 py-1">
        Proposed Jul 2021 · Final adoption Oct 2023
      </span>
    </div>
    <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
      Fit for 55 Legislative Packages
    </h1>
    <p class="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
      The 13 legislative acts that form the core of the EU's Fit for 55 package, proposed in July 2021 and
      fully adopted by October 2023. Together they implement the EU's binding −55% GHG reduction target for 2030.
    </p>
  </div>

  <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-10">
    <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Package Sources</p>
    <ul class="space-y-1.5">
      {#each packageSources as ref, i}
        <li class="text-xs text-slate-500">
          <span class="mr-1">[{i + 1}]</span>
          <a href={ref.url} target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">{ref.title}</a>
        </li>
      {/each}
    </ul>
    <p class="text-xs text-slate-600 mt-4 pt-4 border-t border-slate-800">
      Note: The Energy Taxation Directive, also proposed as part of Fit for 55, has not yet been adopted as it requires Council unanimity.
      The 13 packages listed here are those formally completed per the Commission's October 2023 declaration.
    </p>
  </div>

  <div class="space-y-6">
    {#each legislativePackages as pkg, i}
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div class="flex items-start gap-3">
            <span class="text-slate-600 font-mono text-sm font-bold mt-0.5 shrink-0 w-6">{i + 1}</span>
            <div>
              <h2 class="text-base font-bold text-white leading-tight">{pkg.name}</h2>
              <p class="text-xs text-slate-500 mt-0.5 font-mono">{pkg.legalAct}</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-2 shrink-0">
            <span class="text-xs px-2.5 py-1 rounded-full border font-medium {sectorClass(pkg.sector)}">{pkg.sector}</span>
            <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-900/30 text-emerald-400 border border-emerald-700/40 font-medium">
              Adopted {pkg.adoptedDate}
            </span>
          </div>
        </div>

        <p class="text-sm text-slate-300 leading-relaxed mb-4 ml-9">{pkg.description}</p>

        <div class="ml-9 mb-4">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Provisions</p>
          <ul class="space-y-1">
            {#each pkg.keyProvisions as provision}
              <li class="flex items-start gap-2 text-xs text-slate-400">
                <span class="text-eu-yellow mt-0.5 shrink-0">·</span>
                {provision}
              </li>
            {/each}
          </ul>
        </div>

        <div class="ml-9 pt-4 border-t border-slate-800">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">References</p>
          <ul class="space-y-1">
            {#each pkg.references as ref, j}
              <li class="text-xs text-slate-500">
                <span class="mr-1">[{j + 1}]</span>
                <a href={ref.url} target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">{ref.title}</a>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-10 pt-8 border-t border-slate-800 flex gap-4">
    <a href="/european-green-deal" class="text-sm text-slate-400 hover:text-white transition-colors">← European Green Deal</a>
    <a href="/fit-for-55" class="text-sm text-slate-400 hover:text-white transition-colors">Fit for 55 →</a>
  </div>
</div>
