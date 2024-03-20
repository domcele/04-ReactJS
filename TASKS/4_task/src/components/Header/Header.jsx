import { Routes, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "../Logo/Logo";
import Home from "../../pages/Home/Home";
import Nav from "../Navigation/Nav";
import AboutUs from "../../pages/AboutUs/AboutUs";
import News from "../../pages/News/News";

const Header = () => {
  return (
    <>
      <Logo />
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </>
  );
};

Header.propTypes = {};

export default Header;
