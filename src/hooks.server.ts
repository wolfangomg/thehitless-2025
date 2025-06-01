import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

const handleAuth: Handle = async ({ event, resolve }) => {
	const sCookie = event.cookies.get('authToken');

	// validate cookie should be here
	try {
		event.locals.userLogged = Boolean(sCookie);
		event.locals.token = sCookie ?? null;
	} catch (e) {
		event.locals.userLogged = null;
		event.locals.token = null;
	}

	return resolve(event);
};

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		});
	});

export const handle: Handle = sequence(handleAuth, handleParaglide);
