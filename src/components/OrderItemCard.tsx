import {Text, View, StyleSheet, Image} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import { OrderItem } from '../types/FoodSelection';
import Spacing from '../theme/spacing';
import { FontFamilies, FontSize } from '../theme/fonts';
import Colors from '../theme/colors';
import { addOrUpdateOrderItem } from '../store/orderSlice';
import { selectThemeMode } from '../store/themeSlice';

type Props = {
    order: OrderItem,
}
const OrderItemCard = ({order}: Props)=>{
    const themeMode = useSelector(selectThemeMode);
    const dispatch = useDispatch()
    const toppingsNames = order.toppingsToAdd ? order.toppingsToAdd.map((topping)=> topping.name).join(', ') : null;

    console.log({toppingsNames: order.toppingsToAdd});
    const changeQuantity = (amount: 1 |-1)=>{
        dispatch(addOrUpdateOrderItem({...order, quantity: amount}))
    }
  return  <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{uri: order.food.image}} />
        </View>
        <View style={styles.detailBox}>
            <Text style={[styles.name, {color: themeMode === 'dark' ? Colors.gold['400'] :  Colors.grey['700']}]} numberOfLines={1} ellipsizeMode='tail'>{order.food.name} {order.food.subName}</Text>
            {order.toppingsToAdd ? <Text style={[styles.toppings, {color: themeMode === 'dark' ? Colors.white['100'] :  Colors.grey['600']}]}>Add: {toppingsNames}</Text>: null}
            <View style={styles.priceBox}>
                <View style={styles.amountWrapper}>
                    <Text style={styles.currency}>$</Text> 
                    <Text style={[styles.amount,{color: themeMode === 'dark' ? Colors.gold['400'] :  Colors.grey['700']}]}>{order.type.price.toFixed(2)}</Text>
                </View>
                <View style={styles.quantityCounter}>
                    <FeatherIcons name="minus" size={20} color={themeMode === 'dark' ? Colors.white['100'] : Colors.grey['700']} onPress={()=> changeQuantity(-1)}/>
                    <Text style={[styles.count, {color:  themeMode === 'dark' ? Colors.gold['400'] : Colors.grey['700']}]}>{order.quantity}</Text>
                    <FeatherIcons name="plus" size={20}  color={themeMode === 'dark' ? Colors.white['100'] : Colors.grey['700']} onPress={()=> changeQuantity(1)}/>
                </View>
            </View>
        </View>
    </View>
}

export default OrderItemCard;

const styles = StyleSheet.create({
    container:{
        marginLeft: 40,
        borderWidth: 1,
        alignSelf:'flex-end',
        borderColor: Colors.grey['400'],
        borderRadius: 20,
        marginBottom: Spacing.medium,
        padding: Spacing.small,
        flexDirection:'row',
        alignItems:'center',
        minHeight: 120,
    },
    imageBox:{
        width: 100, 
        aspectRatio: 1,
        position:'absolute',
        left: -40,
    },
    detailBox:{
      marginLeft: 70,
      flex: 1,
    },
    image:{
    flex: 1
    },
    name:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize[16],
    },
    toppings:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize[14],
    },
    priceBox:{
     flexDirection:'row',
     justifyContent:'space-between',
     marginTop: Spacing.small,
     alignItems:'center'
    },
    amount:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize['20'],
    },
    currency:{
        color: Colors.gold['400'],
        fontFamily: FontFamilies.Lato.Bold,
    },
    amountWrapper:{flexDirection:'row', gap: Spacing.xs, alignItems:'center', marginVertical: Spacing.medium,},
    quantityCounter:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        columnGap: Spacing.small,
        borderRadius: 20,
        paddingHorizontal: Spacing.medium,
        borderColor: Colors.grey['400'],
        height: 45
    },
    count:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize['18'],
    },
})