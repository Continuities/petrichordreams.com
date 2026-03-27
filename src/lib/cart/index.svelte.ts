/**
 * Client-side implementation of a shopping cart
 * @since 2026-03-26
 * @author Michael Townsend <@continuities>
 */

let cart: PieceId[] = $state([]);

export const loadCartFromCookie = (): PieceId[] => {
	const cartCookie = document.cookie
		.split('; ')
		.find((row) => row.startsWith('cart='))
		?.split('=')[1];
	if (cartCookie) {
		try {
			const loaded = JSON.parse(decodeURIComponent(cartCookie));
			cart = loaded;
			return loaded;
		} catch (e) {
			console.error('Failed to parse cart from cookie', e);
		}
	}
	return [];
};

export const saveCartToCookie = (pieceIds: PieceId[]) => {
	// eslint-disable-next-line svelte/prefer-svelte-reactivity
	const expires = new Date();
	expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
	document.cookie = `cart=${encodeURIComponent(JSON.stringify(pieceIds))}; expires=${expires.toUTCString()}; path=/`;
};

export const addToCart = (piece: Piece) => {
	// new cart array to trigger reactivity
	cart = [...cart, piece.id];
	saveCartToCookie(cart);
};

export const removeFromCart = (pieceId: PieceId) => {
	// new cart array to trigger reactivity
	cart = cart.filter((id) => id !== pieceId);
	saveCartToCookie(cart);
};

export const getCart = () => cart;
