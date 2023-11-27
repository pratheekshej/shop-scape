/**
 * Render the names on the header based on
 * the route changes made in the app
 */

const logoStyle = { fontWeight: '800' };
const routeStyle = { fontWeight: '700', color: 'darkolivegreen' };
export const SHOP_ROUTE = '';
export const CART_ROUTE = 'cart';

export const ROUTES = {
    logo: <h1><b style={logoStyle}>ShOP</b>ScApE</h1>,
    [`/${SHOP_ROUTE}`]: <h1><b style={routeStyle}>Product</b> Listing</h1>,
    [`/${CART_ROUTE}`]: <h1><b style={routeStyle}>Cart</b> Details</h1>
};