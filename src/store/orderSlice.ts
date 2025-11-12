import { createSlice, PayloadAction, createSelector} from '@reduxjs/toolkit';
import { OrderItem, Topping } from '../types/FoodSelection';
import { RootState } from './store';

type InitialStateType = {
    orderItems: OrderItem[],
    deliveryFee: number,
    freeDeliveryFrom: number;
}
const initialState: InitialStateType = {
    orderItems: [],
  deliveryFee: 2,
  freeDeliveryFrom: 30,

}

const checkIfSameToppings = (arr1?: Topping[], arr2?: Topping[])=>{
  if(arr1){
   if(arr2){
    if(arr1.length !== arr2.length) return false;
    const arr2Names = arr2.map((elem)=> elem.name);
    for(let i=0; i<arr1.length;i++){
        if(!arr2Names.includes(arr1[i].name)){
            return false;
        }
    }
    return true;
   }
   return false;
  }else{
    return !arr2;
  }
}

const orderSlice = createSlice({
    initialState,
    name:'order',
    reducers:{
        addOrUpdateOrderItem: (state, action:PayloadAction<OrderItem> )=>{
            const { food, type, toppingsToAdd,quantity }  = action.payload;
            const indexOfExistingItem = state.orderItems.findIndex((oi) => oi.food.id === food.id && oi.type.price === type.price && checkIfSameToppings(oi.toppingsToAdd, toppingsToAdd));
            if(indexOfExistingItem !== -1){
                // update
                const existingItem = state.orderItems[indexOfExistingItem];
                const  newQuantity = existingItem.quantity+quantity;
                if(newQuantity <= 0){
                    state.orderItems.splice(indexOfExistingItem, 1)
                }else{
                    state.orderItems.splice(indexOfExistingItem, 1,{...existingItem,quantity: newQuantity})
                }
            }
            else{
                // add
                state.orderItems.push({food, quantity,type,  toppingsToAdd })
            }
            return state;
        },
        clearOrders: (state)=>{
            state.orderItems = [];
        },
    }
});

export const {reducer : ordersReducer} = orderSlice;
export const {addOrUpdateOrderItem, clearOrders} = orderSlice.actions;

export const orderInfo = (rootState: RootState)=> rootState.orders;
export const selectOrderItems = (rootState: RootState)=> rootState.orders.orderItems; 

export const selectSubTotal = (rootState: RootState)=> rootState.orders.orderItems.reduce((acc, curr)=> acc + curr.quantity * curr.type.price,0);
export const selectDeliveryFee = createSelector(orderInfo, selectSubTotal, (info, subTotal) => 
    subTotal > info.freeDeliveryFrom ? 0 : info.deliveryFee);