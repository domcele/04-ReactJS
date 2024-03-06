import { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

  return (
    <div className="starCont">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < selectedStars}
          onSelect={() => handleStarClick(index)}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </div>
  );
};

StarRating.propTypes = {
  totalStars: PropTypes.number.isRequired,
};

export default StarRating;
