<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="card lg:card-side bg-base-100 shadow-lg">
	<figure>
		<img src={data.thumbnail} alt={data.name} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{data.name}</h2>
		<p>{data.description}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">No Hit Runs</button>
		</div>
	</div>
</div>
