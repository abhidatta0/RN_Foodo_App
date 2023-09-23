import {View,TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Colors from '../theme/colors';
import Spacing from '../theme/spacing';
import { FoodSelection } from '../types/FoodSelection';
import { FontFamilies, FontSize } from '../theme/fonts';
import useFood from '../hooks/useFood';
import { BottomNavParamList } from '../types/Navigation';
import { selectThemeMode } from '../store/themeSlice';

type Props = {
    food: FoodSelection;
}
const FoodCard = ({food}: Props)=>{
    const themeMode = useSelector(selectThemeMode);

    const {navigate} = useNavigation<NavigationProp<BottomNavParamList>>();
    const goToDetails = ()=>{
        navigate('FoodDetail', {
            itemId: food.id
        });
    }
    const { getLowestPrice} = useFood(food);

  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: themeMode === 'dark' ? Colors.grey['700'] : Colors.white['100']}]} onPress={goToDetails}>
        <View style={styles.imgContainer}>
           <Image source={{uri: food.image}} style={styles.img}/>
        </View>
        <View style={styles.content}>
        <View style={styles.foodNameWrapper}>
            <Text style={[styles.foodName, {color: themeMode === 'dark' ? Colors.gold['400']: Colors.grey['700']}]} numberOfLines={2}>{food.name}</Text>
            {food.subName ? <Text style={[styles.subName,{color: themeMode === 'dark' ? Colors.white['100']: Colors.grey['700']}]}>{food.subName}</Text> : null}
        </View>
        <View style={styles.amountAndFavWrapper}>
            <View style={styles.amountWrapper}>
                <Text style={styles.currency}>$</Text> 
                <Text style={[styles.amount, {color: themeMode === 'dark' ? Colors.gold['400']: Colors.grey['700']}]}>{getLowestPrice().toFixed(2)}</Text>
            </View>
        </View>
        </View>
    </TouchableOpacity>
  )
}

export default FoodCard;

const styles = StyleSheet.create({
    container:{
        padding: Spacing.small,
        marginVertical: Spacing.large,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.grey['200'],
        height: 180
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
    },
    currency:{
        color: Colors.gold['400'],
        
    },
    amountWrapper:{flexDirection:'row', gap: Spacing.xs, alignItems:'center'},
    amountAndFavWrapper:{
       flexDirection:'row',
       justifyContent:'space-between'
    },
    foodNameWrapper:{
        height: '70%',
    },
    foodName:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize[14],
    },
    subName:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize[14],
        marginVertical:Spacing.xs,
    },
})