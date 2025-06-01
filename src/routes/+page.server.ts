// src/routes/+page.server.ts
import { redirect, fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_API } from '$env/static/public';

export const load = (async ({ locals }) => {
	if (locals.userLogged) {
		throw redirect(301, '/master');
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	signIn: async ({ request, cookies, fetch, locals }) => {
		const loginForm = await request.formData();
		const username = loginForm.get('username')?.toString() ?? '';
		const password = loginForm.get('password')?.toString() ?? '';
		const rememberMe = loginForm.get('rememberme') === 'on';

		if (!username || !password) {
			return fail(400, {
				error: true,
				message: 'Username and password are required',
				username // Return username to keep it in the form
			});
		}

		try {
			const res = await fetch(PUBLIC_API + '/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: username,
					password
				})
			});

			if (!res.ok) {
				const errorData = await res.json().catch(() => ({}));
				return fail(res.status, {
					error: true,
					message: errorData.message || 'Invalid credentials',
					username
				});
			}

			const data = await res.json();

			if (!data.token) {
				return fail(500, {
					error: true,
					message: 'Invalid response from server',
					username
				});
			}

			const expiresIn = rememberMe
				? 60 * 60 * 24 * 365 * 1000 // 30 days if remember me
				: 60 * 60 * 24 * 1 * 1000; // 7 days otherwise

			const cookieOptions = {
				maxAge: expiresIn,
				httpOnly: true,
				secure: true,
				sameSite: 'lax' as const,
				path: '/'
			};

			cookies.set('authToken', data.token, cookieOptions);
			locals.userLogged = true;
			return { success: true };
		} catch (err) {
			if (err instanceof Response) {
				throw err;
			}

			return fail(500, {
				error: true,
				message: 'An error occurred during login. Please try again.',
				username
			});
		}
	},

	signOut: async ({ cookies }) => {
		// Clear the auth token cookie
		cookies.delete('authToken', {
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'lax'
		});

		return { success: true };
	}
} satisfies Actions;
