<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	interface Props {
		piece: PartialBy<Piece, 'id' | 'price'>;
	}

	let { piece }: Props = $props();
</script>

<Card.Root class="relative group pt-0 gap-2 aspect-1/2">
	<div class="relative w-full rounded-t-xl overflow-hidden grow-1">
		<img src={piece.images[0]} alt={piece.name} class="object-cover w-full h-full" />
		{#if piece.images.length > 1}
			<img
				src={piece.images[1]}
				alt={piece.name}
				class="object-cover w-full h-full object-cover absolute top-0 transition-all duration-400 opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-105"
			/>
		{/if}
	</div>
	<Card.Header class="mt-2">
		<Card.Title>{piece.name}</Card.Title>
	</Card.Header>
	<Card.Content class="min-h-6">
		{#if piece.price}
			<p>
				${piece.price.CAD.toFixed(2)} CAD
			</p>
		{/if}
	</Card.Content>
</Card.Root>
