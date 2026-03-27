<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import customImage from '$lib/assets/custom.jpg';
</script>

<section class="max-w-5xl mx-auto px-4 py-12 grid gap-10 grid-cols-1 md:grid-cols-2">
	<img src={customImage} alt={m.custom()} class="flex-1 basis-1/2" />
	<div class="basis-1/2 flex-1 flex flex-col gap-4">
		<h1 class="text-3xl font-bold mb-6">{m.custom()}</h1>
		<p>{m.customDescription_1()}</p>
		<p>{m.customDescription_2()}</p>
		<p>{m.customDescription_3()}</p>
	</div>
</section>
