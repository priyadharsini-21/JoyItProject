import React from "react";
import "./StarRating.css"; // Import CSS file for styling

const StarRating = ({ rating }) => {
  // Round the rating to the nearest half-star
  const roundedRating = Math.round(rating * 2) / 2;

  // Calculate the whole and fractional parts of the rating
  const wholeStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  // Create an array of star elements based on the whole and fractional parts of the rating
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < wholeStars) {
      // Full star
      stars.push(
        <span key={i} className="star full">
          &#9733;
        </span>
      );
    } else if (hasHalfStar && i === wholeStars) {
      // Half star
      stars.push(
        <span key={i} className="star half">
          &#9733;
        </span>
      );
    } else {
      // Empty star
      stars.push(
        <span key={i} className="star empty">
          &#9734;
        </span>
      );
    }
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
