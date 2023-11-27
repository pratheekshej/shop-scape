import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import { CART_ROUTE } from './utils/api/routeNameConfig';
import CartView from './routes/cart/cart.component';
import Products from './routes/products/products.component';

const App = () => {
  /**
   * Application begins here with nested routes defined
   * for initial page load and route shifts to the cart
   * page.
   */
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Products />} />
        <Route path={CART_ROUTE} element={<CartView />} />
      </Route>
    </Routes>
  );
};

export default App;
