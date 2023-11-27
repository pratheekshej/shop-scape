/**
 * 
 * Individual cart checkout item component that
 * renders each cart item in the cart component
 * route.
 * 
 */

import React, { Fragment } from 'react'
import './cart-checkout-item.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartCheckoutItem = ({ cartItem, cartLength }) => {
    const { title, image, price, quantity, description } = cartItem || {};
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    /**
     * Store actions to be performed while adding and subtracting
     * quantity and removing the item from cart
     */
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <div className='checkout-item-container'>
            {
                (cartLength === 0) ?
                    'You have no products added in the cart. Please add your products and revisit.' :
                    <Fragment>
                        <div className='image-view'>
                            <img src={image} alt={title} />
                        </div>
                        <div className='content-view'>
                            <h2>{title}</h2>
                            <div>In Stock</div>
                            <div className='desc-container'>
                                <h4>Details</h4>
                                <div>{description}</div>
                            </div>
                            <div className='quantity'>
                                <div>
                                    Qty : &nbsp;
                                    <span onClick={removeItemHandler}>&#10094;</span>
                                    {quantity}
                                    <span onClick={addItemHandler}>&#10095;</span>
                                </div>
                                &nbsp;&nbsp;|&nbsp;&nbsp;
                                <div onClick={clearItemHandler}>Delete</div>
                            </div>
                        </div>
                        <h2 className='price-view'>
                            ${price}
                        </h2>
                    </Fragment>
            }
        </div>
    )
}

export default CartCheckoutItem