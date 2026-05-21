<script lang="ts">
  import { page } from '$app/stores';

  const navLinks = [
    { href: '/', label: 'Overview' },
    { href: '/european-green-deal', label: 'Green Deal' },
    { href: '/fit-for-55', label: 'Fit for 55' },
    { href: '/2030-targets', label: '2030 Targets' },
    { href: '/net-zero-2050', label: 'Net Zero 2050' },
  ];
</script>

<nav class="sticky top-0 z-50 bg-eu-blue border-b-2 border-eu-yellow shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-14">
      <a href="/" class="flex items-center gap-2 shrink-0">
        <span class="text-eu-yellow text-lg font-bold tracking-wider">★★★</span>
        <span class="text-white font-semibold text-sm sm:text-base tracking-wide">EU Climate Tracker</span>
      </a>
      <div class="flex items-center gap-1 overflow-x-auto">
        {#each navLinks as link}
          <a
            href={link.href}
            class="px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap transition-colors {$page.url.pathname === link.href
              ? 'bg-white/20 text-white'
              : 'text-blue-100 hover:text-white hover:bg-white/10'}"
          >
            {link.label}
          </a>
        {/each}
      </div>
    </div>
  </div>
</nav>
