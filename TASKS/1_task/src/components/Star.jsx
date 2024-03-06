import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";

const Star = ({ selected = false, onSelect }) => {
  return (
    <div className="starCont">
      <div onClick={onSelect}>
        {selected ? <AiFillStar className="star" /> : <AiOutlineStar />}
      </div>
    </div>
  );
};

Star.propTypes = {
  selected: PropTypes.bool,
  onSelect: PropTypes.string.isRequired,
};

export default Star;
