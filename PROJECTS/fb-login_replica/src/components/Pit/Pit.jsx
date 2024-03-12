import PropTypes from "prop-types";
import "./Pit.css";
import Button from "../Button/Button";

const Pit = ({ langLink, helpSection, rights }) => {
  langLink = [
    {
      lang1: "English (UK)",
      lang2: "Lietuvių",
    },
    {
      lang1: "Русский",
      lang2: "Polski",
    },
    {
      lang1: "Deutsch",
      lang2: "Español",
    },
    {
      lang1: "Português (Brasil)",
      lang2: <Button text="+" />,
    },
  ];

  helpSection = ["About", "•", "Help", "•", "More"];

  return (
    <div className="pitContainer">
      <div className="langsLeft">
        {langLink.map((item, index) => (
          <div key={index}>
            <a href="">{item.lang1}</a>
          </div>
        ))}
      </div>
      <div className="langsRight">
        {langLink.map((item, index) => (
          <div key={index}>
            <a href="">{item.lang2}</a>
          </div>
        ))}
      </div>
      <div className="helpContainer">
        {helpSection.map((item, index) => (
          <div key={index}>
            <a href="">{item}</a>
          </div>
        ))}
      </div>
      <div className="rightsContainer">
        <p>{rights}</p>
      </div>
    </div>
  );
};

Pit.propTypes = {
  langLink: PropTypes.string,
  helpSection: PropTypes.string,
  rights: PropTypes.string,
};

export default Pit;
