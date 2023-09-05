import {View, FlatList, StyleSheet} from 'react-native';
import AllMenuData from '../data/AllMenuData';
import FoodCard from '../components/FoodCard';
import Spacing from '../theme/spacing';

const AllMenu = ()=>{
    const pizza = AllMenuData['pizza'];
   return (
    <View style={styles.container}>
        <FlatList
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        data={pizza}
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
        rowGap: 20
    },
    columnWrapper:{
        justifyContent:'space-between',
        rowGap: 20

    },
    itemWrapper:{
        width: '49%'
    }
})