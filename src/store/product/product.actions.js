/**
 * Store actions for product updates
 */

import { createAction } from "../../utils/reducer/reducer.utils"
import { PRODUCTS_LISTING_TYPES } from "./product.types"

export const setProductsListing = (productsList) => {
    return createAction(PRODUCTS_LISTING_TYPES.ADD_PRODUCTS_LIST, productsList);
}

export const setProductPageLimit = (pageLimit) => {
    return createAction(PRODUCTS_LISTING_TYPES.ADD_PRODUCTS_PAGE_LIMIT, pageLimit);
}

export const setProductUpdates = (product) => {
    return createAction(PRODUCTS_LISTING_TYPES.ADD_PRODUCTS_CART_UPDATE, product);
}