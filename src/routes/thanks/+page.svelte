<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { localisedResolve } from '$lib/utils';
</script>

<section class="max-w-5xl mx-auto mt-32 text-center">
	<h1 class="text-3xl font-bold mb-4">{m.thanks()}</h1>
	<p class="text-lg mb-6">
		{m.thanksDetails()}
	</p>
	<a href={localisedResolve('/')} class="underline">{m.continueShopping()}</a>
</section>
