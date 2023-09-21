import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {useRef, useEffect} from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackScreenProps} from '@react-navigation/stack';
import Colors from '../theme/colors';
import Spacing from '../theme/spacing';
import { FontFamilies, FontSize } from '../theme/fonts';
import { BottomNavParamList } from '../types/Navigation';

type Props = StackScreenProps<BottomNavParamList,'OrderSuccess'>

const MaterialCommunityIconsAnimated = Animated.createAnimatedComponent(MaterialCommunityIcons);
const OrderSuccess = ({navigation}:Props)=>{
    const iconAnimRef = useRef(new Animated.Value(5)).current;
    const goToHome = ()=>{
        navigation.navigate('AllMenu');
    }

    useEffect(()=>{ 
     Animated.spring(iconAnimRef, {
        toValue: 1,
        useNativeDriver: true,
        delay: 100
     }).start();
    },[]);
   return (
    <View style={styles.container}>
        <MaterialCommunityIconsAnimated name="check-bold"  size={70} color={Colors.gold['400']} style={{transform:[
            {scale: iconAnimRef},
        ]}} />
        <Text style={styles.orderSuccessText}>Order Placed Successfully</Text>
        <Text style={styles.deliveryTimeText}>Food will reach your home in 25 mins</Text>

        <TouchableOpacity style={styles.goToHomeBtn} onPress={goToHome}>
            <Text style={styles.goToHomeText}>Back to Home </Text>
            <EntypoIcons name="chevron-small-right"  size={30} color={Colors.white[100]}/>
        </TouchableOpacity>
    </View>
   )
}

export default OrderSuccess;

const styles  = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
      flex: 1,
      rowGap: Spacing.medium
    },
    goToHomeBtn:{
      backgroundColor: Colors.grey['700'],
      alignSelf:'center',
      flexDirection:'row',
      alignItems:'center',
      padding: Spacing.medium,
      borderRadius: 50,
      marginTop: Spacing.medium
    },
    goToHomeText:{
        color: Colors.white[100]
    },
    orderSuccessText:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize[24],
        color:Colors.grey['700'],
    },
    deliveryTimeText:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize[18],
        color:Colors.grey['700'],
        textAlign:'center'
    }
})