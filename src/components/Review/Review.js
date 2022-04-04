import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, img, description, rating } = props.persone
    return (

        <div className='card'>
            <p >{description}</p>
            <img className='personeImg' src={img} alt="" />
            <h2>{name}</h2>
            <h4>Rating: {rating} Star</h4>
        </div>
    );
};

export default Review;