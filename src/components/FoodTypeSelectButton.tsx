import {Pressable, Text, StyleSheet, StyleProp, ViewStyle, } from 'react-native';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import Colors from '../theme/colors';
import Spacing from '../theme/spacing';
import { selectThemeMode } from '../store/themeSlice';

type Props = {
    type: string;
    iconName: string;
    isSelected: boolean;
    onPress: ()=> void;
}
const FoodTypeSelectButton = ({type, iconName, isSelected, onPress}: Props)=>{
  const themeMode = useSelector(selectThemeMode);

    const selectedStateStyle: StyleProp<ViewStyle> = {
      backgroundColor: Colors.gold['400'],
    }

    return (
        <Pressable style={[styles.button, isSelected ? selectedStateStyle : null]} onPress={onPress}>
            <MaterialCommunityIcons name={iconName} size={24} color={Colors.red['400']}/>
            <Text style={[styles.text, {color: themeMode === 'dark' ? Colors.white['100'] : Colors.grey['700'] }]} >{type}</Text>
        </Pressable>
    )

}

export default FoodTypeSelectButton;

const styles= StyleSheet.create({
    button:{
        flexDirection: 'row',
        padding: Spacing.medium,
        gap: Spacing.xs,
        borderWidth: 2,
        borderColor: Colors.grey['200'],
        borderRadius: 15,
        alignItems:'center'
    },
    text:{
      textTransform:'capitalize',
    }
})