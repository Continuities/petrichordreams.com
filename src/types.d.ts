type Currency = 'CAD';

type CurrencyPrice = Record<Currency, number>;

type PieceId = string;

interface Piece {
	id: PieceId;
	name: string;
	price: CurrencyPrice;
	description: string;
	images: string[];
}
