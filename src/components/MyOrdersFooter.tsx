import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OctoIcons from "@react-native-vector-icons/octicons";
import FeatherIcons from "@react-native-vector-icons/feather";
import EntypoIcons from "@react-native-vector-icons/entypo";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import Spacing from '../theme/spacing';
import Colors from '../theme/colors';
import { FontFamilies, FontSize } from '../theme/fonts';
import { BottomNavParamList } from '../types/Navigation';
import { clearOrders, selectDeliveryFee, selectSubTotal } from '../store/orderSlice';
import { selectThemeMode } from '../store/themeSlice';

const MyOrdersFooter = ()=>{
    const themeMode = useSelector(selectThemeMode);
    const subTotal = useSelector(selectSubTotal);
    const deliveryFee = useSelector(selectDeliveryFee);

    const dispatch = useDispatch();
    const {navigate} = useNavigation<NavigationProp<BottomNavParamList>>();
    const goToOrderSuccess  = ()=>{
        dispatch(clearOrders());
        navigate('OrderSuccess');
    }
    
    const rowKeyStyle = themeMode === 'dark' ? {color: Colors.white['100'] }: {color: Colors.grey['600']};
    const rowValueStyle = themeMode === 'dark' ? {color: Colors.white['100'] }: {color: Colors.grey['600']};
    const proceedIconColor = themeMode === 'dark' ? Colors.white['100'] :  Colors.grey['600'];

  return (
    <View>
        <View style={styles.priceSummaryContainer}>
            <View style={styles.priceSummaryRow}>
                <Text style={rowKeyStyle}>SubTotal</Text>
                <Text style={rowValueStyle}>$ {subTotal.toFixed(2)}</Text>
            </View>
            <View style={styles.priceSummaryRow}>
                <Text style={rowKeyStyle}>Delivery Fee</Text>
                <Text style={rowValueStyle}>$ {deliveryFee.toFixed(2)}</Text>
            </View>
            <View style={[styles.separator, {borderColor : themeMode === 'dark' ? Colors.white['100'] : Colors.grey['300']}]}/>
            <View style={styles.priceSummaryRow}>
                <Text style={[styles.totalText, {color: themeMode === 'dark' ? Colors.gold['400']: Colors.grey['700'] }]}>Total</Text>
                <Text style={[styles.totalText, {color: themeMode === 'dark' ? Colors.gold['400']: Colors.grey['700'] }]}>$ {(subTotal+deliveryFee).toFixed(2)}</Text>
            </View>
        </View>

        <View style={styles.priceSummaryContainer}>
            {/* Delivery address info */}
            <View style={styles.infoRow}>
                <View style={styles.infoContainer}>
                    <Text style={[styles.infoHeader, rowKeyStyle]}>Your Delivery Address</Text>
                    <View style={styles.infoTextContainer}>
                        <OctoIcons name="location" size={20} color={themeMode === 'dark' ? Colors.gold['400'] : Colors.grey['700']}/>
                        <Text style={[styles.infoText, {color : themeMode === 'dark' ? Colors.white['100'] : Colors.grey['700']}]} numberOfLines={1} ellipsizeMode='tail'>HSR Layout Sector 2, Bangalore</Text>
                    </View>
                </View>
                <EntypoIcons name="chevron-small-right"  size={30}  color={proceedIconColor}/>
            </View>

            <View style={[styles.separator, {borderColor : themeMode === 'dark' ? Colors.white['100'] : Colors.grey['300']}]}/>

            {/* Payment method info */}
            <View style={styles.infoRow}>
                <View style={styles.infoContainer}>
                    <Text style={[styles.infoHeader,rowKeyStyle]}>Payment Method</Text>
                    <View style={styles.infoTextContainer}>
                        <FeatherIcons name="credit-card" size={20} color={themeMode === 'dark' ? Colors.gold['400'] : Colors.grey['700']}/>
                    <Text style={[styles.infoText, {color : themeMode === 'dark' ? Colors.white['100'] : Colors.grey['700']}]} numberOfLines={1} ellipsizeMode='tail'>Cash</Text>
                    </View>
                </View>
                <EntypoIcons name="chevron-small-right" size={30} color={proceedIconColor}/>
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
        marginBottom: Spacing.small,
    },
    totalText:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize:FontSize['20'],
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
        borderWidth: 1,
        borderColor: Colors.white['100']
    },
    addToCartText:{
        fontFamily: FontFamilies.Lato.Regular,
        fontSize: FontSize[18],
        color: Colors.gold['400'],
    }
})