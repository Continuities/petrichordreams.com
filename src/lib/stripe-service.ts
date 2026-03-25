import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_SECRET_KEY);

const getPrice = (product: Stripe.Product): CurrencyPrice => {
	const price = product.default_price as Stripe.Price | undefined;
	return {
		CAD: (price?.unit_amount ?? 0) / 100
	};
};

const productToPiece = (product: Stripe.Product): Piece => ({
	id: product.id,
	name: product.name,
	price: getPrice(product),
	description: product.description ?? '',
	images: [product.images[0], ...(product.metadata.images?.split(',') ?? [])]
});

export async function getPieces(): Promise<Piece[]> {
	try {
		const products = await stripe.products.list({ active: true, expand: ['data.default_price'] });
		return products.data.map(productToPiece);
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
}

export async function getPiece(productId: string) {
	try {
		const product = await stripe.products.retrieve(productId, { expand: ['default_price'] });
		return productToPiece(product);
	} catch (error) {
		console.error(`Error fetching product with ID ${productId}:`, error);
		throw error;
	}
}
