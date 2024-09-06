import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { KeyTextField } from '@prismicio/types';

const StarRating = ({ rating }: { rating: number }) => {
    const totalStars = 5;
    const stars = [];
  
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} color="yellow" />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
  
    return (
      <div className="flex">
        {stars}
      </div>
    );
  };
  
  export default StarRating;