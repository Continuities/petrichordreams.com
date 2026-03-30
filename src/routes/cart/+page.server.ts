import type { PageServerLoad } from './$types';
import { getCartFromCookies, saveCartToCookie } from '$lib/cart/server';

export const load: PageServerLoad = async ({ cookies }) => {
	const pieces = await getCartFromCookies(cookies);
	const unsoldPieces = pieces.filter((piece) => !piece.sold);
	if (unsoldPieces.length < pieces.length) {
		saveCartToCookie(
			cookies,
			unsoldPieces.map((p) => p.id)
		);
	}
	return {
		pieces: unsoldPieces
	};
};
