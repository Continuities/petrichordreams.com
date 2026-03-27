import type { PageServerLoad } from './$types';
import { getCartFromCookies } from '$lib/cart/server';

export const load: PageServerLoad = async ({ cookies }) => {
	const pieces = await getCartFromCookies(cookies);
	return {
		pieces
	};
};
