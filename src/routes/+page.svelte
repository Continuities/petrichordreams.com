<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Stripe from 'stripe';

	let { data } = $props();
</script>

<h1 class="my-8 text-4xl">Products</h1>

<ul class="flex flex-col gap-4">
	{#each data.products as product (product.id)}
		<li>
			<Card.Root>
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
						Price: ${(((product.default_price as Stripe.Price)?.unit_amount ?? 0) / 100).toFixed(2)}
					</p>
				</Card.Content>
			</Card.Root>
		</li>
	{/each}
</ul>
