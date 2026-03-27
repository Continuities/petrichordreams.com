<script lang="ts">
	import ImgPlaceholder from '$lib/components/ui/img-placeholder';
	import { m } from '$lib/paraglide/messages';
</script>

<section class="max-w-5xl mx-auto px-4 py-12 grid gap-10 grid-cols-1 md:grid-cols-2">
	<ImgPlaceholder class="basis-1/2" />
	<div class="basis-1/2 flex flex-col gap-4">
		<h1 class="text-3xl font-bold mb-6">{m.about()}</h1>
		<p>{m.aboutDescription_1()}</p>
		<p>{m.aboutDescription_2()}</p>
		<p>{m.aboutDescription_3()}</p>
	</div>
</section>
