import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="cardContainer">
      <div className="cardImgContainer">
        <img src={imageUrl} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Card;
