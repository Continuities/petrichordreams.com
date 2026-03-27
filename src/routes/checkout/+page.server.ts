import { createCheckoutSession } from '$lib/stripe-service';
import type { PageServerLoad } from './$types';

const MOCK_CART: Piece[] = [
	{
		id: 'prod_UCMwlAw089OyEH',
		name: 'MOCK PIECE',
		description: 'MOCK PIECE DESCRIPTION',
		price: {
			CAD: 100
		},
		images: [
			'https://files.stripe.com/links/MDB8YWNjdF8xQ0JjZ3VtT2l1c3VhN2ZsZzA4eXl8MTY5ODg4MDk0MDAwMDAwMDAw'
		]
	}
];

export const load: PageServerLoad = async () => {
	const clientSecret = await createCheckoutSession(MOCK_CART);
	return {
		clientSecret
	};
};
