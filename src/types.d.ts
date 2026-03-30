type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type Currency = 'CAD';

type CurrencyPrice = Record<Currency, number>;

type PieceId = string;

interface Piece {
	id: PieceId;
	name: string;
	price: CurrencyPrice;
	description: string;
	images: string[];
	sold: boolean;
}
