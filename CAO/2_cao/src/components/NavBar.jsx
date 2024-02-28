import NavBarButton from "./NavBarButton";

const NavBar = (props) => {
  // const { name } = props;
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
      <NavBarButton button="Button" />
    </div>
  );
};

export default NavBar;
