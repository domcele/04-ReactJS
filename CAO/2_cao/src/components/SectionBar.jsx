import SectionBarCard from "./SectionBarCard";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import "./SectionContainer.css";

const SectionBar = (props) => {
  // const { name } = props;
  return (
    <div>
      <div className="texts-container">
        <h3>{props.name}</h3>
        <p>{props.paragraph}</p>
      </div>
      <div className="section-container">
        <SectionBarCard
          imgsrc1={portfolio1}
          alt1="portfolio1"
          text="Lorem ipsum dolor sit amet."
        />
        <SectionBarCard
          imgsrc1={portfolio1}
          alt1="portfolio1"
          text="Lorem ipsum dolor sit amet."
        />
        <SectionBarCard
          imgsrc1={portfolio1}
          alt1="portfolio1"
          text="Lorem ipsum dolor sit amet."
        />
      </div>
      <div className="section-container">
        <SectionBarCard
          imgsrc1={portfolio2}
          alt1="portfolio2"
          text="Lorem ipsum dolor sit amet."
        />
        <SectionBarCard
          imgsrc1={portfolio2}
          alt1="portfolio2"
          text="Lorem ipsum dolor sit amet."
        />
        <SectionBarCard
          imgsrc1={portfolio2}
          alt1="portfolio2"
          text="Lorem ipsum dolor sit amet."
        />
      </div>
    </div>
  );
};

export default SectionBar;
