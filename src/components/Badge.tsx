import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import { FontFamilies, FontSize } from '../theme/fonts';
import Colors from '../theme/colors';
import Spacing from '../theme/spacing';
import { selectThemeMode } from '../store/themeSlice';

type Props = {
  onPress: ()=> void;
  text: string;
  isSelected: boolean;
}
const Badge  = ({onPress, text, isSelected}: Props)=>{
  const themeMode = useSelector(selectThemeMode);

  return (
    <Pressable style={[styles.container, isSelected ? styles.selected : null]} onPress={onPress}>
      <Text style={styles.badgeText}>{text}</Text>
    </Pressable>
  )
}

export default Badge;

const styles = StyleSheet.create({
  container:{
    borderRadius: 10,
    backgroundColor: Colors.white['100'],
    borderColor: Colors.grey['200'],
    borderWidth: 2,
  },
  selected:{
    borderWidth: 0,
    backgroundColor:Colors.gold['400']

  },
  badgeText:{
    fontFamily: FontFamilies.Lato.Bold,
    fontSize: FontSize[16],
    padding: Spacing.small,
    color: Colors.grey['700'],
  }
})