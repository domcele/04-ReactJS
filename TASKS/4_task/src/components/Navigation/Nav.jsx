import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 16,
          gap: 16,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/news">News</Link>
        <Link to="/services">Services</Link>
      </nav>
    </div>
  );
};

export default Nav;
