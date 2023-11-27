/**
 * Card that renders the basic view of the products
 * listed out from the product listing component
 */

import './product-card.styles.scss';
import Button from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.actions';
import { setProductUpdates } from '../../store/product/product.actions';
import AddedIcon from '../../assets/added-to-card.png';

const ProductCard = ({ product }) => {
  const { title, price, image, description, isAdded = null } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(setProductUpdates(product));
    dispatch(addItemToCart(cartItems, product));
  }

  return (
    <div className='product-card-container'>
      {isAdded && <img src={AddedIcon} className='added-to-cart' />}
      <h2 title={title}>{title}</h2>
      <img src={image} alt={`${title}`} />
      <div className='footer'>
        <span className='name' title={description}>{description}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        {isAdded ? 'Add again' : 'Add to cart'}
      </Button>
    </div>
  );
};

export default ProductCard;
