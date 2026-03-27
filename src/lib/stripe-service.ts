import Stripe from 'stripe';
import { STRIPE_SECRET_KEY, BASE_URL } from '$env/static/private';

type AllowedCountry = Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry;

const SHIPPING_COUNTRIES: AllowedCountry[] = ['CA']; // Just Canada for now

const SHIPPING_RATES = [
	'shr_1TFfCoBnG8CBNgzrB8gxSYIr', // Montreal pickup
	'shr_1TFfCQBnG8CBNgzrqwfpt9T1' // Standard shipping
];

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

export async function createCheckoutSession(pieces: Piece[]): Promise<string> {
	try {
		const products = await Promise.all(
			pieces.map((piece) => stripe.products.retrieve(piece.id, { expand: ['default_price'] }))
		);
		const session = await stripe.checkout.sessions.create({
			ui_mode: 'embedded',
			line_items: products.map((product) => ({
				price: (product.default_price as Stripe.Price).id,
				quantity: 1
			})),
			shipping_address_collection: {
				allowed_countries: SHIPPING_COUNTRIES
			},
			shipping_options: SHIPPING_RATES.map((rate) => ({ shipping_rate: rate })),
			mode: 'payment',
			return_url: `${BASE_URL}/thanks?session_id={CHECKOUT_SESSION_ID}`
		});
		if (!session.client_secret) {
			throw new Error('No client secret returned');
		}
		return session.client_secret;
	} catch (error) {
		console.error('Error creating checkout session:', error);
		throw error;
	}
}
