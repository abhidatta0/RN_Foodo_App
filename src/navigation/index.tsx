import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {Ionicons} from "@react-native-vector-icons/ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialDesignIcons} from "@react-native-vector-icons/material-design-icons";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import FoodDetail from '../pages/FoodDetail';
import AllMenu from '../pages/AllMenu';
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
   type:  typeof  MaterialDesignIcons,
   activeIcon: React.ComponentProps<typeof MaterialDesignIcons>["name"],
   component?:any,
}
const TabArr:TabType[] = [
    {route: 'AllMenu', label:"All Menu", type: MaterialDesignIcons, activeIcon:'silverware', component: AllMenu},
    {route: 'FoodDetail', label: '', type: MaterialDesignIcons, activeIcon:'shopping', component: FoodDetail},
    {route: 'Shop', label: 'Shop', type: MaterialDesignIcons, activeIcon:'shopping', component: MyOrders},
    {route: 'OrderSuccess', label: '', type: MaterialDesignIcons, activeIcon:'shopping', component: OrderSuccess},
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
        if(themeMode === 'dark') return Colors.grey['700']
        return Colors.white['100'];
     }
    return (
     <TouchableOpacity style={styles.bottomTabContainer} onPress={onPress} activeOpacity={1}>
      <item.type name={item.activeIcon} size={24} style={{color:getIconColor()}} />
       <Text style={[{color: getIconColor()}]}>{item.label}</Text>
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
         minHeight:70,
         paddingBottom: 0,
         bottom: 16,
         position:'absolute',
         right: 16,
         left: 16,
         borderRadius: 16,
         backgroundColor: themeMode === 'light' ? Colors.grey['700']: Colors.white['100'] ,
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
            headerTitle: route.name === 'Shop' ? 'Cart' : "",
            headerTintColor:themeMode === 'dark' ?   Colors.gold['400'] : Colors.grey['700'] ,
            headerStyle: {
              backgroundColor: themeMode === 'dark' ?   Colors.grey['700'] : Colors.white['100'] 
            },
            tabBarLabelStyle: {
               fontSize: 20,
               fontWeight: 300,
               marginTop: 3,
              color: Colors.grey['500']
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
})