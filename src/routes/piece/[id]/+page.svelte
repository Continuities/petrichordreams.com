<script lang="ts">
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import AddToCartButton from '$lib/components/ui/add-to-cart-button/add-to-cart-button.svelte';
  import { m } from '$lib/paraglide/messages';

  let { data } = $props();
  let { piece } = $derived(data);
</script>

<div class="max-w-5xl mx-auto px-8 py-8 flex flex-col gap-8 md:flex-row md:gap-0 md:px-0">
  <!-- images column -->
  <section class="md:w-2/3 flex flex-col gap-4">
    <img
      src={piece.images[0]}
      alt={piece.name}
      class="hidden md:block object-contain w-full mb-4 max-h-[80vh]"
    />
    <Carousel.Root class="md:hidden">
      <Carousel.Content>
        {#each piece.images as img (img)}
          <Carousel.Item>
            <img src={img} alt={piece.name} class="object-cover w-full" />
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      {#if piece.images.length > 1}
        <div class="flex justify-center gap-4 mt-4">
          <Carousel.Previous class="static translate-0" variant="ghost" />
          <Carousel.Next class="static translate-0" variant="ghost" />
        </div>
      {/if}
    </Carousel.Root>
    {#if piece.images.length > 1}
      <div class="grid-cols-2 gap-4 hidden md:grid">
        {#each piece.images.slice(1) as img (img)}
          <img src={img} alt={piece.name} class="object-cover" />
        {/each}
      </div>
    {/if}
  </section>

  <!-- content column -->
  <section class="md:w-1/3 md:pl-8">
    <div class="md:sticky md:top-8 flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl">{piece.name}</h1>
        <h2 class="text-md text-muted-foreground">{piece.description}</h2>
        <span class="text-sm text-muted-foreground mb-4">
          {m.dimensionsCm({ widthCm: piece.widthCm, heightCm: piece.heightCm })}
        </span>
      </div>
      <p>{piece.mood}</p>
      {#if piece.story}
        {#each piece.story as paragraph (paragraph)}
          <p>{paragraph}</p>
        {/each}
      {/if}
      {#if !piece.sold}
        <p class="mt-4">{m.price({ amount: piece.price.CAD })}</p>
        <AddToCartButton {piece} />
      {/if}
    </div>
  </section>
</div>
