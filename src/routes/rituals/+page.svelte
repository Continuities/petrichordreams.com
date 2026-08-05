<script lang="ts">
  import rituals from '$lib/assets/ritual.jpg';
  import { m } from '$lib/paraglide/messages';
  import { ParaglideMessage } from '@inlang/paraglide-js-svelte';
</script>

<section class="max-w-5xl mx-auto px-4 py-12 grid gap-10 grid-cols-1 md:grid-cols-2">
  <img src={rituals} alt={m.rituals()} class="basis-1/2" />
  <div class="basis-1/2 flex flex-col gap-4 font-extralight tracking-wide">
    <h1 class="text-3xl font-bold mb-6 font-teutonic tracking-widest">{m.rituals()}</h1>
    <p>{m.ritualsDescription_1()}</p>
    <p>{m.ritualsDescription_2()}</p>
    <p>{m.ritualsDescription_3()}</p>
    <p>
      <ParaglideMessage message={m.ritualsContact}>
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
