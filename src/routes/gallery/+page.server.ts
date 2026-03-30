import type { PageServerLoad } from '../$types';
import { getPieces } from '$lib/stripe-service';

export const load: PageServerLoad = async () => {
	const pieces = await getPieces(false);
	return {
		pieces
	};
};
