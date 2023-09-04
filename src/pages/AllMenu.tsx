import {View, Text, Button, Image} from 'react-native';
import AllMenuData from '../data/AllMenuData';

const AllMenu = ()=>{
   return (
    <View>
        <Text>Fast Food</Text>
        <Text>Fast Delivery</Text>
        {
            Object.keys(AllMenuData).map((m)=> <Button title={m} key={m}/>)
        }
        <Image width={100} height={150} source={{uri: AllMenuData['pizzas'][0].image}} resizeMode='contain'/>
    </View>
   )
}

export default AllMenu;