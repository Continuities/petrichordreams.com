import type { PageServerLoad } from './$types';
import { getPiece } from '$lib/stripe-service.js';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const piece = await getPiece(params.id);
		if (piece) {
			return {
				piece
			};
		}
	} catch (e) {
		console.info('Error fetching piece:', e);
	}
	error(404, {
		message: 'No such piece'
	});
};
