import React from 'react';
import SingleReview from './SingleReview.jsx';

const AllReviews = (props) => {

  return (
    <div className='reviews-box'>
      {props.reviews.map(review => {
        review.display = false;
        return (
          <SingleReview
            isModal={props.isModal}
            key={review.reviews_id}
            review={review}
            readMore={props.readMore}
            result={props.result}
          />);
      })}
      <p hidden>test</p>
    </div>
  );

};

export default AllReviews;