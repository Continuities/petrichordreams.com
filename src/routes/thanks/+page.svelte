<script lang="ts">
	import { resolve } from '$app/paths';
	import { m } from '$lib/paraglide/messages';
</script>

<section class="max-w-5xl mx-auto mt-32 text-center">
	<h1 class="text-3xl font-bold mb-4">{m.thanks()}</h1>
	<p class="text-lg mb-6">
		{m.thanksDetails()}
	</p>
	<a href={resolve('/')} class="underline">{m.continueShopping()}</a>
</section>
