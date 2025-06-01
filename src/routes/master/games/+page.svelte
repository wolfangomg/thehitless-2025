<script lang="ts">
	import { goto } from '$app/navigation';
	import ListGamesSkeleton from '$lib/components/ListGames-skeleton.svelte';
	import type { Game } from '$lib/models/game';
	import Paginator from '$lib/ui/Paginator.svelte';
	import SimplePaginator from '$lib/ui/SimplePaginator.svelte';
	import Spinner from '$lib/ui/Spinner.svelte';
	import ListGames from '../../../lib/components/ListGames.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte'

	let { data }: { data: PageData } = $props();

	let list: Game[] = $state([])
	let loading = $state(true)
	let currentPage = $state(0);
  	let totalPages = $state(0);
	let itemsPerPage = 20;
	
	onMount(async() => {
		getData()
	})

	async function getData() {
		loading = true;
		try {
			// Replace with your actual API endpoint
			const response =  await fetch(`/master/api/games`, {
									method: 'POST',
									body: JSON.stringify({
										index: currentPage
									})
								});
			const bucket = await response.json();
		
			list = bucket.data;
			totalPages = Math.ceil(bucket.total / itemsPerPage);
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			// loading = false;
		}
  	}

	const onPageChange = (e: number) => {
		currentPage = e;
		getData()
	}

</script>


<div class="skeleton card w-96 bg-base-100 shadow-xl">
	<div class="skeleton h-32 w-full"></div>
	<div class="card-body">
	  <div class="skeleton h-4 w-full"></div>
	  <div class="skeleton h-4 w-full"></div>
	  <div class="skeleton h-4 w-1/2"></div>
	</div>
  </div>
  <div class="skeleton h-32 w-32"></div>
  <hr/>
{#if loading}
	<ListGamesSkeleton />
	{:else}
	{#if list}
	<div class="space-y-2">
		<ListGames {list} onClick={(game: Game) => goto(`/master/games/${game._id}`)}/>
		<SimplePaginator {currentPage} {totalPages} {onPageChange} />
	</div>
		{:else}
		<p> No data received</p>
	{/if}
{/if}
