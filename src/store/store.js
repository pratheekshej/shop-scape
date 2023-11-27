import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

/**
 * Redux persist is implemented in the app to maintain the record
 * of cart items added and whitelisted to avoid the removal of
 * cart items on page refresh.
 */
const persistCongif = {
    key: 'root',
    storage,
    blacklist: ['product'],
    whitelist: ['cart']
};

const persistedReducer = persistReducer(persistCongif, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { persistor, store };
