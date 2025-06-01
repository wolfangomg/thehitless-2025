import { error } from "@sveltejs/kit";

export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms ?? 200));
}

// Shared validation function
export function validateRequest(request: Request, url: URL) {
    const referer = request.headers.get('referer');
    const origin = request.headers.get('origin');
    
    if (!referer?.startsWith(url.origin) && origin !== url.origin) {
        throw error(403, 'Invalid request source');
    }
}