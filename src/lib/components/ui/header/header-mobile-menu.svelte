<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer';
	import { Menu01Icon, Cancel01Icon, InstagramIcon } from '@hugeicons/core-free-icons';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { Button } from '$lib/components/ui/button';
	import HeaderMenuLinks from './header-menu-links.svelte';
	import logoImg from '$lib/assets/logo.png';
	import { PUBLIC_INSTAGRAM_USERNAME } from '$env/static/public';

	let open: boolean = $state(false);
</script>

<Drawer.Root direction="left" bind:open>
	<Drawer.Trigger class="md:hidden">
		<HugeiconsIcon icon={Menu01Icon} class="size-6" />
	</Drawer.Trigger>
	<Drawer.Content>
		<img src={logoImg} alt="Logo" class="h-12 w-12 absolute top-8 left-8" />
		<Button
			size="icon-lg"
			variant="ghost"
			class="absolute top-6 right-6"
			onclick={() => (open = false)}
		>
			<HugeiconsIcon icon={Cancel01Icon} class="size-6" />
		</Button>
		<HeaderMenuLinks
			onclick={() => (open = false)}
			class="flex flex-col gap-8 ml-6 mt-32 text-xl"
		/>
		<Button
			href={`https://www.instagram.com/${PUBLIC_INSTAGRAM_USERNAME}/`}
			target="_blank"
			variant="ghost"
			class="absolute bottom-8 left-8"
			onclick={() => (open = false)}
		>
			<HugeiconsIcon icon={InstagramIcon} class="size-6" />
		</Button>
	</Drawer.Content>
</Drawer.Root>
