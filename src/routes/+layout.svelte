<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <meta name="description" content="Track progress of EU climate initiatives: Fit for 55, 2030 targets, Net Zero 2050, and the European Green Deal." />
</svelte:head>

<Navbar />
<main class="flex-1">
  {@render children()}
</main>
<footer class="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
  <p>
    Data sourced from European Commission publications and official EU legislative records.
    <span class="text-slate-600">Last reviewed: May 2025</span>
  </p>
</footer>
