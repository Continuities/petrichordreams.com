<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getCart, addToCart } from '$lib/cart/index.svelte';
	import { goto } from '$app/navigation';
	import { localisedResolve } from '$lib/utils';

	interface Props {
		piece: Piece;
	}
	let { piece }: Props = $props();
	let show = $state(false);
	let cart = $derived(getCart());
	let isPieceInCart = $derived(cart.some((idInCart) => idInCart === piece.id));
</script>

<Button
	data-umami-event="Add to cart"
	data-umami-event-id={piece.id}
	data-umami-event-name={piece.name}
	data-umami-event-price={piece.price.CAD}
	disabled={isPieceInCart}
	onclick={() => {
		addToCart(piece);
		show = true;
	}}>{m.addToCart()}</Button
>

<Drawer.Root bind:open={show}>
	<Drawer.Content class="max-w-md ml-auto">
		<Drawer.Header>
			<Drawer.Title>{m.itemAddedToCart()}</Drawer.Title>
			<Drawer.Description class="flex gap-4 mt-6">
				<img src={piece.images[0]} alt={piece.name} class="object-cover w-32" />
				<p>{piece.name}</p>
			</Drawer.Description>
		</Drawer.Header>
		<Drawer.Footer class="flex flex-col gap-4">
			<Button variant="outline" onclick={() => goto(localisedResolve('/cart'))}
				>{m.viewCart()}</Button
			>
			<Button onclick={() => goto(localisedResolve('/checkout'))}>{m.checkout()}</Button>
			<Button variant="ghost" onclick={() => goto(localisedResolve('/'))}
				>{m.continueShopping()}</Button
			>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
