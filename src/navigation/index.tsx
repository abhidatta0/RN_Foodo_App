import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import FoodDetail from '../pages/FoodDetail';
import AllMenu from '../pages/AllMenu';
import Icon from '../components/Icon';
import Colors from '../theme/colors';
import MyOrders from '../pages/MyOrders';
import { BottomNavParamList } from '../types/Navigation';
import React from 'react';
import Spacing from '../theme/spacing';
import OrderSuccess from '../pages/OrderSuccess';

type TabType = {
   route: keyof BottomNavParamList,
   label: string,
   type: typeof Ionicons,
   activeIcon: string,
   inactiveIcon: string,
   component?:any,
}
const TabArr:TabType[] = [
    {route: 'AllMenu', label:"All Menu", type: Ionicons, activeIcon:'grid', inactiveIcon : 'grid-outline', component: AllMenu},
    {route: 'FoodDetail', label: '', type: MaterialCommunityIcons, activeIcon:'shopping', inactiveIcon : 'cart-outline', component: FoodDetail},
    {route: 'Shop', label: 'Shop', type: MaterialCommunityIcons, activeIcon:'shopping', inactiveIcon : 'cart-outline', component: MyOrders},
    {route: 'OrderSuccess', label: '', type: MaterialCommunityIcons, activeIcon:'shopping', inactiveIcon : 'cart-outline', component: OrderSuccess},
]

type TabButtonProps = BottomTabBarButtonProps & {item: typeof TabArr[0]};

const TabButton = ({item, onPress, ...rest}:TabButtonProps)=>{
     const isFocused = rest.accessibilityState?.selected;
     if(['FoodDetail','OrderSuccess'].includes(item.route)){
       return null;
     }
    return (
     <TouchableOpacity style={styles.bottomTabContainer} onPress={onPress} activeOpacity={1}>
       <Icon type={item.type} name={item.activeIcon} color={isFocused ? Colors.gold['400']: Colors.grey['400']}/>
       <Text style={[ styles.iconLabel ,isFocused ? {color: Colors.grey['400']}: null]}>{item.label}</Text>
     </TouchableOpacity>
    )
}

const BottomTab = createBottomTabNavigator<BottomNavParamList>();

const Navigation = ()=>{
   return (
      <SafeAreaProvider>
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
       <BottomTab.Navigator
       screenOptions={({route})=> ({headerShown: false, unmountOnBlur: true,tabBarStyle:{
         height: 70,
         position:'absolute',
         bottom: 16,
         right: 16,
         left: 16,
         borderRadius: 16,
         backgroundColor: Colors.grey['700'],
         display: route.name === 'AllMenu' ? 'flex' : 'none',
       }})}
       sceneContainerStyle={{backgroundColor: Colors.white['100']}}
       >
         {
            TabArr.map((item)=> <BottomTab.Screen key={item.label} name={item.route} component={item.component} 
            options={({route, navigation})=> ({tabBarLabel: item.label, 
               tabBarLabelStyle: {paddingBottom: 6},      
               tabBarIcon: ({color, focused})=> 
            <Icon type={item.type} name={focused ? item.activeIcon : item.inactiveIcon} color={color} />,
            tabBarButton: (props)=> <TabButton {...props} item={item}/>,
            headerShown: ['FoodDetail','Shop'].includes(route.name),
            headerTitleAlign:'center',
            headerTitle: route.name === 'Shop' ? 'My Order' : "",
            headerLeft: () =>   ['FoodDetail','Shop'].includes(route.name) ? <Ionicons  name="arrow-back" size={26} color={Colors.grey['700']} onPress={navigation.goBack} style={{paddingLeft: Spacing.medium}}/>:null,
            })}
            />)
         }
       </BottomTab.Navigator>
       </SafeAreaView>
    </NavigationContainer>
    </SafeAreaProvider>
   )
}

export default Navigation;

const styles = StyleSheet.create({
   bottomTabContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
   },
   iconLabel:{
      marginTop: 3,
      fontSize: 10,
      color: Colors.grey['500']
   }
})