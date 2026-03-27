<script lang="ts">
	import { resolve } from '$app/paths';
	import { removeFromCart } from '$lib/cart/index.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { m } from '$lib/paraglide/messages';
	import { Delete02Icon } from '@hugeicons/core-free-icons';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { goto, invalidateAll } from '$app/navigation';

	let { data } = $props();
	let pieces = $derived(data.pieces);
	let total = $derived(pieces.reduce((total, item) => total + item.price.CAD, 0));
</script>

<section class="mx-auto max-w-5xl my-8 px-4 md:px-0">
	{#if pieces.length === 0}
		<div class="flex flex-col items-center gap-4 mt-32">
			<p class="text-3xl">{m.emptyCart()}</p>
			<a href={resolve('/')} class="underline">{m.continueShopping()}</a>
		</div>
	{:else}
		<div class="flex justify-between items-end mb-12">
			<h1 class="text-3xl font-bold">{m.yourCart()}</h1>
			<a href={resolve('/')} class="underline">{m.continueShopping()}</a>
		</div>
		<ul class="space-y-4">
			{#each pieces as item (item.id)}
				<li class="flex justify-between">
					<div class="flex gap-4 md:gap-10">
						<img src={item.images[0]} alt={item.name} class="w-32 object-cover" />
						<p>{item.name}</p>
					</div>
					<div class="flex flex-col items-end md:flex-row md:items-start md:gap-4">
						<p>${item.price.CAD.toFixed(2)} CAD</p>
						<Button
							size="icon"
							variant="ghost"
							class="mr-[-10px] md:mt-[-6px] md:mr-0"
							onclick={async () => {
								removeFromCart(item.id);
								await invalidateAll();
							}}
						>
							<HugeiconsIcon icon={Delete02Icon} class="w-5 h-5" />
						</Button>
					</div>
				</li>
			{/each}
		</ul>
		<div class="flex flex-col mt-16 items-center md:justify-self-end md:items-end gap-4">
			<div class="flex gap-4">
				<p>
					{m.estimatedTotal()}
				</p>
				<p>
					${total.toFixed(2)} CAD
				</p>
			</div>
			<p class="text-sm">{m.taxesAndShipping()}</p>
			<Button size="lg" class="w-full" onclick={() => goto(resolve('/checkout'))}
				>{m.checkout()}</Button
			>
		</div>
	{/if}
</section>
