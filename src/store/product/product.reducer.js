/**
 * Product reducers to perform updates to products
 * for components in the app
 */

import { PRODUCTS_LISTING_TYPES } from "./product.types";

const INITIAL_STATE = {
    productsList: [],
    pageLimit: 20
};

// Checking if a product from product view is added to cart
const checkForUpdates = ({ productsList }, cartProduct) => {
    return productsList.map(product => {
        if (product.id === cartProduct.id) {
            return { ...product, isAdded: true };
        }
        return product;
    });
}

export const productReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        // Action to add product list on scrolling event
        case PRODUCTS_LISTING_TYPES.ADD_PRODUCTS_LIST:
            return {
                ...state,
                productsList: [...state.productsList, ...payload]
            }
        case PRODUCTS_LISTING_TYPES.ADD_PRODUCTS_PAGE_LIMIT:
            return {
                ...state,
                pageLimit: payload
            }
        case PRODUCTS_LISTING_TYPES.ADD_PRODUCTS_CART_UPDATE:
            return {
                ...state,
                productsList: checkForUpdates(state, payload)
            }
        default:
            return state;
    }
}