import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const res = await fetch('https://thehitless.com/api/games/' + params.id);
	const api = await res.json();

	if (res.status !== 200) {
		throw error(404, 'That game not exists');
	}
	return {
		_id: api._id,
		name: api.name,
		description: api.description,
		background: api.background,
		thumbnail: api.thumbnail
	};
}) satisfies PageServerLoad;
