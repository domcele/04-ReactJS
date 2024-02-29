import fma from "../assets/fma.jpg";
import "./HeroStyle.css";

const Hero = () => {
  // const { name } = props;
  return (
    <div className="hero-container">
      <img src={fma} alt="fma" />
    </div>
  );
};

export default Hero;
