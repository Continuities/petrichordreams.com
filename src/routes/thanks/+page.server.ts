import { getPurchasedPieces, markPiecesAsPurchased } from '$lib/stripe-service';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies, url }) => {
	const sessionId = url.searchParams.get('session_id');
	if (!sessionId) {
		error(400, 'Missing session_id');
	}
	await markPiecesAsPurchased(await getPurchasedPieces(sessionId));
	cookies.delete('cart', {
		path: '/'
	});
};
