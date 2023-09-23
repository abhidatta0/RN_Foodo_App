import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {ordersReducer} from './orderSlice';
import {themeReducer} from './themeSlice';

const reducer = combineReducers({
   orders: ordersReducer,
   theme: themeReducer,
})

const middlewares = [
    /* other middlewares */
];
  
if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}
const store = configureStore({
    reducer,
    middleware: middlewares,
})

export default store;
export type RootState  = ReturnType<typeof store.getState>;