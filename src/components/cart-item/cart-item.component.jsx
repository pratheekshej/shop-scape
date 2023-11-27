/**
 * Cart Item component to display the items
 * inside the cart dropdown component when
 * clicked from cart icon.
 */

import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { image, price, title, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={image} alt={`${title}`} />
      <div className='item-details'>
        <span className='name' title={title}>
          {(title.length > 30) ? `${title.substr(0, 15)}...` : title}
        </span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
