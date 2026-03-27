<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { m } from '$lib/paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { ShoppingBag01Icon, UserIcon } from '@hugeicons/core-free-icons';
	import { getCart } from '$lib/cart/index.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	interface Props {
		headerElement?: HTMLElement;
		floating?: boolean;
		shownFloating?: boolean;
	}

	let cart = $derived(getCart());

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
	<div class="flex justify-between items-center max-w-5xl mx-auto py-8 px-4 md:px-0">
		<a href={resolve('/')}>
			<img src={logo} alt={m.logo()} class="h-12 w-12" />
		</a>
		<div class="flex">
			<Button size="icon-lg" variant="ghost">
				<HugeiconsIcon icon={UserIcon} class="size-6" />
			</Button>
			<Button
				size="icon-lg"
				variant="ghost"
				class="relative"
				onclick={() => goto(resolve('/cart'))}
			>
				<HugeiconsIcon icon={ShoppingBag01Icon} class="size-6" />
				{#if cart.length > 0}
					<div class="absolute -top-1 -right-1 bounce-in">
						<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
							{cart.length}
						</Badge>
					</div>
				{/if}
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
	.bounce-in {
		animation: bounce-in 0.3s ease;
	}

	@keyframes bounce-in {
		0% {
			opacity: 0;
			transform: scale(0.5);
		}
		60% {
			opacity: 1;
			transform: scale(1.3);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
