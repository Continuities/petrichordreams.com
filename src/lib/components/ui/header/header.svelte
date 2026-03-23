<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { m } from '$lib/paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { ShoppingBag01Icon, UserIcon } from '@hugeicons/core-free-icons';

	interface Props {
		headerElement?: HTMLElement;
		floating?: boolean;
		shownFloating?: boolean;
	}

	let { headerElement = $bindable(), floating = false, shownFloating = false }: Props = $props();
	// eslint-disable-next-line svelte/prefer-writable-derived
	let hasBeenShown = $state(false);
	$effect(() => {
		hasBeenShown = floating && (hasBeenShown || shownFloating);
	});
</script>

<header
	bind:this={headerElement}
	class={floating
		? `floating${shownFloating ? ' shown' : ''}${hasBeenShown ? ' animated' : ''}`
		: undefined}
>
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

<style>
	.floating {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		background-color: var(--background);
		transform: translateY(-100%);
	}
	.animated {
		transition: transform 0.3s ease;
	}
	.shown {
		transform: translateY(0);
	}
</style>
