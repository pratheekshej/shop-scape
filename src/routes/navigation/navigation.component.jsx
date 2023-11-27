/**
 * Navigation Component
 * ********************
 * 
 * This component serves as the parent route component
 * of the application with header component elements inside and
 * this again holds the other app routes that renders inside the
 * Outlet component of the 'react-router-dom' package.
 * 
 */

import { Fragment, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './navigation.styles.scss';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ROUTES } from '../../utils/api/routeNameConfig';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.actions';
import useScrollEvent from '../../custom-hooks/scrollev.hooks';

const Navigation = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen) || false;
  const { pathname } = useLocation();
  const boxRef = useScrollEvent({ value: 200 });

  /**
   * Initialization of a click event listener to handle
   * closing the cart dropdown when clicked outside and on the
   * cart icon while in its open state.
   */
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      if (
        e && e.target && e.target.offsetParent &&
        e.target.offsetParent.id !== 'icon-card' &&
        e.target.offsetParent.id !== 'cart-down'
      ) {
        dispatch(setIsCartOpen(false));
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const toggleCartHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  }

  return (
    <Fragment>
      <div className='navigation' ref={boxRef}>
        <Link className='logo-container' to='/'>
          {ROUTES['logo']}
        </Link>
        {pathname && ROUTES[pathname]}
        <div className='nav-links-container'>
          <CartIcon toggleCart={toggleCartHandler} />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <div className='router-outlet'>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
