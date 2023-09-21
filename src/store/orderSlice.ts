import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { OrderItem, Topping } from '../types/FoodSelection';
import { RootState } from './store';

type InitialStateType = {
    orderItems: OrderItem[],
    deliveryFee: number,
}
const initialState: InitialStateType = {
    orderItems: [],
  deliveryFee: 2,
}

const checkIfSameToppings = (arr1?: Topping[], arr2?: Topping[])=>{
    console.log({arr1xzx: arr1, arr2});
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
            console.log({indexOfExistingItem});
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
                state.orderItems.push({food, quantity: 1,type,  toppingsToAdd })
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

export const selectOrderItems = (rootState: RootState)=> rootState.orders.orderItems; 

export const selectSubTotal = (rootState: RootState)=> rootState.orders.orderItems.reduce((acc, curr)=> acc = acc + curr.quantity * curr.type.price,0);
export const selectDeliveryFee = (rootState: RootState)=> rootState.orders.deliveryFee;