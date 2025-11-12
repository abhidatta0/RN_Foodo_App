import {  Text, View , StyleSheet, Image,TouchableOpacity} from 'react-native'
import Colors from '../theme/colors';
import Spacing from '../theme/spacing';
import { FontFamilies, FontSize } from '../theme/fonts';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BottomNavParamList } from '../types/Navigation';
const EmptyOrderScreen = () => {
   const {navigate} = useNavigation<NavigationProp<BottomNavParamList>>();
    
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/images/emptycart.webp')}/>
      <Text style={styles.title}>Hungry!</Text>
      <Text style={styles.subTitle}>You don't have any foods in cart at this time!</Text>
       <TouchableOpacity onPress={()=> navigate('AllMenu')}>
           <View style={styles.browserBtn}>
            <Text style={styles.browserText}>Browse</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}
export default EmptyOrderScreen;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: Spacing.large
    },
    title:{
        fontSize: 30,
        fontWeight:'bold'
    },
    subTitle:{
        fontSize: 16,
        fontWeight:'100'
    },
    img:{
        width: 200,
        height: 200
    },
    browserBtn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderColor: Colors.gold['400'],
        borderWidth:2,
        marginVertical: 20,
        paddingHorizontal: Spacing.xl,
        paddingVertical: Spacing.large,
        columnGap:Spacing.small,
        borderRadius: 20,
    },
    browserText:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize[18],
        color: Colors.gold['400'],
    }
})

