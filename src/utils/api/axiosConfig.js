/**
 * Centralized implementation of API calls made
 * through a package called Axios to handle all the
 * API requests in the app.
 */

import axios from "axios";
import APP_APIS from "./apiConfig";

// To access the dummyjson API URL
const axiosInstance = axios.create({
    baseURL: APP_APIS.BASE_URL
});

// To access the fakestore API URL
const fakeStoreInstance = axios.create({
    baseURL: APP_APIS.FAKESTORE_URL
});

axiosInstance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

fakeStoreInstance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export { axiosInstance, fakeStoreInstance };