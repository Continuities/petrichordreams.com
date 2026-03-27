<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { m } from '$lib/paraglide/messages';
	import { addToCart } from '$lib/cart/index.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	interface Props {
		piece: Piece;
	}
	let { piece }: Props = $props();
	let show = $state(false);
</script>

<Button
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
			<Button variant="outline" onclick={() => goto(resolve('/cart'))}>{m.viewCart()}</Button>
			<Button onclick={() => console.log('TODO')}>{m.checkout()}</Button>
			<Button variant="ghost" onclick={() => (show = false)}>{m.continueShopping()}</Button>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
