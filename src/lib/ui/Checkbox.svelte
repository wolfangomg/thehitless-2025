<script lang="ts">
	interface InputLabelComponent {
		name: string;
		label?: string;
		checked: boolean;
		labelPosition?: 'left' | 'right';
	}

	let {
		label,
		name,
		labelPosition = 'left',
		checked = $bindable()
	}: InputLabelComponent = $props();
</script>

{#snippet checkbox()}
	<input type="checkbox" {name} class="checkbox checkbox-sm checkbox-primary" bind:checked />
{/snippet}

{#if label}
	<label class="label text-base-content flex items-center">
		{#if labelPosition === 'left'}
			{label}
		{/if}
		{@render checkbox()}
		{#if labelPosition === 'right'}
			{label}
		{/if}
	</label>
{:else}
	{@render checkbox()}
{/if}
