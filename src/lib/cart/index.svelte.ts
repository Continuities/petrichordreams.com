/**
 * Client-side implementation of a shopping cart
 * @since 2026-03-26
 * @author Michael Townsend <@continuities>
 */

let cart: Record<PieceId, Piece> = $state({});

export const addToCart = (piece: Piece) => {
	// new cart object to trigger reactivity
	cart = { ...cart, [piece.id]: piece };
};

export const removeFromCart = (pieceId: PieceId) => {
	// new cart object to trigger reactivity
	cart = Object.fromEntries(Object.entries(cart).filter(([id]) => id !== pieceId));
};

export const getCart = () => cart;
