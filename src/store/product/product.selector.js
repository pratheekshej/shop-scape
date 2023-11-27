/**
 * Selectors to fetch the updated state of the products
 */

export const getProductsList = (state) => {
    return state.product.productsList || [];
}

export const getProductPageLimit = (state) => {
    return state.product.pageLimit || 20;
}