import React from 'react';
import { useRecoilState } from 'recoil';
import { reviewRatingState } from '@src/atoms/reviews';

const Ratings = () => {
  const [reviewRating, setReviewRating] = useRecoilState(reviewRatingState);

  const updateRating = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReviewRating(e.target.value);
  };

  return (
    <div>
      <select value={reviewRating} onChange={updateRating}>
        <option value="1.0">1.0</option>
        <option value="2.0">2.0</option>
        <option value="3.0">3.0</option>
        <option value="4.0">4.0</option>
        <option value="5.0">5.0</option>
      </select>
    </div>
  );
};

export default Ratings;
