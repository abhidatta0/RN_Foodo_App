import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FoodDetail from '../pages/FoodDetail';
import AllMenu from '../pages/AllMenu';
import Icon from '../components/Icon';
import Colors from '../theme/colors';

const TabArr = [
    {route: 'All_Menu', label:"All Menu", type: Ionicons, activeIcon:'grid', inactiveIcon : 'grid-outline', component: AllMenu},
    {route: 'Shop', label: 'Shop', type: MaterialCommunityIcons, activeIcon:'shopping', inactiveIcon : 'cart-outline', component: FoodDetail}
]

type TabButtonProps = BottomTabBarButtonProps & {item: typeof TabArr[0]};

const TabButton = ({item, onPress, ...rest}:TabButtonProps)=>{
     const isFocused = rest.accessibilityState?.selected;
    return (
     <TouchableOpacity style={styles.bottomTabContainer} onPress={onPress} activeOpacity={1}>
       <Icon type={item.type} name={item.activeIcon} color={isFocused ? Colors.gold['400']: Colors.grey['400']}/>
       <Text style={[ styles.iconLabel ,isFocused ? {color: Colors.grey['400']}: null]}>{item.label}</Text>
     </TouchableOpacity>
    )
}

const BottomTab = createBottomTabNavigator();

const Navigation = ()=>{
   return (
    <NavigationContainer>
       <BottomTab.Navigator
       screenOptions={{headerShown: false, tabBarStyle:{
         height: 70,
         position:'absolute',
         bottom: 16,
         right: 16,
         left: 16,
         borderRadius: 16,
         backgroundColor: Colors.grey['700']
       }}}
       >
         {
            TabArr.map((item)=> <BottomTab.Screen key={item.label} name={item.route} component={item.component} 
            options={{tabBarLabel: item.label, 
               tabBarLabelStyle: {paddingBottom: 6},      
               tabBarIcon: ({color, focused})=> 
            <Icon type={item.type} name={focused ? item.activeIcon : item.inactiveIcon} color={color} />,
            tabBarButton: (props)=> <TabButton {...props} item={item}/>
            }}
            />)
         }
       </BottomTab.Navigator>
    </NavigationContainer>
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