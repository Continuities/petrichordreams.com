<script lang="ts">
	import { resolve } from '$app/paths';
	import galleryBanner from '$lib/assets/gallery-banner.webp';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { m } from '$lib/paraglide/messages';
	import PieceCard from '$lib/components/ui/piece-card';
	import { PUBLIC_INSTAGRAM_USERNAME } from '$env/static/public';

	let { data } = $props();
</script>

<!-- Header banner -->
<section class="relative h-85 md:h-140 flex flex-col items-center justify-center">
	<img src={galleryBanner} alt={m.gallery()} class="absolute h-full w-full object-cover z-0" />
	<Card.Root class="relative z-1 w-sm mx-auto text-center py-8 ">
		<Card.Header>
			<Card.Title class="text-3xl">{m.gallery()}</Card.Title>
		</Card.Header>
		<Card.Content>
			<p class="mb-6">{m.seeMoreOnIntagram()}</p>
			<Button
				size="lg"
				class="text-md"
				href={`https://www.instagram.com/${PUBLIC_INSTAGRAM_USERNAME}/`}
				target="_blank"
				rel="noopener noreferrer"
			>
				@{PUBLIC_INSTAGRAM_USERNAME}
			</Button>
		</Card.Content>
	</Card.Root>
</section>

<!-- Gallery -->
<section class="max-w-5xl mx-auto my-16 px-4 md:px-0">
	<h1 class="text-2xl mb-8">{m.previousWorks()}</h1>
	<ul class="grid grid-cols-2 md:grid-cols-4 items-center gap-2 md:gap-4">
		{#each data.pieces as piece (piece.id)}
			<li>
				<a href={resolve(`/piece/${piece.id}`)} class="block">
					<PieceCard {piece} />
				</a>
			</li>
		{/each}
	</ul>
</section>
