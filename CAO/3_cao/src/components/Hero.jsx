import fma from "../assets/fma.jpg";
import "./HeroStyle.css";
import NavBar from "./NavBar";

const Hero = () => {
  // const { name } = props;
  return (
    <div className="hero-container">
      <img src={fma} alt="fma" />
      <NavBar title="Title" paragraph="paragraph in two lines" />
    </div>
  );
};

export default Hero;
