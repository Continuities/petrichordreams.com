<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		const media = window.matchMedia('(prefers-color-scheme: dark)');

		const handler = (e: MediaQueryListEvent) => {
			document.documentElement.classList.toggle('dark', e.matches);
		};

		media.addEventListener('change', handler);
		return () => media.removeEventListener('change', handler);
	});

	let { children } = $props();
</script>

<svelte:head>
	<title>Petrichor Dreams</title>
	<link rel="icon" href={favicon} />
	<script>
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		}
	</script>
</svelte:head>

<main class="bg-background min-h-screen text-foreground mx-auto max-w-md p-4">
	{@render children()}
</main>
