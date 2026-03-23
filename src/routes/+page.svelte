<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { m } from '$lib/paraglide/messages';
	import banner from '$lib/assets/banner.png';
	import banner2 from '$lib/assets/banner-2.png';
	import Stripe from 'stripe';
	import Button from '$lib/components/ui/button/button.svelte';

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
	<ul class="flex flex-col items-center gap-4 flex-wrap md:flex-row">
		{#each data.products as product (product.id)}
			<li class="w-full md:w-auto">
				<Card.Root class="md:max-w-sm min-w-xs">
					<img
						src={product.images[0]}
						alt={product.name}
						class="w-full h-48 object-cover rounded-t-xl"
					/>
					<Card.Header>
						<Card.Title>{product.name}</Card.Title>
					</Card.Header>
					<Card.Content>
						<p>{product.description}</p>
						<p>
							Price: ${(((product.default_price as Stripe.Price)?.unit_amount ?? 0) / 100).toFixed(
								2
							)}
						</p>
					</Card.Content>
				</Card.Root>
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
