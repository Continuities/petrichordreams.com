import { getCartFromCookies } from '$lib/cart/server';
import { createCheckoutSession } from '$lib/stripe-service';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const pieces = await getCartFromCookies(cookies);
	const clientSecret = await createCheckoutSession(pieces);
	return {
		clientSecret
	};
};
