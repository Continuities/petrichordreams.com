<script lang="ts">
	import { resolve } from '$app/paths';
	import * as Card from '$lib/components/ui/card/index.js';
	import { m } from '$lib/paraglide/messages';
	import banner from '$lib/assets/banner.png';
	import banner2 from '$lib/assets/banner-2.png';
	import Button from '$lib/components/ui/button/button.svelte';
	import PieceCard from '$lib/components/ui/piece-card/index.js';
	import customImage from '$lib/assets/custom.jpg';

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

<section class="mx-auto max-w-5xl my-16 px-4 md:px-0">
	<h2 class="text-2xl mb-8">{m.available()}</h2>
	<ul class="grid grid-cols-2 md:grid-cols-4 items-center gap-2 md:gap-4">
		{#each data.pieces as piece (piece.id)}
			<li>
				<a href={resolve(`/piece/${piece.id}`)} class="block">
					<PieceCard {piece} />
				</a>
			</li>
		{/each}
		<li>
			<a href={resolve('/custom')} class="block">
				<PieceCard
					piece={{
						name: m.custom(),
						images: [customImage, customImage],
						description: ''
					}}
				/>
			</a>
		</li>
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
