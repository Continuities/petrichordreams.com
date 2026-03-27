<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { m } from '$lib/paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { ShoppingBag01Icon, Menu01Icon } from '@hugeicons/core-free-icons';
	import { getCart } from '$lib/cart/index.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import HeaderLink from './header-link.svelte';

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
		<Button size="icon-lg" variant="ghost" class="md:hidden">
			<HugeiconsIcon icon={Menu01Icon} class="size-6" />
		</Button>
		<a href={resolve('/')}>
			<img src={logo} alt={m.logo()} class="h-12 w-12" />
		</a>
		<ul class="hidden md:flex gap-4 mr-auto ml-16">
			<li>
				<HeaderLink href={resolve('/')} label={m.menu_home()} />
			</li>
			<li>
				<HeaderLink href={resolve('/custom')} label={m.menu_custom()} />
			</li>
			<li>
				<HeaderLink href={resolve('/rituals')} label={m.menu_rituals()} />
			</li>
			<li>
				<HeaderLink href={resolve('/about')} label={m.menu_about()} />
			</li>
		</ul>
		<div class="flex">
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
