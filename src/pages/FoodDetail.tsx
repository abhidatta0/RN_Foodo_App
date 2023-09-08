import {View, Text, StyleSheet,Image} from 'react-native';
import AllMenuData from '../data/AllMenuData';
import Spacing from '../theme/spacing';
import { FontFamilies, FontSize } from '../theme/fonts';
import Colors from '../theme/colors';

const FoodDetail = ()=>{
    const selectedFood  = AllMenuData["pizza"].items[0];
    const isPizzaType = 'pizzaTypes' in selectedFood ;
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
        return findLowest(selectedFood.pizzaTypes.map(pz => pz.price));
      }
      return findLowest(selectedFood.variations.map((v)=> v.price));
    }

    const getDiameterAndPortion = ()=>{
        if(isPizzaType) return( {
         diameter:selectedFood.pizzaTypes[0].diameterInInches,
         portion:selectedFood.pizzaTypes[0].portion,
        })
        return null;
    }

    const diameterAndPortion = getDiameterAndPortion();
  return (
   <View style={styles.container}>
    <Text style={styles.foodName}>{selectedFood.name}</Text>
    <Text style={styles.subName}>{selectedFood.subName}</Text>
    <Text>Star ({selectedFood.ratingOutOf5})</Text>
    <View style={styles.imgContainer}>
           <Image source={{uri: selectedFood.image}} style={styles.img}/>
        </View>
    <View style={styles.amountWrapper}>
                <Text style={styles.currency}>$</Text> 
                <Text style={styles.amount}>{getLowestPrice()}</Text>
    </View>
    <View style={styles.caloriesInfo}>
        <Text style={styles.caloriesHeading}>Calories</Text>
        <Text style={styles.calories}>{selectedFood.calories} Cal</Text>
    </View>
    {diameterAndPortion ? <View style={styles.portionInfo}>
        <Text style={styles.portionHeading}>Diameter / Portion</Text>
        <Text style={styles.portion}>{diameterAndPortion.diameter}` / {diameterAndPortion.portion} Slices</Text>
    </View>: null}
   </View>
  )
}

export default FoodDetail;

const styles = StyleSheet.create({
    container:{
       padding: Spacing.medium,
       borderWidth: 1,
    },
    amount:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize[30],
        color: Colors.grey['700'],
    },
    currency:{
        color: Colors.gold['400'],
        fontFamily: FontFamilies.Lato.Bold,
    },
    amountWrapper:{flexDirection:'row', gap: Spacing.xs, alignItems:'flex-end', marginVertical: Spacing.medium,},
    foodName:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize[30],
        color:Colors.grey['700'],
    },
    subName:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize['16'],
        color: Colors.grey[600],
        marginVertical:Spacing.xs,
    },
    img:{
        width: '100%',
        height: '100%',
        resizeMode:'cover'
    },
    imgContainer:{
        position:'absolute',
        top: '40%',
        right: -10,
        width:'60%',
        height:'50%',
    },

    caloriesInfo:{
        marginVertical: Spacing.small
    },
    caloriesHeading:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize['16'],
        color: Colors.grey[600],
    },
    calories:{
        fontFamily: FontFamilies.Lato.Bold,
        color: Colors.grey[700],
        fontSize: FontSize['18']
    },
    portionInfo:{
        marginVertical: Spacing.small
    },
    portionHeading:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize['16'],
        color: Colors.grey[600],
    },
    portion:{
        fontFamily: FontFamilies.Lato.Bold,
        color: Colors.grey[700],
        fontSize: FontSize['18']
    }
})