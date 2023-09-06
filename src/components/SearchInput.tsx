import {Text, View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import {useState} from 'react';

type Props = {
     updateSearchText: (value:string)=> void
} & TextInputProps;

const SearchInput = (props: Props)=>{
   
   return (
    <View>
       <TextInput {...props} style={styles.textInput} value={props.value} onChangeText={(value)=> props.updateSearchText(value)}/>
    </View>
   )
}

export default SearchInput;

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
    }
})