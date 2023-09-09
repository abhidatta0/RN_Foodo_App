import {View, Text, StyleSheet,Image, FlatList} from 'react-native';
import {useState} from 'react';
import AllMenuData from '../data/AllMenuData';
import Spacing from '../theme/spacing';
import { FontFamilies, FontSize } from '../theme/fonts';
import Colors from '../theme/colors';
import ReviewRating from '../components/ReviewRating';
import useFood from '../hooks/useFood';
import Badge from '../components/Badge';

const FoodDetail = ()=>{
    const selectedFood  = AllMenuData["pizza"].items[0];

    const { getLowestPrice , getDiameterAndPortion, getAvailableSizes} = useFood(selectedFood);

    const diameterAndPortion = getDiameterAndPortion();

    const availableSizes = getAvailableSizes();

    const [currentSize, setCurrentSize] = useState(availableSizes ? availableSizes[0]: null);
  return (
   <View style={styles.container}>
    <Text style={styles.foodName}>{selectedFood.name}</Text>
    <Text style={styles.subName}>{selectedFood.subName}</Text>
    <View style={styles.reviewWrapper}>
    <ReviewRating rating={selectedFood.ratingOutOf5}/>
    <Text style={styles.ratingText}>({selectedFood.ratingOutOf5})</Text>
    </View>
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
    {availableSizes ? <View style={styles.sizeSelection}>
        <Text style={styles.sizeHeading}>Size</Text>
        <FlatList
         horizontal
         data={availableSizes}
         renderItem={({item})=> <Badge text={item} onPress={()=> setCurrentSize(item)} 
         isSelected={currentSize === item}
         />}
         contentContainerStyle={styles.sizeBadgeContainerStyle}
        />
    </View>:null}
   </View>
  )
}

export default FoodDetail;

const styles = StyleSheet.create({
    container:{
       padding: Spacing.medium,
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
    reviewWrapper:{
       flexDirection:'row'
    },
    ratingText:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize[14],
        color:Colors.grey['700'],
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
    },
    sizeSelection:{
        marginVertical: Spacing.small
    },
    sizeHeading:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize['16'],
        color: Colors.grey[600],
    },
    sizeBadgeContainerStyle:{
      columnGap: 10,
      marginVertical: Spacing.small
    }
})