<script lang="ts">
  import barter from '$lib/assets/barter.jpg';
  import { m } from '$lib/paraglide/messages';
</script>

<section class="max-w-5xl mx-auto px-4 py-12 grid gap-10 grid-cols-1 md:grid-cols-2">
  <img src={barter} alt={m.barter()} class="basis-1/2" />
  <div class="basis-1/2 flex flex-col gap-4">
    <h1 class="text-3xl font-bold mb-6">{m.barter()}</h1>
    <p>{m.barterDescription_1()}</p>
    <p>{m.barterDescription_2()}</p>
    <p>{m.barterDescription_3()}</p>
  </div>
</section>
