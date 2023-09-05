import {View, FlatList, StyleSheet} from 'react-native';
import AllMenuData from '../data/AllMenuData';
import FoodCard from '../components/FoodCard';
import Spacing from '../theme/spacing';
import FoodTypeSelectButton from '../components/FoodTypeSelectButton';

const AllMenu = ()=>{
    const pizza = AllMenuData['pizza'];
    const availableFoodTypes = Object.keys(AllMenuData);

   return (
    <View style={styles.container}>
        <FlatList
        horizontal
        data={availableFoodTypes}
        renderItem={({item})=> <View style={styles.foodTypeWrapper}><FoodTypeSelectButton type={item} iconName={AllMenuData[item].iconName}/></View>}
        />
        <FlatList
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        data={pizza.items}
        renderItem={({item})=> 
        <View style={styles.itemWrapper}>
        <FoodCard food={item} />
        </View>
        }
        contentContainerStyle={styles.flatListContainer}
        />
    </View>
   )
}

export default AllMenu;

const styles = StyleSheet.create({
    container:{
        padding:Spacing.small,
    },
    flatListContainer:{
        rowGap: 20,
        marginTop: Spacing.large
    },
    columnWrapper:{
        justifyContent:'space-between',
        rowGap: 20
    },
    itemWrapper:{
        width: '49%'
    },
    foodTypeWrapper:{
        marginRight: 10,
    }
})