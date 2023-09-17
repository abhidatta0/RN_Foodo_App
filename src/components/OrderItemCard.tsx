import {Text, View, StyleSheet, Image} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { OrderItem } from '../types/FoodSelection';
import Spacing from '../theme/spacing';
import { FontFamilies, FontSize } from '../theme/fonts';
import Colors from '../theme/colors';

type Props = {
    order: OrderItem,
}
const OrderItemCard = ({order}: Props)=>{
    const toppingsNames = order.toppingsToAdd ? order.toppingsToAdd.map((topping)=> topping.name).join(', ') : null;

  return  <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{uri: order.food.image}} />
        </View>
        <View style={styles.detailBox}>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>{order.food.name} {order.food.subName}</Text>
            {order.toppingsToAdd ? <Text style={styles.toppings}>Add: {toppingsNames}</Text>: null}
            <View style={styles.priceBox}>
                <View style={styles.amountWrapper}>
                    <Text style={styles.currency}>$</Text> 
                    <Text style={styles.amount}>{order.type.price}</Text>
                </View>
                <View style={styles.quantityCounter}>
                    <FeatherIcons name="minus" size={20} color={Colors.grey['700']} />
                    <Text style={styles.count}>{order.quantity}</Text>
                    <FeatherIcons name="plus" size={20} color={Colors.grey['700']} />
                </View>
            </View>
        </View>
    </View>
}

export default OrderItemCard;

const styles = StyleSheet.create({
    container:{
        marginLeft: 30,
        borderWidth: 1,
        alignSelf:'flex-end',
        borderColor: Colors.grey['400'],
        borderRadius: 20,
        marginBottom: Spacing.medium,
        padding: Spacing.small,
        flexDirection:'row',
        alignItems:'center',
        minHeight: 120
    },
    imageBox:{
        width: 100, 
        aspectRatio: 1,
        position:'absolute',
        left: -40,
    },
    detailBox:{
      marginLeft: 70,
    },
    image:{
    flex: 1
    },
    name:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize[16],
        color: Colors.grey['700']
    },
    toppings:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize[14],
        color: Colors.grey['600']
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
        color: Colors.grey['700'],
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
        color: Colors.grey['700']
    },
})