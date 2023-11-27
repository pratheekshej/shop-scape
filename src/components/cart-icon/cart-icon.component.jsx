/**
 * Cart Icon component with updated cart item count
 * updated from redux store
 */

import ShoppingIcon from '../../assets/shopping-bag.png';
import './cart-icon.styles.scss';
import { selectCartCount } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

const CartIcon = ({ toggleCart }) => {
  const cartCount = useSelector(selectCartCount);

  return (
    <div id='icon-card' className='cart-icon-container' onClick={toggleCart}>
      <img src={ShoppingIcon} className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
