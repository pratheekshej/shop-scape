/**
 * 
 * useProductFetch
 * ***************
 * 
 * Created a scroll pagination custom hook to fetch product API
 * at the bottom of the page and adds 20 records
 * till it reaches 100 in total
 * 
 */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProductPageLimit, setProductsListing } from "../store/product/product.actions";
import APP_APIS from "../utils/api/apiConfig";
import { axiosInstance, fakeStoreInstance } from "../utils/api/axiosConfig";

const useProductFetch = ({ page, eleRef, products }) => {
    const dispatch = useDispatch();
    const [isProductsLoading, setIsProductsLoading] = useState(true);
    const [error, setError] = useState(null);
    let params = { limit: 20 };

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 1
        });
        if (observer && eleRef.current) {
            observer.observe(eleRef.current);
        }
        return () => {
            if (observer) { observer.disconnect(); }
        }
    }, [products]);

    const onIntersection = (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && isProductsLoading) {
            if (page > 20) {
                fetchData();
            } else {
                fetchFakeStoreData();
            }
        }
    }

    const dispatchResposeData = (data) => {
        if (data && data.length) {
            dispatch(setProductsListing(data));
            dispatch(setProductPageLimit(page + 20));
        } else {
            setIsProductsLoading(false);
        }
    }

    const fetchData = async () => {
        setError(null);
        try {
            if (page <= 100) {
                params = { ...params, skip: (page - 20) };
                const response = await axiosInstance.get(APP_APIS.ALL_PRODUCTS, { params });
                let productListArray = await response.products;
                const data = await productListArray.map(product => ({
                    ...product,
                    title: `${product.brand} ${product.title}`,
                    image: product.thumbnail
                }));
                dispatchResposeData(data);
            } else {
                throw Error('End of the page.');
            }
        } catch (error) {
            setIsProductsLoading(false);
            setError(error);
        }
    }

    const fetchFakeStoreData = async () => {
        try {
            if (page === 20) {
                const response = await fakeStoreInstance.get(APP_APIS.ALL_PRODUCTS, { params });
                await dispatchResposeData(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return [
        isProductsLoading,
        error
    ]
}

export default useProductFetch;