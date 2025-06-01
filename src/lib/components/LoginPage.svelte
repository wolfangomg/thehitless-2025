<!-- This file should be temporary and should move to a page when project is starting -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import Checkbox from '$lib/ui/Checkbox.svelte';
	import InputLabel from '$lib/ui/InputLabel.svelte';
	// import type { PageData } from './$types';

	// let { data }: { data: PageData } = $props();
	let username = $state('');
	let password = $state('');
	let checkbox = $state(false);
</script>

<svelte:head>
	<title>TheHitless - Login</title>
</svelte:head>

<div
	class="relative bg-cover bg-center bg-no-repeat"
	style="background-image: url('bg-login.png');"
>
	<div class="absolute inset-0 z-0 bg-gradient-to-b from-indigo-400 to-indigo-300 opacity-45"></div>
	<div class="mx-0 min-h-screen justify-center sm:flex sm:flex-row">
		<div class="z-10 flex flex-col self-center p-10 sm:max-w-5xl xl:max-w-2xl">
			<div class="hidden flex-col self-start text-white lg:flex">
				<h1 class="mb-3 text-5xl font-bold">TheHitless Community</h1>
				<p class="pr-3">Managed by yourself</p>
				<p>{username} - {password}</p>
			</div>
		</div>
		<div class="z-10 flex justify-center self-center">
			<form
				method="POST"
				action="/?/signIn"
				use:enhance={() => {
					return async ({ result }) => {
						if (result.type === 'success') {
							goto('/master');
						}
					};
				}}
			>
				<div class="card card-border bg-base-100 w-96">
					<div class="card-body">
						<div class="mb-4">
							<h3 class="text-2xl font-semibold">Sign In</h3>
							<p class="text-primary/80">Please sign in to your account.</p>
						</div>
						<div class="space-y-2">
							<InputLabel
								label="Name"
								name="username"
								type="text"
								placeholder="Enter your username"
								bind:value={username}
							/>
							<InputLabel
								label="Password"
								name="password"
								type="password"
								placeholder="Enter the pasword"
								bind:value={password}
							/>
							<div class="flex items-center justify-between py-2">
								<Checkbox
									labelPosition="right"
									label="Remember me"
									name="rememberme"
									bind:checked={checkbox}
								/>
							</div>
							<button type="submit" class="btn btn-block btn-primary"> Sign in </button>
						</div>
						<div class="pt-5 text-center text-xs text-gray-400">
							<span>
								Copyright © 2022-2025
								<a
									href="https://thehitless.com"
									rel=""
									target="_blank"
									title="TheHitless"
									class="text-primary/60 hover:text-primary">TH</a
								>
							</span>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
