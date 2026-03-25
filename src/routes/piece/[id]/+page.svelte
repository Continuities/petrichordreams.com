<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Button from '$lib/components/ui/button/button.svelte';

	let { data } = $props();
	let { piece } = $derived(data);
</script>

<div class="max-w-5xl mx-auto my-16 p-4 flex">
	<!-- images column -->
	<section class="w-2/3 flex flex-col gap-4">
		<img src={piece.images[0]} alt={piece.name} class="object-cover w-full mb-4" />
		{#if piece.images.length > 1}
			<div class="grid grid-cols-2 gap-4">
				{#each piece.images.slice(1) as img (img)}
					<img src={img} alt={piece.name} class="object-cover" />
				{/each}
			</div>
		{/if}
	</section>

	<!-- content column -->
	<section class="w-1/3 pl-8">
		<div class="sticky top-8 flex flex-col gap-4">
			<h1 class="text-3xl mb-4">{piece.name}</h1>
			<p>${piece.price.CAD} CAD</p>
			<p>{piece.description}</p>
			<Button>{m.addToCart()}</Button>
		</div>
	</section>
</div>
