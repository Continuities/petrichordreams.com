<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { localisedResolve } from '$lib/utils';
</script>

<section class="max-w-5xl mx-auto mt-32 text-center font-extralight tracking-wide">
  <h1 class="text-3xl font-bold mb-4 font-teutonic tracking-widest">{m.thanks()}</h1>
  <p class="text-lg mb-6">
    {m.thanksDetails()}
  </p>
  <a href={localisedResolve('/')} class="underline font-teutonic tracking-widest"
    >{m.continueShopping()}</a
  >
</section>
