import { Rating } from 'react-native-ratings';
import {StyleSheet} from 'react-native';

type Props = {
    rating: number;
}
const ReviewRating = ({rating}: Props)=>{
    return (
        <Rating
        startingValue={rating}
        style={styles.ratings}
        imageSize={20}
        readonly
        />
    )
}

export default ReviewRating;

const styles = StyleSheet.create({
    ratings:{width:'30%', alignItems:'flex-start'}
})