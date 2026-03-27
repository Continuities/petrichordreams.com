<script lang="ts">
	import ImgPlaceholder from '$lib/components/ui/img-placeholder';
	import { m } from '$lib/paraglide/messages';
</script>

<section class="max-w-5xl mx-auto px-4 py-12 flex gap-10 flex-col md:flex-row">
	<ImgPlaceholder class="basis-1/2" />
	<div class="basis-1/2 flex flex-col gap-4">
		<h1 class="text-3xl font-bold mb-6">{m.commissions()}</h1>
		<p>{m.commissionsDescription_1()}</p>
		<p>{m.commissionsDescription_2()}</p>
		<p>{m.commissionsDescription_3()}</p>
	</div>
</section>
