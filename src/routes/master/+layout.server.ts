import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	// redirect user in case no auth
	const isLogged = locals.userLogged;
	if (!isLogged) {
		throw redirect(301, '/');
	}
	return {
		name: 'Hello world'
	};
}) satisfies LayoutServerLoad;
