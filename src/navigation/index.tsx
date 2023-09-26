import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import FoodDetail from '../pages/FoodDetail';
import AllMenu from '../pages/AllMenu';
import Icon from '../components/Icon';
import Colors from '../theme/colors';
import MyOrders from '../pages/MyOrders';
import { BottomNavParamList } from '../types/Navigation';
import React from 'react';
import Spacing from '../theme/spacing';
import OrderSuccess from '../pages/OrderSuccess';
import { selectThemeMode } from '../store/themeSlice';

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
   const themeMode = useSelector(selectThemeMode);

     const isFocused = rest.accessibilityState?.selected;
     if(['FoodDetail','OrderSuccess'].includes(item.route)){
       return null;
     }

     const getIconColor = ()=>{
        if(isFocused) return Colors.gold['400'];
        if(themeMode === 'dark') return Colors.white['100']
        return Colors.grey['400'];
     }
    return (
     <TouchableOpacity style={styles.bottomTabContainer} onPress={onPress} activeOpacity={1}>
       <Icon type={item.type} name={item.activeIcon} color={getIconColor()}/>
       <Text style={[ styles.iconLabel ,isFocused ? {color: Colors.gold['400']}: {color: themeMode === 'dark' ? Colors.white['100'] : Colors.grey['400']}]}>{item.label}</Text>
     </TouchableOpacity>
    )
}

const BottomTab = createBottomTabNavigator<BottomNavParamList>();

const Navigation = ()=>{
   const themeMode = useSelector(selectThemeMode);
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
         backgroundColor: Colors.blue['600'],
         display: route.name === 'AllMenu' ? 'flex' : 'none',
       }})}
       sceneContainerStyle={{backgroundColor: themeMode === 'light' ? Colors.white['100'] : Colors.grey['700']}}
       >
         {
            TabArr.map((item)=> <BottomTab.Screen key={item.label} name={item.route} component={item.component} 
            options={({route, navigation})=> ({
            tabBarButton: (props)=> <TabButton {...props} item={item}/>,
            headerShown: ['FoodDetail','Shop'].includes(route.name),
            headerTitleAlign:'center',
            headerTitle: route.name === 'Shop' ? 'My Order' : "",
            headerStyle: {
              backgroundColor: themeMode === 'dark' ?   Colors.grey['700'] : Colors.white['100'] 
            },
            headerLeft: () =>   ['FoodDetail','Shop'].includes(route.name) ? <Ionicons  name="arrow-back" size={26} color={  themeMode === 'dark' ? Colors.white['100']: Colors.grey['700']  } onPress={navigation.goBack} style={{paddingLeft: Spacing.medium}}/>:null,
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