import FuncButton from "./FuncButton";

const FuncDiv = (props) => {
  return (
    <div>
      <h3>{props.h3}</h3>
      <p>{props.paragraph}</p>
      <FuncButton text="Button" />
    </div>
  );
};

export default FuncDiv;
