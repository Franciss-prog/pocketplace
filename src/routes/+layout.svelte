<script lang="ts">
	import '../app.css';
	import logo from '$lib/assets/logo.jpg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

<main class="h-screen">
	<section class="h-full w-full p-6">
		{@render children()}
	</section>
</main>
