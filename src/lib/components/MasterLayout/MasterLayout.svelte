<script lang="ts">
	import type { Snippet } from 'svelte';
	import Menu from './Menu.svelte';
	import Breadcrum from './Breadcrum.svelte';
	import Navbar from './Navbar.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="flex h-screen">
	<div class="bg-base-200/80 w-74 flex-shrink-0 sticky top-0 h-screen shadow-lg flex flex-col">
		<div class="p-4 flex-shrink-0">
			<a href="/master">
				<img src="/hitless-logo.png" width="300" height="100" alt="logo" />
			</a>
		</div>
		<div class="flex-1 min-h-0">
			<Menu />
		</div>
	</div>
	<div class="w-full flex-1 flex flex-col overflow-hidden">
		<Navbar />
		<div class="flex-1 overflow-auto">
			<div class="p-4 ">
				{@render children()}
			</div>
		</div>
	</div>
</div>