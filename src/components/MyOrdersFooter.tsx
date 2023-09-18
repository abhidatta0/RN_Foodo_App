import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OctoIcons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Spacing from '../theme/spacing';
import Colors from '../theme/colors';
import { FontFamilies, FontSize } from '../theme/fonts';
import { BottomNavParamList } from '../types/Navigation';

const MyOrdersFooter = ()=>{
    const {navigate} = useNavigation<NavigationProp<BottomNavParamList>>();
    const goToOrderSuccess  = ()=>{
        navigate('OrderSuccess')
    }
    
  return (
    <View>
        <View style={styles.priceSummaryContainer}>
            <View style={styles.priceSummaryRow}>
                <Text>SubTotal</Text>
                <Text>$18.00</Text>
            </View>
            <View style={styles.priceSummaryRow}>
                <Text>Delivery Fee</Text>
                <Text>$2.00</Text>
            </View>
            <View style={styles.separator}/>
            <View style={styles.priceSummaryRow}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalText}>$20.00</Text>
            </View>
        </View>

        <View style={styles.priceSummaryContainer}>
            {/* Delivery address info */}
            <View style={styles.infoRow}>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoHeader}>Your Delivery Address</Text>
                    <View style={styles.infoTextContainer}>
                        <OctoIcons name="location" size={20}/>
                        <Text style={styles.infoText} numberOfLines={1} ellipsizeMode='tail'>HSR Layout Sector 2, Bangalore</Text>
                    </View>
                </View>
                <EntypoIcons name="chevron-small-right"  size={30}/>
            </View>

            <View style={styles.separator}/>

            {/* Payment method info */}
            <View style={styles.infoRow}>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoHeader}>Payment Method</Text>
                    <View style={styles.infoTextContainer}>
                        <SimpleLineIcons name="credit-card" size={20}/>
                    <Text style={styles.infoText} numberOfLines={1} ellipsizeMode='tail'>Cash</Text>
                    </View>
                </View>
                <EntypoIcons name="chevron-small-right" size={30} />
            </View>
        </View>

        <TouchableOpacity style={styles.addToCartBtn} activeOpacity={0.8} onPress={goToOrderSuccess}>
            <Text style={styles.addToCartText}>Place Order</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MyOrdersFooter;

const styles = StyleSheet.create({
    priceSummaryContainer: {
      borderWidth: 1,
      borderColor: Colors.grey['400'],
      padding: Spacing.medium,
      borderRadius: 10,
      marginBottom: Spacing.medium
    },
    priceSummaryRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: Spacing.small,
    },
    separator:{
        borderWidth: 0.5,
        borderColor: Colors.grey['300'],
        marginBottom: Spacing.small,
    },
    totalText:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize:FontSize['20'],
        color: Colors.grey['700']
    },
    infoRow:{
        flexDirection: 'row',
        alignItems:'center',
    },
    infoContainer:{
     flex: 1,
    },
    infoHeader:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize:FontSize['14'],
        color: Colors.grey['600']
    },
    infoTextContainer:{
        flexDirection:'row',
        columnGap: Spacing.small,
        marginVertical: Spacing.small,
        alignItems:'center',
    },
    infoText:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize:FontSize['18'],
        color: Colors.grey['700'],
        flex: 1,
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