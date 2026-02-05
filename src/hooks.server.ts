export async function handle({ event, resolve }) {
    const baseUrl = event.cookies.get('magento_base_url');

    event.locals.config = baseUrl
        ? { baseUrl }
        : null;

    return resolve(event);
}
