import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItemCard from '../components/OrderItemCard';
import Spacing from '../theme/spacing';
import MyOrdersFooter from '../components/MyOrdersFooter';
import { selectOrderItems } from '../store/orderSlice';

const MyOrders = ()=>{
    const orderItems =useSelector(selectOrderItems);

    return (
    <View style={styles.container}>
       <FlatList 
        data={orderItems}
        renderItem={({item})=> <OrderItemCard order={item}/>}
        keyExtractor={(item,index)=> index.toString()}
        ListFooterComponent={orderItems.length > 0 ? MyOrdersFooter: null}
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