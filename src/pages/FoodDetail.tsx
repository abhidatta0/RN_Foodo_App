import {View, Text, StyleSheet,Image} from 'react-native';
import AllMenuData from '../data/AllMenuData';
import Spacing from '../theme/spacing';

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
   <View>
    <Text>{selectedFood.name}</Text>
    <Text>{selectedFood.subName}</Text>
    <Text>Star ({selectedFood.ratingOutOf5})</Text>
    <View style={styles.imgContainer}>
           <Image source={{uri: selectedFood.image}} style={styles.img}/>
        </View>
    <View style={styles.amountWrapper}>
                <Text style={styles.currency}>$</Text> 
                <Text style={styles.amount}>{getLowestPrice()}</Text>
    </View>
    <View>
        <Text>Calories</Text>
        <Text>{selectedFood.calories}</Text>
    </View>
    {diameterAndPortion ? <View>
        <Text>Diameter / Portion</Text>
        <Text>{diameterAndPortion.diameter} / {diameterAndPortion.portion}</Text>
    </View>: null}
   </View>
  )
}

export default FoodDetail;

const styles = StyleSheet.create({
    amountWrapper:{

    },
    currency:{

    },
    amount:{

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
})