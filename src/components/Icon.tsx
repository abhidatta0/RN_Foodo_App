import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleProp, ViewProps } from "react-native";

type Props = {
    type: typeof Ionicons,
    name: string,
    color:string,
    size ?: number,
    style?: StyleProp<ViewProps>,
}
const Icon = ({type, name, color, size = 24, style} : Props)=>{
    const Tag = type;
   return (
     <Tag name={name} size={size} color={color} style={style} />
   )
}

export default Icon;