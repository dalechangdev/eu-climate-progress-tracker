<script lang="ts">
  let {
    value,
    showLabel = true,
    size = 'md',
  }: {
    value: number;
    showLabel?: boolean;
    size?: 'sm' | 'md' | 'lg';
  } = $props();

  const clamped = $derived(Math.max(0, Math.min(100, value)));

  const barColor = $derived(
    clamped >= 80
      ? 'bg-emerald-500'
      : clamped >= 55
        ? 'bg-sky-500'
        : clamped >= 30
          ? 'bg-amber-500'
          : 'bg-red-500'
  );

  const trackHeight = $derived(
    size === 'sm' ? 'h-1.5' : size === 'lg' ? 'h-3.5' : 'h-2.5'
  );
</script>

<div class="w-full">
  {#if showLabel}
    <div class="flex justify-between items-center mb-1.5">
      <span class="text-xs text-slate-400 font-medium">Overall progress</span>
      <span class="text-sm font-bold text-white">{clamped}%</span>
    </div>
  {/if}
  <div class="w-full bg-slate-700 rounded-full {trackHeight} overflow-hidden">
    <div
      class="{trackHeight} rounded-full transition-all duration-500 {barColor}"
      style="width: {clamped}%"
    ></div>
  </div>
</div>
