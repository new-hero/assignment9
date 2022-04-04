import React from 'react';
import useReviews from '../Hooks/review';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [review, setReview] = useReviews()
    return (
        <div>
            <div className='review-container'>
                {
                    review.map(persone => <Review key={persone.id} persone={persone}></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;