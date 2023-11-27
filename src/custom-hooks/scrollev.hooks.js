/**
 * useScrollEvent
 * **************
 * 
 * Custom hook to perform transform updates
 * to components based on scroll up and down events.
 * The functionality is used in navigation (header) and cart total
 * components in the app
 * 
 */

import { useEffect, useRef, useState } from "react";
import { setIsCartOpen } from "../store/cart/cart.actions";
import { useDispatch } from "react-redux";

const useScrollEvent = ({ value = 200 }) => {
    const eleRef = useRef(null);
    const dispatch = useDispatch();
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                eleRef.current.style.transform = 'translateY(0)';
            } else {
                eleRef.current.style.transform = `translateY(-${value}px)`;
                dispatch(setIsCartOpen(false));
            }
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return eleRef;
}

export default useScrollEvent;