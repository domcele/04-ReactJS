import SectionBarCard from "./SectionBarCard";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import "./SectionContainer.css";

const SectionBar = (props) => {
  const sectionData = [
    {
      imgSrc1: portfolio1,
      imgSrc2: portfolio2,
      alt1: "portfolio1",
      alt2: "portfolio2",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      imgSrc1: portfolio1,
      imgSrc2: portfolio2,
      alt1: "portfolio1",
      alt2: "portfolio2",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      imgSrc1: portfolio1,
      imgSrc2: portfolio2,
      alt1: "portfolio1",
      alt2: "portfolio2",
      text: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div>
      <div className="texts-container">
        <h3>{props.name}</h3>
        <p>{props.paragraph}</p>
      </div>
      <div className="section-container">
        {sectionData.map((item, index) => (
          <SectionBarCard
            key={index}
            imgsrc1={item.imgSrc1}
            alt1={item.alt1}
            text={item.text}
          />
        ))}
      </div>
      <div className="section-container">
        {sectionData.map((item, index) => (
          <SectionBarCard
            key={index}
            imgsrc2={item.imgSrc2}
            alt2={item.alt1}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionBar;
