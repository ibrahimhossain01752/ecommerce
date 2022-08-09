import {configureStore} from '@reduxjs/toolkit';
import productsSlice from './features/userSlice';
import userSlice from './features/userSlice';
import appApi from './services/appApi';


//persist our api
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';


const reducer = combineReducers({
    user: userSlice,
    products: productsSlice,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath, "products"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    midleware:[thunk, appApi.middleware],
});

export default store;
