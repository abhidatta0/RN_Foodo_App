import { View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import {useSelector} from 'react-redux';
import  Ionicons from "@react-native-vector-icons/ionicons";
import Spacing from '../theme/spacing';
import Colors from '../theme/colors';
import { selectThemeMode } from '../store/themeSlice';

type Props = {
     updateSearchText: (value:string)=> void
} & TextInputProps;

const SearchInput = (props: Props)=>{
    const themeMode = useSelector(selectThemeMode);

   return (
    <View style={styles.container}>
       <TextInput {...props} style={[styles.searchInput, {color: themeMode === 'dark' ? Colors.white['100'] : Colors.grey['700']}]} value={props.value} onChangeText={(value)=> props.updateSearchText(value)} placeholderTextColor={themeMode === 'dark' ? Colors.gold['400']: Colors.grey['600']}/>
       <Ionicons name="search-outline" size={25} color={themeMode === 'dark' ? Colors.gold['400']: Colors.grey['600']}/>
    </View>
   )
}

export default SearchInput;

const styles = StyleSheet.create({
    container:{
     flexDirection:'row',
     alignItems:'center',
     borderWidth: 2,
     borderRadius: 30,
     paddingHorizontal: Spacing.medium,
     borderColor: Colors.grey['200'],
     marginVertical: Spacing.large,
    },
    searchInput:{
        flex: 1
    }
})