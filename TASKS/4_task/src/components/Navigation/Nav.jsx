import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = (props) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/news">News</Link>
      </nav>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
