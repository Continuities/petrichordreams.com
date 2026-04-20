<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { m } from '$lib/paraglide/messages';
  import ExtImg from '$lib/components/ui/external-img';

  interface Props {
    piece: PartialBy<Piece, 'id' | 'price'>;
  }

  let { piece }: Props = $props();
</script>

<Card.Root class="relative group pt-0 gap-2 aspect-1/2 hover:ring-3 transition ">
  <div class="relative w-full rounded-t-xl overflow-hidden grow-1">
    <div
      class="w-full h-full transition-scale duration-400 scale-100 group-hover:opacity-100 group-hover:scale-105"
    >
      <ExtImg src={piece.images[0]} alt={piece.name} class="object-cover w-full h-full" />
    </div>
  </div>
  <Card.Content class="min-h-12">
    <Card.Title>{piece.name}</Card.Title>
    {#if !piece.sold && piece.price}
      <p>
        {m.price({ amount: piece.price.CAD })}
      </p>
    {/if}
  </Card.Content>
</Card.Root>
