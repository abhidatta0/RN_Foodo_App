import {NavigationContainer} from '@react-navigation/native';
import FoodDetail from '../pages/FoodDetail';
import AllMenu from '../pages/AllMenu';

const Navigation = ()=>{
   return (
    <NavigationContainer>
       <FoodDetail />
       {/* <AllMenu /> */}
    </NavigationContainer>
   )
}

export default Navigation;

