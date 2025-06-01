<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import MasterLayout from '$lib/components/MasterLayout/MasterLayout.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<MasterLayout>
	{@render children()}
</MasterLayout>
