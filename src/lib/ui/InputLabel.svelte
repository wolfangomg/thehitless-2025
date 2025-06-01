<script lang="ts">
	interface InputLabelComponent {
		name: string;
		label?: string;
		type?: 'text' | 'password' | 'hidden';
		placeholder?: string;
		// hint?: string;
		value: string;
	}

	let {
		label,
		name,
		type = 'text',
		placeholder,
		value = $bindable()
	}: InputLabelComponent = $props();
</script>

{#if label}
	<label for={name} class="label text-base-content text-base">{label}</label>
{/if}

<input id={name} {type} class="input focus:outline-0" {placeholder} {name} bind:value />

<!-- {#if hint}
    <p class="label text-error">Error {hint}</p>
    <p class="label text-success">Success {hint}</p>
    <p class="label">{hint}</p>
{/if} -->
