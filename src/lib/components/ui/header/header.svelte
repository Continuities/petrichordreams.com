<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { m } from '$lib/paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { ShoppingBag01Icon, UserIcon } from '@hugeicons/core-free-icons';
</script>

<header>
	<div class="flex justify-between items-center max-w-5xl mx-auto py-8 px-4">
		<img src={logo} alt={m.logo()} class="h-12 w-12" />
		<div class="flex">
			<Button size="icon-lg" variant="ghost">
				<HugeiconsIcon icon={UserIcon} class="size-6" />
			</Button>
			<Button size="icon-lg" variant="ghost">
				<HugeiconsIcon icon={ShoppingBag01Icon} class="size-6" />
			</Button>
		</div>
	</div>
</header>
