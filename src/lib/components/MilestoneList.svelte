<script lang="ts">
  import type { Milestone } from '$lib/data';

  let { milestones }: { milestones: Milestone[] } = $props();
</script>

<div class="relative">
  <div class="absolute left-[7px] top-2 bottom-2 w-px bg-slate-700"></div>
  <ul class="space-y-4">
    {#each milestones as milestone}
      <li class="flex gap-4 items-start">
        <div
          class="mt-1 w-3.5 h-3.5 rounded-full border-2 shrink-0 z-10 {milestone.achieved
            ? 'bg-emerald-500 border-emerald-500'
            : 'bg-slate-900 border-slate-600'}"
        ></div>
        <div>
          <span
            class="text-xs font-semibold px-1.5 py-0.5 rounded mr-2 {milestone.achieved
              ? 'bg-emerald-500/15 text-emerald-400'
              : 'bg-slate-800 text-slate-500'}"
          >
            {milestone.year}
          </span>
          <span class="text-sm {milestone.achieved ? 'text-slate-200' : 'text-slate-400'}">
            {milestone.title}
          </span>
        </div>
      </li>
    {/each}
  </ul>
</div>
