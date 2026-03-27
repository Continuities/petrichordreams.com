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
