import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <div>
      <button type="submit">{text}</button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
