/**
 * Products Component
 * ******************
 * 
 * Products component servers as the initial route
 * which displays all the products with the basic details
 * inside ProductCard component.
 * 
 */

import { Fragment, useEffect, useRef, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import './products.styles.scss';
import { connect, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import useProductFetch from '../../custom-hooks/products.hooks';

const Products = ({ products, page }) => {
  const eleRef = useRef(null);
  const [isProductsLoading, error] = useProductFetch({ page, eleRef, products });
  const cartItems = useSelector(selectCartItems);
  const [productList, setProductList] = useState([]);

  /**
   * Rendering the component based on "products" updates
   * with respect to changes made to cart items.
   */
  useEffect(() => {
    const productArray = products.map((product) => {
      if ('isAdded' in product) {
        let isInCart = cartItems.find(item => item.id === product.id);
        if (!isInCart) { delete product['isAdded']; }
      }
      return product;
    });
    setProductList(productArray);
  }, [products]);

  return (
    <Fragment>
      <div className='products-container'>
        {productList.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      {
        (isProductsLoading || error) &&
        <div className={`loader-container${error ? ' error' : ''}`} ref={eleRef}>
          {
            isProductsLoading && (products && products.length === 0) &&
            <div className='loading'>Loading products...</div>
          }
          {
            isProductsLoading && (products && products.length > 0) &&
            <div className='load-more'>Loading more...</div>
          }
          {
            error &&
            <div className='error'>You've reached the end of the list!</div>
          }
        </div>
      }
    </Fragment>
  );
};

const mapStateToProps = ({ product }) => ({
  products: product.productsList,
  page: product.pageLimit
});

/** Utilized the traditional way of connecting component to Redux */
export default connect(mapStateToProps)(Products);
