import {Pressable, Text, StyleSheet, StyleProp, ViewStyle, } from 'react-native';
import {useState} from 'react';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../theme/colors';
import Spacing from '../theme/spacing';


type Props = {
    type: string;
    iconName: string;
    isSelected: boolean;
    onPress: ()=> void;
}
const FoodTypeSelectButton = ({type, iconName, isSelected, onPress}: Props)=>{

    const selectedStateStyle: StyleProp<ViewStyle> = {
      backgroundColor: Colors.gold['400'],
    }

    return (
        <Pressable style={[styles.button, isSelected ? selectedStateStyle : null]} onPress={onPress}>
            <MaterialCommunityIcons name={iconName} size={24} color={Colors.red['400']}/>
          <Text style={styles.text} >{type}</Text>
        </Pressable>
    )

}

export default FoodTypeSelectButton;

const styles= StyleSheet.create({
    button:{
        flexDirection: 'row',
        padding: Spacing.medium,
        gap: 10,
        borderWidth: 2,
        borderColor: Colors.grey['200'],
        borderRadius: 15
    },
    text:{
      color: Colors.grey['700'],
      textTransform:'capitalize'
    }
})