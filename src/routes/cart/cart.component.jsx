/**
 * Cart Component
 * **************
 * 
 * This component holds items added to cart
 * and contains cart checkout item component to render each
 * items in the cart item list.
 * 
 */

import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import CartCheckoutItem from '../../components/cart-checkout-item/cart-checkout-item.component';
import './cart.styles.scss';
import useScrollEvent from '../../custom-hooks/scrollev.hooks';

const CartView = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartRef = useScrollEvent({ value: 165 });

  return (
    <div className='cart-view-container'>
      <div className='cart-view-items'>
        <h1>Products added in your cart</h1>
        <div className='cart-view-content'>
          {cartItems.map((cartItem) => (
            <CartCheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          {
            cartItems.length === 0 &&
            <CartCheckoutItem cartLength={cartItems.length} />
          }
        </div>
      </div>
      <div className='cart-total' ref={cartRef}>
        <div>
          <h2>Sub Total</h2><h5>(Cart Items)</h5>
          <h1>${parseFloat(cartTotal).toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
};

export default CartView;