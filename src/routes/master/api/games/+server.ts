import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PUBLIC_API } from '$env/static/public';
import { sleep, validateRequest } from '$lib/helpers';


export const GET: RequestHandler = async ({ request, locals, url }) => {
    validateRequest(request, url);
    
    if (!locals.token) {
        throw error(401, 'Unauthorized request');
    }
    
    try {
        const res = await fetch(`${PUBLIC_API}/games/all`);
        
        if (!res.ok) {
            throw error(res.status, `API error: ${res.statusText}`);
        }
        
        const data = await res.json();
        return json(data);
    } catch (err) {
        if (err instanceof Error && 'status' in err) {
            throw err; // Re-throw SvelteKit errors
        }
        throw error(500, 'Failed to fetch games');
    }
};

export const POST: RequestHandler = async ({ request, locals, url }) => {
    validateRequest(request, url);
    
    if (!locals.token) {
        throw error(401, 'Unauthorized request');
    }
    
    try {
        // Get the request body to forward
        const body = await request.json();
        
        const res = await fetch(`${PUBLIC_API}/games/admin/filter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${locals.token}`
            },
            body: JSON.stringify(body)
        });
        
        if (!res.ok) {
            throw error(res.status, `API error: ${res.statusText}`);
        }
        
        const data = await res.json();
        // await sleep(5000)
        return json(data);
    } catch (err) {
        if (err instanceof Error && 'status' in err) {
            throw err; // Re-throw SvelteKit errors
        }
        throw error(500, 'Failed to filter games');
    }
};