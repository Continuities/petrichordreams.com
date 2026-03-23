<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Stripe } from 'stripe';

	interface Props {
		product: Stripe.Product;
	}

	let { product }: Props = $props();
	let { image } = $derived(product.metadata);
</script>

<Card.Root class="relative group pt-0 gap-2 aspect-1/2">
	<div class="relative w-full rounded-t-xl overflow-hidden grow-1">
		<img src={product.images[0]} alt={product.name} class="object-cover w-full h-full" />
		{#if image}
			<img
				src={image}
				alt={product.name}
				class="object-cover w-full h-full object-cover absolute top-0 transition-all duration-400 opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-105"
			/>
		{/if}
	</div>
	<Card.Header class="mt-2">
		<Card.Title>{product.name}</Card.Title>
	</Card.Header>
	<Card.Content>
		<p>{product.description}</p>
		<p>
			Price: ${(((product.default_price as Stripe.Price)?.unit_amount ?? 0) / 100).toFixed(2)}
		</p>
	</Card.Content>
</Card.Root>
