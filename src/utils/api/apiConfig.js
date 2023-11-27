/**
 * URL configuration of the application
 */

const APP_APIS = {
    BASE_URL: 'https://dummyjson.com',
    FAKESTORE_URL: 'https://fakestoreapi.com',
    ALL_PRODUCTS: '/products',
    LIMITED_PRODUCTS: (limit = 20) => `/products?limit=${limit}`,
};

export default APP_APIS;