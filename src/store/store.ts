import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {ordersReducer} from './orderSlice';

const reducer = combineReducers({
   orders: ordersReducer,
})
const store = configureStore({
    reducer,
})

export default store;
export type RootState  = ReturnType<typeof store.getState>;