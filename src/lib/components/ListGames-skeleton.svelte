<script lang="ts">
	import Skeleton from '$lib/ui/Skeleton.svelte';
import Play from '@lucide/svelte/icons/play';

	const list = Array.from({length: 20}, (_, i) => i * 2);
</script>


<div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
	{#each list as item (item)}
		<div class="card bg-primary/30">
			<div class="card-body flex-row items-center gap-4 p-4">
				<Skeleton class="w-12 h-12 rounded-md"/>
				<div class="flex-1 min-w-0 space-y-2">
					<!-- <div class="w-full h-4 rounded-md skeleton"></div> -->
					<Skeleton class="w-full h-4 rounded-md"/>
					<div class="flex items-center gap-2">
						<Skeleton class="w-1/3 h-4 rounded-sm"/>
						<Skeleton class="w-1/3 h-4 rounded-sm"/>
						<Skeleton class="w-1/3 h-4 rounded-sm"/>
					</div>
				</div>
				<Skeleton class="w-8 h-8 rounded-full"/>

			</div>
		</div>
	{/each}
</div>