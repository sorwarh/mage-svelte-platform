import { redirect } from '@sveltejs/kit';

export function load({ cookies, url }) {
    const baseUrl = cookies.get('magento_base_url');

    if (!baseUrl && !url.pathname.startsWith('/setup')) {
        throw redirect(302, '/setup');
    }
}
