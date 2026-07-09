<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import banner from '$lib/assets/main-banner.jpg';
  import previousWorksBanner from '$lib/assets/previous.jpg';
  import Button from '$lib/components/ui/button/button.svelte';
  import PieceCard from '$lib/components/ui/piece-card/index.js';
  import customImage from '$lib/assets/custom.jpg';
  import aboutPetrichor from '$lib/assets/artist-wide.png';
  import rituals from '$lib/assets/ritual.jpg';
  import { localisedResolve } from '$lib/utils.js';

  let { data } = $props();
</script>

<!-- Main banner -->
<section class="relative h-85 md:h-140">
  <img
    src={banner}
    alt={m.banner()}
    class="absolute h-full w-full object-cover object-bottom sm:object-center z-0"
  />
  <div
    class="text-white relative z-1 mx-auto flex flex-col items-center justify-end h-full gap-8 py-8 md:py-24 text-center bg-gradient-to-t from-black/80 to-transparent to-80%"
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
        <a href={localisedResolve(`/piece/${piece.id}`)} class="block">
          <PieceCard {piece} />
        </a>
      </li>
    {/each}
    <li>
      <a href={localisedResolve('/custom')} class="block">
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
  <img src={rituals} alt={m.rituals()} class="h-50 md:h-70 object-cover md:w-1/2" />
  <div class="text-center h-50 md:h-70 flex flex-col items-center justify-center gap-4 md:w-1/2">
    <p class="text-2xl">{m.ritualsSubheading()}</p>
    <Button variant="outline" href={localisedResolve('/rituals')} size="lg" class="text-2xl">
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
    <Button variant="outline" href={localisedResolve('/about')} size="lg" class="text-2xl">
      {m.about()}
    </Button>
  </div>
  <img src={aboutPetrichor} class="h-50 md:h-70 object-cover md:w-1/2" alt={m.about()} />
</section>

<!-- Barter section -->
<section class="relative flex flex-col items-center justify-center gap-8 my-32">
  <p class="text-2xl text-center">{m.barterSubheading()}</p>
  <a href={localisedResolve('/barter')} class="underline text-lg">
    {m.barter()}
  </a>
</section>

<!-- Previous Works gallery banner -->
<section class="relative h-85 md:h-140 flex flex-col items-center justify-center">
  <img src={previousWorksBanner} alt={m.banner()} class="absolute h-full w-full object-cover z-0" />
  <div
    class="text-white relative z-1 w-full flex flex-col items-center justify-end h-full gap-4 md:gap-8 py-8 md:py-18 text-center bg-gradient-to-t from-black/80 to-transparent to-80%"
  >
    <h1 class="text-2xl md:text-3xl">{m.seePreviousWorks()}</h1>
    <Button size="lg" class="text-xl md:text-2xl" href={localisedResolve('/gallery')}
      >{m.gallery()}</Button
    >
  </div>
</section>
