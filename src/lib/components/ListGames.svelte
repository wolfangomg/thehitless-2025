<script lang="ts">
	import type { Game } from '$lib/models/game';
	import Play from '@lucide/svelte/icons/play';

	interface Props {
		onClick?: (value: Game) => void;
		list: Game[];
	}
  
	let { 
		onClick = () => {}, 
		list
	}: Props = $props();
</script>


<div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
	{#each list as game (game._id)}
		<div class="card bg-base-200/70 shadow-md">
			<div class="card-body flex-row items-center gap-4 p-4">
				<img class="rounded-box size-18" src={game.thumbnail} alt={game.name} />
				<div class="flex-1 min-w-0">
					<h3 class="font-semibold truncate">{game.name}</h3>
					<div class="flex items-center gap-2">

					<p class="text-xs font-semibold truncate py-2">
						{#each game.challenge_type as challenge}
							<span class="badge badge-info/90 badge-md mr-1"> {challenge}</span>
						{/each}
					</p>
					</div>
				</div>
				<button class="btn btn-square btn-primary flex-shrink-0" onclick={() => onClick(game)}> 
					<Play />	
				</button>
			</div>
		</div>
	{/each}
</div>