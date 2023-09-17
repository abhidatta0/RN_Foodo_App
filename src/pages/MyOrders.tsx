import {View, Text, FlatList, StyleSheet} from 'react-native';
import {  OrderItem } from '../types/FoodSelection';
import data from '../data/AllMenuData';
import OrderItemCard from '../components/OrderItemCard';
import Spacing from '../theme/spacing';
import Colors from '../theme/colors';

const MyOrders = ()=>{
    const orderItems:OrderItem[] = [
      {
       food: data['pizza'].items[0],
       type: data['pizza'].items[0].pizzaTypes[0],
       toppingsToAdd: [data['pizza'].items[0].toppings[0], data['pizza'].items[0].toppings[1]],
       quantity: 3
      },
      {
        food: data['burger'].items[0],
        type: data['burger'].items[0].variations[0],
        quantity: 2
       }
    ];

    return (
    <View style={styles.container}>
       <FlatList 
        data={orderItems}
        renderItem={({item})=> <OrderItemCard order={item}/>}
        keyExtractor={(item)=> item.food.id}
       />
    </View>
   )
}

export default MyOrders;

const styles = StyleSheet.create({
    container:{
        padding: Spacing.medium,
    }
})