import type { Game } from '$lib/models/game';
import type { LayoutServerLoad } from './$types';


export const load: LayoutServerLoad = async () => {
	const res = await fetch('https://thehitless.com/api/games/all');
	const api = (await res.json()) as Game[];
	return {
		results: api
	};
};
