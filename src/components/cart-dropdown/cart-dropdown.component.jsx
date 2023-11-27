/**
 * Cart dropdown component to listout the details
 * of items added to cart and this has a view cart
 * option to redirect to the main cart page
 */

import React from 'react';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { setIsCartOpen } from '../../store/cart/cart.actions';
import { CART_ROUTE } from '../../utils/api/routeNameConfig';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(false));
    navigate(CART_ROUTE);
  };

  return (
    <div id='cart-down' className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <div className='empty-message'>Your cart is empty</div>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>VIEW CART</Button>
    </div>
  )
};

export default CartDropdown;
