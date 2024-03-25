import { Routes, Route } from "react-router-dom";
import Logo from "../Logo/Logo";
import Home from "../../pages/Home/Home";
import Nav from "../Navigation/Nav";
import AboutUs from "../../pages/AboutUs/AboutUs";
import News from "../../pages/News/News";
import Services from "../../pages/Services/Services";

const Header = () => {
  return (
    <>
      <Logo />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default Header;
