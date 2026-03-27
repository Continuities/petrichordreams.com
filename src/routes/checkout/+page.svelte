<script lang="ts">
	import { loadStripe, type Stripe } from '@stripe/stripe-js';
	import StripeCheckout from '$lib/components/ui/stripe-checkout';
	import { onMount } from 'svelte';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { Spinner } from '$lib/components/ui/spinner';

	let { data } = $props();
	let stripe: Stripe | null = $state(null);
	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	});
</script>

<section class="my-8">
	{#if !stripe || !data.clientSecret}
		<Spinner class="size-8 absolute left-[50%] top-[40%] ml-[-12px]" />
	{:else}
		<StripeCheckout {stripe} clientSecret={data.clientSecret} />
	{/if}
</section>
