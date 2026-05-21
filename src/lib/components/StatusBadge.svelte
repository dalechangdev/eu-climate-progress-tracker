<script lang="ts">
  import type { Status } from '$lib/data';
  import { getStatusLabel } from '$lib/data';

  let { status, size = 'md' }: { status: Status; size?: 'sm' | 'md' } = $props();

  const styles: Record<Status, string> = {
    'on-track': 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    'at-risk': 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
    delayed: 'bg-red-500/15 text-red-400 border border-red-500/30',
    achieved: 'bg-sky-500/15 text-sky-400 border border-sky-500/30',
  };

  const dots: Record<Status, string> = {
    'on-track': 'bg-emerald-400',
    'at-risk': 'bg-amber-400',
    delayed: 'bg-red-400',
    achieved: 'bg-sky-400',
  };

  const padding = $derived(size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm');
</script>

<span class="inline-flex items-center gap-1.5 rounded-full font-medium {padding} {styles[status]}">
  <span class="w-1.5 h-1.5 rounded-full {dots[status]}"></span>
  {getStatusLabel(status)}
</span>
