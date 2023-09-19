import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { FoodSelection, OrderItem, PizzaType, Topping, VariationType } from '../types/FoodSelection';
import { RootState } from './store';

export type AddOrUpdateOrderItemPayload = {
    food : FoodSelection,
    type?: PizzaType|VariationType, 
    toppings?: Topping[],
    quantity: number
};

type InitialStateType = {
    orderItems: OrderItem[],
    deliveryFee: number,
}
const initialState: InitialStateType = {
    orderItems: [],
  deliveryFee: 2,
}

const checkIfSameToppings = (arr1?: Topping[], arr2?: Topping[])=>{
  if(arr1){
   if(arr2){
    if(arr1.length !== arr2.length) return false;
    for(let i=0; i<arr1.length;i++){
        if(arr1[i].name !== arr2[i].name){
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
        addOrUpdateOrderItem: (state, action:PayloadAction<AddOrUpdateOrderItemPayload> )=>{
            const { food, type, toppings,quantity }  = action.payload;
            if(type){
                const indexOfExistingItem = state.orderItems.findIndex((oi) => oi.food.id === food.id && oi.type.price === type.price && checkIfSameToppings(oi.toppingsToAdd, toppings));
                if(indexOfExistingItem !== -1){
                    const existingItem = state.orderItems[indexOfExistingItem];
                    // update
                    state.orderItems.splice(indexOfExistingItem, 1,{...existingItem,quantity: existingItem.quantity+quantity})
                }
                else{
                    console.log({toppings});
                    // add
                    state.orderItems.push({food, quantity: 1,type,  toppingsToAdd: toppings})
                }
            }
            return state;
        }
    }
});

export const {reducer : ordersReducer} = orderSlice;
export const {addOrUpdateOrderItem} = orderSlice.actions;

export const selectOrderItems = (rootState: RootState)=> rootState.orders.orderItems; 