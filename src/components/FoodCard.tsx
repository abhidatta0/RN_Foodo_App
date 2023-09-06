import {View, Text, StyleSheet, Image} from 'react-native';
import {useMemo} from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../theme/colors';
import Spacing from '../theme/spacing';
import { FoodSelection } from '../types/FoodSelection';
import { FontFamilies, FontSize } from '../theme/fonts';

type Props = {
    food: FoodSelection;
}
const FoodCard = ({food}: Props)=>{
    const isPizzaType = 'pizzaTypes' in food ;
    const findLowest = (arr: Array<number>)=>{
        return arr.reduce((acc, curr)=> {
            if(curr < acc){
                acc = curr;
            }
            return acc;
          }, Number.MAX_SAFE_INTEGER);
    }
    const getLowestPrice = ()=>{
      if(isPizzaType){
        return findLowest(food.pizzaTypes.map(pz => pz.price));
      }
      return findLowest(food.variations.map((v)=> v.price));
    }

    const topping = useMemo(()=>{
        if(isPizzaType){
            return  food.toppings?.[0].name;
        }
        return null;
    },[])


  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
           <Image source={{uri: food.image}} style={styles.img}/>
        </View>
        <View style={styles.content}>
        <Text style={styles.foodName}>{food.name}</Text>
        {topping ? <Text style={styles.topping}>with {topping}</Text> : null}
        <View style={styles.amountAndFavWrapper}>
            <View style={styles.amountWrapper}>
                <Text style={styles.currency}>$</Text> 
                <Text style={styles.amount}>{getLowestPrice()}</Text>
            </View>
            <MaterialCommunityIcon name="cards-heart" size={24} color={Colors.grey['700']}/>
        </View>
        </View>
    </View>
  )
}

export default FoodCard;

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors['grey']['100'],
        padding: Spacing.small,
        marginVertical: Spacing.large,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.grey['200'],
        height: 150
    },
    content:{
     marginTop: 60
    },
    img:{
        width: '100%',
        height: 90,
        resizeMode:'contain'
    },
    imgContainer:{
        position:'absolute',
        top: -30,
        left: 10,
        width:'100%',
        marginBottom: Spacing.small,
        alignItems:'center',
        justifyContent:'flex-start',
        borderRadius: 10,
    },
    amount:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize[20],
        color: Colors.grey['700']
    },
    currency:{
        color: Colors.gold['400'],
        
    },
    amountWrapper:{flexDirection:'row', gap: Spacing.xs, alignItems:'center'},
    amountAndFavWrapper:{
       flexDirection:'row',
       justifyContent:'space-between'
    },
    foodName:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize[14],
        color:Colors.grey['700'],
    },
    topping:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize[14],
        color: Colors.grey[600],
        marginVertical:Spacing.xs,
    },
})