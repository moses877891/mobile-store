import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root.reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: []
}

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger
].filter(Boolean);

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancer = compose(applyMiddleware(...middleWares));

export const Store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(Store);