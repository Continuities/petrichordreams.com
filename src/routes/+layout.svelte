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
	let floatingHeader = $state(false);
	let scrollingUp = $state(false);
	let lastScrollY = $state(0);
	let headerElement: HTMLElement | undefined = $state();
	let headerHeight = $derived(headerElement?.clientHeight ?? 0);
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

<svelte:window
	on:scroll={() => {
		scrollingUp = window.scrollY < lastScrollY;
		const scrolledPast = headerElement ? window.scrollY > headerElement.offsetHeight : false;
		floatingHeader = scrolledPast || scrollingUp;
		lastScrollY = window.scrollY;
	}}
/>

<Header bind:headerElement floating={floatingHeader} shownFloating={scrollingUp} />
<main
	style={floatingHeader ? `padding-top: ${headerHeight}px;` : ''}
	class="bg-background min-h-screen text-foreground"
>
	{@render children()}
</main>
<footer>
	<div class="max-w-5xl mx-auto py-8 px-4 text-sm">
		{m.footer()}
	</div>
</footer>
