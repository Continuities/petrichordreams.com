/**
 * Client-side implementation of a shopping cart
 * @since 2026-03-26
 * @author Michael Townsend <@continuities>
 */
import { openDB, type IDBPDatabase } from 'idb';

let dbPromise: Promise<IDBPDatabase<unknown>> | undefined = undefined;
const getDb = () => {
	if (!dbPromise) {
		dbPromise = openDB('petrichor-cart', 1, {
			upgrade(db) {
				db.createObjectStore('cart', { keyPath: 'id' });
			}
		});
	}
	return dbPromise;
};

let cart: Record<PieceId, Piece> = $state({});

export const loadCart = async () => {
	const db = await getDb();
	const allPieces = await db.getAll('cart');
	cart = Object.fromEntries(allPieces.map((piece) => [piece.id, piece]));
};

export const savePiece = async (piece: Piece) => {
	const db = await getDb();
	const tx = db.transaction('cart', 'readwrite');
	const store = tx.objectStore('cart');
	await store.put(piece);
	await tx.done;
};

export const deletePiece = async (pieceId: PieceId) => {
	const db = await getDb();
	const tx = db.transaction('cart', 'readwrite');
	const store = tx.objectStore('cart');
	await store.delete(pieceId);
	await tx.done;
};

export const addToCart = (piece: Piece) => {
	savePiece(piece);
	// new cart object to trigger reactivity
	cart = { ...cart, [piece.id]: piece };
};

export const removeFromCart = (pieceId: PieceId) => {
	deletePiece(pieceId);
	// new cart object to trigger reactivity
	cart = Object.fromEntries(Object.entries(cart).filter(([id]) => id !== pieceId));
};

export const getCart = () => cart;
