<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import ListGames from '$lib/components/ListGames.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<main class="grid grid-cols-2 gap-4 p-4">
	<div>
		{@render children()}
	</div>
	<div>
		<ListGames list={data.results} />
	</div>
</main>
