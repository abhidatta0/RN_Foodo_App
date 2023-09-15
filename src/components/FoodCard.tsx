import {View,TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../theme/colors';
import Spacing from '../theme/spacing';
import { FoodSelection } from '../types/FoodSelection';
import { FontFamilies, FontSize } from '../theme/fonts';
import useFood from '../hooks/useFood';
import { BottomNavParamList } from '../types/Navigation';

type Props = {
    food: FoodSelection;
}
const FoodCard = ({food}: Props)=>{
   
    const {navigate} = useNavigation<NavigationProp<BottomNavParamList>>();
    const goToDetails = ()=>{
        navigate('FoodDetail', {
            itemId: food.id
        });
    }
    const { getLowestPrice} = useFood(food);

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
        <View style={styles.imgContainer}>
           <Image source={{uri: food.image}} style={styles.img}/>
        </View>
        <View style={styles.content}>
        <Text style={styles.foodName}>{food.name}</Text>
        {food.subName ? <Text style={styles.subName}>{food.subName}</Text> : null}
        <View style={styles.amountAndFavWrapper}>
            <View style={styles.amountWrapper}>
                <Text style={styles.currency}>$</Text> 
                <Text style={styles.amount}>{getLowestPrice()}</Text>
            </View>
            <MaterialCommunityIcon name="cards-heart" size={24} color={Colors.grey['700']}/>
        </View>
        </View>
    </TouchableOpacity>
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
        height: 170
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
    subName:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize[14],
        color: Colors.grey[600],
        marginVertical:Spacing.xs,
    },
})