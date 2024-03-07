// import portfolio1 from "../assets/portfolio1.png";
// import portfolio2 from "../assets/portfolio2.png";

const SectionBarCard = (props) => {
  // const { name } = props;
  const { imgsrc1, imgsrc2, text, alt1, alt2 } = props;
  return (
    <div className="section-card-container">
      <img src={imgsrc1} alt={alt1} />
      <img src={imgsrc2} alt={alt2} />
      <p>{text}</p>
    </div>
  );
};

export default SectionBarCard;
