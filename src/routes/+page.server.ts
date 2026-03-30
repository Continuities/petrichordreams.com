import type { PageServerLoad } from './$types';
import { getPieces } from '$lib/stripe-service.js';

export const load: PageServerLoad = async () => {
	const pieces = await getPieces(true);
	return {
		pieces
	};
};
