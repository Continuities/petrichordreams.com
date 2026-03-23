import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function getProducts() {
	try {
		const products = await stripe.products.list({ active: true, expand: ['data.default_price'] });
		return products.data;
	} catch (error) {
		console.error('Error fetching products:', error);
		throw error;
	}
}
