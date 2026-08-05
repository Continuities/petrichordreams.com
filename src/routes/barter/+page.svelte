<script lang="ts">
  import barter from '$lib/assets/barter.jpg';
  import { m } from '$lib/paraglide/messages';
  import { ParaglideMessage } from '@inlang/paraglide-js-svelte';
</script>

<section class="max-w-5xl mx-auto px-4 py-12 grid gap-10 grid-cols-1 md:grid-cols-2">
  <img src={barter} alt={m.barter()} class="basis-1/2" />
  <div class="basis-1/2 flex flex-col gap-4 font-extralight tracking-wide">
    <h1 class="text-3xl font-bold mb-6 font-teutonic tracking-widest">{m.barter()}</h1>
    <p>{m.barterDescription()}</p>
    <ul class="list-['✦_'] ml-6 flex flex-col gap-0.5">
      <ParaglideMessage message={m.barterList}>
        {#snippet li({ children })}
          <li class="pl-1">{@render children?.()}</li>
        {/snippet}
      </ParaglideMessage>
    </ul>
    <p>
      <ParaglideMessage message={m.barterContact}>
        {#snippet mailto({ children, options })}
          <a
            class="underline"
            target="_blank"
            href={`mailto:${options.to}?subject=${options.subject}`}>{@render children?.()}</a
          >
        {/snippet}
      </ParaglideMessage>
    </p>
  </div>
</section>
