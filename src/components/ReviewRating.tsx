import { Rating, SwipeRatingProps } from 'react-native-ratings';
import {StyleSheet} from 'react-native';

type Props = {
    rating: number;
} & SwipeRatingProps;
const ReviewRating = (props: Props)=>{
    return (
        <Rating
        {...props}
        startingValue={props.rating}
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