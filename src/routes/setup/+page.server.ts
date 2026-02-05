import { redirect, fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const baseUrl = data.get('baseUrl')?.toString();
        if (!baseUrl) {
            return fail(400, { error: 'Base URL is required' });
        }

        if (!baseUrl.startsWith('https://')) {
            return fail(422, {
                error: 'Must be an valid HTTPS URL'
            });
        }

        cookies.set('magento_base_url', baseUrl, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax'
        });

        throw redirect(303, '/');
    }
};
