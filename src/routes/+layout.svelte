<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages';
	import '../app.css';
	import Header from '$lib/components/ui/header';

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
	<title>{m.title()}</title>
	<link rel="icon" href={favicon} />
	<script async src="//www.instagram.com/embed.js"></script>
	<script>
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		}
	</script>
</svelte:head>

<Header />
<main class="bg-background min-h-screen text-foreground">
	{@render children()}
</main>
<footer>
	<div class="max-w-5xl mx-auto py-8 px-4 text-sm">
		{m.footer()}
	</div>
</footer>
