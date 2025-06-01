<script lang="ts">
	import Play from '@lucide/svelte/icons/play';

	const list = Array.from({length: 10}, (_, i) => i * 2);
</script>


<div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
	{#each list as item (item)}
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="skeleton h-32 w-full"></div>
		<div class="card-body">
		  <div class="skeleton h-4 w-full"></div>
		  <div class="skeleton h-4 w-full"></div>
		  <div class="skeleton h-4 w-1/2"></div>
		</div>
	  </div>
	{/each}
</div>