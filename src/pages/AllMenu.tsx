import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useState} from 'react';
import AllMenuData from '../data/AllMenuData';
import FoodCard from '../components/FoodCard';
import Spacing from '../theme/spacing';
import FoodTypeSelectButton from '../components/FoodTypeSelectButton';
import SearchInput from '../components/SearchInput';
import {FontFamilies, FontSize} from '../theme/fonts';
import Colors from '../theme/colors';

const AllMenu = ()=>{
    const availableFoodTypes = Object.keys(AllMenuData);

    const [selectedType, setSelectedType] = useState(availableFoodTypes[0]);
    const [searchText, setSearchText]  = useState('');

    const filteredItems = AllMenuData[selectedType].items.filter((item)=> item.name.toLowerCase().includes(searchText.toLowerCase()) );

   return (
    <View style={styles.container}>
        <Text style={styles.headerLine1}>Fast Food, </Text>
        <Text style={styles.headerLine2}>Fast Delivery </Text>
        <SearchInput value={searchText} updateSearchText={setSearchText} 
        placeholder={`Search your ${selectedType} here`}
        />
        <FlatList
        horizontal
        data={availableFoodTypes}
        renderItem={({item})=> <View style={styles.foodTypeWrapper}><FoodTypeSelectButton type={item} iconName={AllMenuData[item].iconName}
        isSelected={selectedType === item}
        onPress={()=> setSelectedType(item)}
        /></View>}
        />
        <FlatList
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        data={filteredItems}
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
    headerLine1:{
     fontFamily: FontFamilies.Lato.Light,
     fontSize: FontSize[30],
     color: Colors.grey['700'],
     marginTop: Spacing.large,
    },
    headerLine2:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize[30],
        color: Colors.grey['700'],
        marginBottom: Spacing.medium,
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