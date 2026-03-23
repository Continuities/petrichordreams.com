<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { m } from '$lib/paraglide/messages';
	import banner from '$lib/assets/banner.png';
	import banner2 from '$lib/assets/banner-2.png';
	import Button from '$lib/components/ui/button/button.svelte';
	import Product from '$lib/components/ui/product';

	let { data } = $props();
</script>

<section class="relative h-85 md:h-140">
	<img src={banner} alt={m.banner()} class="absolute h-full w-full object-cover z-0" />
	<div
		class="relative z-1 max-w-5xl mx-auto flex flex-col items-center justify-center md:justify-end h-full gap-8 md:py-24 text-center"
	>
		<h1 class="text-4xl">{m.title()}</h1>
		{m.description()}
	</div>
</section>

<section class="mx-auto max-w-5xl my-16 p-4">
	<h2 class="text-2xl mb-8">{m.available()}</h2>
	<ul class="grid grid-cols-2 md:grid-cols-4 items-center gap-2 md:gap-4">
		{#each data.products as product (product.id)}
			<li>
				<Product {product} />
			</li>
		{/each}
	</ul>
</section>

<section class="relative h-85 md:h-140 flex flex-col items-center justify-center">
	<img src={banner2} alt={m.banner()} class="absolute h-full w-full object-cover z-0" />
	<Card.Root class="relative z-1 w-sm mx-auto text-center">
		<Card.Header>
			<Card.Title class="text-2xl">{m.seePreviousWorks()}</Card.Title>
		</Card.Header>
		<Card.Content>
			<Button size="lg" class="text-xl">{m.gallery()}</Button>
		</Card.Content>
	</Card.Root>
</section>
