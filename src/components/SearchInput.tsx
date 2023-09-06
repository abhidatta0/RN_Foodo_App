import { View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import Spacing from '../theme/spacing';
import Colors from '../theme/colors';

type Props = {
     updateSearchText: (value:string)=> void
} & TextInputProps;

const SearchInput = (props: Props)=>{
   
   return (
    <View style={styles.container}>
       <TextInput {...props} style={styles.textInput} value={props.value} onChangeText={(value)=> props.updateSearchText(value)}/>
       <Ionicons name="search-outline" size={25}/>
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
    textInput:{
        flex: 1
    }
})