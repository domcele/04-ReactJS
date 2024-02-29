import NavBarButton from "./NavBarButton";
import "./NavContainer.css";

const NavBar = (props) => {
  // const { name } = props;
  return (
    <div className="nav-container">
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
      <p>{props.paragraph}</p>
      <NavBarButton button="Button" />
    </div>
  );
};

export default NavBar;
