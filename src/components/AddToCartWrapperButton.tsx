import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import Spacing from '../theme/spacing';
import Colors from '../theme/colors';
import Shadows from '../theme/shadows';
import { FontFamilies, FontSize } from '../theme/fonts';

type Props = {
    onAddToCart: (count: number)=> void;
}
const AddToCartWrapperButton = ({onAddToCart}:Props)=>{
    const [currentCount, setCurrentCount] = useState(1);

    return (
        <View style={styles.container}>
            <View style={styles.counter}>
            <FeatherIcons name="minus" size={26} color={Colors.grey['700']} onPress={()=> setCurrentCount(currentCount-1)}
            disabled={currentCount === 1}
            />
              <Text style={styles.count}>{currentCount}</Text>
              <FeatherIcons name="plus" size={26} color={Colors.grey['700']} onPress={()=> setCurrentCount(currentCount+1)}/>
            </View>
            <TouchableOpacity style={styles.addToCartBtn} onPress={()=> onAddToCart(currentCount)}>
              <FontistoIcons name="shopping-bag" size={26} color={Colors.gold['400']}/>
              <Text style={styles.addToCartText}>Add to cart</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddToCartWrapperButton;

const styles =StyleSheet.create({
    container:{
        backgroundColor:Colors.white['100'],
        position:'absolute',
        bottom: 10,
        alignSelf:'center',
        padding:Spacing.small,
        flexDirection:'row',
        alignItems:'center',
        width: '90%',
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.grey['200'],
        borderRadius: 25,
        ...Shadows.small
    },
    counter:{
        flexDirection:'row',
        alignItems:'center',
        flex: 1,
        justifyContent:'space-around'
    },
    count:{
      fontFamily: FontFamilies.Lato.Bold,
      fontSize: FontSize['16'],
      color: Colors.grey['700']
    },
    addToCartBtn:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Colors.grey['700'],
        paddingHorizontal: Spacing.xl,
        paddingVertical: Spacing.large,
        columnGap:Spacing.small,
        borderRadius: 30,
    },
    addToCartText:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize[18],
        color: Colors.gold['400'],
    }
})