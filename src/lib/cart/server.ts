/**
 * Server-side cart management utilities
 * @since 2026-03-27
 * @author Michael Townsend <@continuities>
 */

import { getPiece } from '$lib/stripe-service';
import type { Cookies } from '@sveltejs/kit';

export const getCartFromCookies = async (cookies: Cookies): Promise<Piece[]> => {
	const cart: PieceId[] = JSON.parse(decodeURIComponent(cookies.get('cart') ?? '[]'));
	return Promise.all(cart.map((id) => getPiece(id)));
};

export const saveCartToCookie = (cookies: Cookies, pieceIds: PieceId[]) => {
	const expires = new Date();
	expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
	cookies.set('cart', JSON.stringify(pieceIds), {
		path: '/',
		httpOnly: false,
		expires
	});
};
