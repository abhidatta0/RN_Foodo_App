import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FoodDetail from '../pages/FoodDetail';
import AllMenu from '../pages/AllMenu';

const TabArr = [
    {route: 'All_Menu', label:"All Menu", type: Ionicons, activeIcon:'grid', inactiveIcon : 'grid-outline', component: AllMenu},
    {route: 'Shop', label: 'Shop', type: MaterialCommunityIcons, activeIcon:'cart', inactiveIcon : 'cart-outline', component: FoodDetail}
]

const BottomTab = createBottomTabNavigator();

const Navigation = ()=>{
   return (
    <NavigationContainer>
       <BottomTab.Navigator>
         {
            TabArr.map((item)=> <BottomTab.Screen key={item.label} name={item.route} component={item.component}/>)
         }
       </BottomTab.Navigator>
    </NavigationContainer>
   )
}

export default Navigation;

