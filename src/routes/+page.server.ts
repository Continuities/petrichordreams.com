import type { PageServerLoad } from './$types';
import { getProducts } from '$lib/stripe-service.js';

export const load: PageServerLoad = async () => {
	const products = await getProducts();
	return {
		products
	};
};
