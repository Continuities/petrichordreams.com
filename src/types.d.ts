type Currency = 'CAD';

type CurrencyPrice = Record<Currency, number>;

interface Piece {
	id: string;
	name: string;
	price: CurrencyPrice;
	description: string;
	images: string[];
}
