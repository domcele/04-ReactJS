import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div>
      <h2>LOGO</h2>
      <nav style={{ display: "flex", gap: 24 }}>
        <Link to="/">Home</Link>
        <Link to="/pets">Pets</Link>
      </nav>
    </div>
  );
};

export default Topbar;
