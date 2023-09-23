import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AllMenuData from '../data/AllMenuData';
import FoodCard from '../components/FoodCard';
import Spacing from '../theme/spacing';
import FoodTypeSelectButton from '../components/FoodTypeSelectButton';
import SearchInput from '../components/SearchInput';
import {FontFamilies, FontSize} from '../theme/fonts';
import Colors from '../theme/colors';
import { selectThemeMode, toggleMode } from '../store/themeSlice';

const AllMenu = ()=>{
    const themeMode = useSelector(selectThemeMode);
    const dispatch = useDispatch();

    console.log({themeMode});
    const availableFoodTypes = Object.keys(AllMenuData);

    const [selectedType, setSelectedType] = useState(availableFoodTypes[0]);
    const [searchText, setSearchText]  = useState('');

    const filteredItems = AllMenuData[selectedType].items.filter((item)=> item.name.toLowerCase().includes(searchText.toLowerCase()) );

    const toggleColorMode = ()=> dispatch(toggleMode());

   return (
    <View style={styles.container}>
        <Text style={[styles.headerLine1,{color: themeMode === 'dark' ? Colors.white['100']:Colors.grey['700'] }]}>Fast Food, </Text>
        <Text style={[styles.headerLine2, {color: themeMode === 'dark' ? Colors.gold['400']:Colors.grey['700'] }]}>Fast Delivery </Text>
        <TouchableOpacity style={styles.themeToggleBtn} onPress={toggleColorMode}>
          <FeatherIcons name={themeMode === 'dark' ? 'moon' : 'sun'} size={40} style={ {color: themeMode === 'dark' ? Colors.gold['400']:Colors.grey['700']}} />
        </TouchableOpacity>
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
     marginTop: Spacing.large,
    },
    headerLine2:{
        fontFamily: FontFamilies.Lato.Bold,
        fontSize: FontSize[30],
        marginBottom: Spacing.medium,
    },
    flatListContainer:{
        rowGap: Spacing.medium,
        marginTop: Spacing.large
    },
    columnWrapper:{
        justifyContent:'space-between',
        rowGap: Spacing.medium
    },
    itemWrapper:{
        width: '47%'
    },
    foodTypeWrapper:{
        marginRight: 10,
    },
    themeToggleBtn:{
        position:'absolute', 
        right: 20,
        top: 20
    }
})