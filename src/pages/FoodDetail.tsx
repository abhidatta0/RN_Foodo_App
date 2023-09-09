import {View, Text, StyleSheet,Image, FlatList, ScrollView} from 'react-native';
import {useState} from 'react';
import AllMenuData from '../data/AllMenuData';
import Spacing from '../theme/spacing';
import { FontFamilies, FontSize } from '../theme/fonts';
import Colors from '../theme/colors';
import ReviewRating from '../components/ReviewRating';
import useFood from '../hooks/useFood';
import Badge from '../components/Badge';
import AddToCartWrapperButton from '../components/AddToCartWrapperButton';

const FoodDetail = ()=>{
    const selectedFood  = AllMenuData["burger"].items[0];

    const { getDiameterAndPortion, getAvailableSizes, getVariationsNames, getToppings} = useFood(selectedFood);

    const diameterAndPortion = getDiameterAndPortion();
    const variationsNames = getVariationsNames();
    const toppings = getToppings();

    const availableSizes = getAvailableSizes();

    const [currentSize, setCurrentSize] = useState(availableSizes ? availableSizes[0]: null);
    const [currentVariation, setCurrentVariation] = useState(variationsNames ? variationsNames[0]: null);
    const [currentTopping, setCurrentTopping] = useState(toppings ? toppings[0]: null);

    console.log({currentTopping});
    const getPrice = ()=>{
        if(selectedFood.category_type === 'PIZZA') return selectedFood.pizzaTypes.find((pt)=> pt.size === currentSize)?.price;
        return selectedFood.variations.find((v)=> v.name === currentVariation)?.price;
    }
  return (
    <View>
   <ScrollView style={styles.container}>
    <View style={styles.upperContent}>
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
                    <Text style={styles.amount}>{getPrice()}</Text>
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
    {variationsNames ? <View style={styles.sizeSelection}>
        <Text style={styles.sizeHeading}>Variations</Text>
        <FlatList
         horizontal
         data={variationsNames}
         renderItem={({item})=> <Badge text={item} onPress={()=> setCurrentVariation(item)} 
         isSelected={currentVariation === item}
         />}
         contentContainerStyle={styles.sizeBadgeContainerStyle}
        />
    </View>:null}
    {toppings ? <View style={styles.sizeSelection}>
        <Text style={styles.sizeHeading}>Topping</Text>
        <FlatList
         horizontal
         data={toppings}
         renderItem={({item})=> <Badge text={item.name} onPress={()=> setCurrentTopping(item)} 
         isSelected={currentTopping?.name === item.name}
         />}
         contentContainerStyle={styles.sizeBadgeContainerStyle}
        />
    </View>:null}
    <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>{selectedFood.description} {selectedFood.description}</Text>
    </View>
    <View style={styles.emptySpace} />
   </ScrollView>
    <AddToCartWrapperButton onAddToCart={(count)=> console.log({count})}/>
    </View>
  )
}

export default FoodDetail;

const styles = StyleSheet.create({
    container:{
       padding: Spacing.medium,
       paddingRight: 0,
    },
    upperContent:{
      marginVertical: Spacing.medium,
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
        top: '30%',
        right: -20,
        width:'60%',
        height:'60%',
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
    },
    descriptionBox:{
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey['200'],
        paddingVertical:Spacing.medium,
    },
    descriptionText:{
      fontFamily: FontFamilies.Lato.Regular,
      color: Colors.grey['600'],
      fontSize: FontSize[18],
    },
    emptySpace:{
        height: 110,
    }
})