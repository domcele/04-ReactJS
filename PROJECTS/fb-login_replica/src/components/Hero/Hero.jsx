import PropTypes from "prop-types";
import fblogo from "../../assets/fblogo.svg";
import "./Hero.css";

const Hero = ({ alt, title }) => {
  return (
    <div className="heroContainer">
      <div className="logoTitleContainer">
        <div className="logoContainer">
          <img src={fblogo} alt={alt} />
          <div className="titleContainer">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Hero;
