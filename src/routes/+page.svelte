<script lang="ts">
	import { resolve } from '$app/paths';
	import * as Card from '$lib/components/ui/card/index.js';
	import { m } from '$lib/paraglide/messages';
	import banner from '$lib/assets/banner.png';
	import banner2 from '$lib/assets/banner-2.png';
	import Button from '$lib/components/ui/button/button.svelte';
	import PieceCard from '$lib/components/ui/piece-card/index.js';
	import customImage from '$lib/assets/custom.jpg';
	import ImgPlaceholder from '$lib/components/ui/img-placeholder/img-placeholder.svelte';

	let { data } = $props();
</script>

<!-- Main banner -->
<section class="relative h-85 md:h-140">
	<img src={banner} alt={m.banner()} class="absolute h-full w-full object-cover z-0" />
	<div
		class="relative z-1 max-w-5xl mx-auto flex flex-col items-center justify-center md:justify-end h-full gap-8 md:py-24 text-center"
	>
		<h1 class="text-4xl">{m.title()}</h1>
		{m.description()}
	</div>
</section>

<!-- Available Pieces shop -->
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
						images: [customImage],
						description: '',
						sold: true
					}}
				/>
			</a>
		</li>
	</ul>
</section>

<!-- Rituals half-banner -->
<section
	class="relative max-w-5xl mt-16 px-4 mx-auto flex flex-col md:flex-row md:px-0 md:items-center"
>
	<ImgPlaceholder class="h-50 md:h-70 object-cover md:w-1/2" />
	<div class="text-center h-50 md:h-70 flex flex-col items-center justify-center gap-4 md:w-1/2">
		<p class="text-2xl">{m.ritualsSubheading()}</p>
		<Button variant="outline" href={resolve('/rituals')} size="lg" class="text-2xl">
			{m.rituals()}
		</Button>
	</div>
</section>

<!-- About Petrichor half-banner -->
<section
	class="relative max-w-5xl mb-16 px-4 mx-auto flex flex-col-reverse md:flex-row md:px-0 md:items-center"
>
	<div class="text-center h-50 md:h-70 flex flex-col items-center justify-center gap-4 md:w-1/2">
		<p class="text-2xl">{m.aboutSubheading()}</p>
		<Button variant="outline" href={resolve('/about')} size="lg" class="text-2xl">
			{m.about()}
		</Button>
	</div>
	<ImgPlaceholder class="h-50 md:h-70 object-cover md:w-1/2" />
</section>

<!-- Barter section -->
<section class="relative flex flex-col items-center justify-center gap-8 my-32">
	<p class="text-2xl text-center">{m.barterSubheading()}</p>
	<a href={resolve('/barter')} class="underline text-lg">
		{m.barter()}
	</a>
</section>

<!-- Previous Works gallery banner -->
<section class="relative h-85 md:h-140 flex flex-col items-center justify-center">
	<img src={banner2} alt={m.banner()} class="absolute h-full w-full object-cover z-0" />
	<Card.Root class="relative z-1 w-sm mx-auto text-center">
		<Card.Header>
			<Card.Title class="text-2xl">{m.seePreviousWorks()}</Card.Title>
		</Card.Header>
		<Card.Content>
			<Button size="lg" class="text-xl" href={resolve('/gallery')}>{m.gallery()}</Button>
		</Card.Content>
	</Card.Root>
</section>
