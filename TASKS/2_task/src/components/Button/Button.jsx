import PropTypes from "prop-types";

const Button = (children, color) => {
  return (
    <div>
      <button style={{ backgroundColor: color }}>{children}</button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
