<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import Question from './question.svelte';
</script>

<section class="max-w-5xl mx-auto mt-16 font-extralight tracking-wide">
  <h1 class="text-3xl font-bold mb-4 font-teutonic tracking-widest">{m.faq()}</h1>
  <Question question={m.faq_question()} answer={m.faq_answer()} />
</section>
