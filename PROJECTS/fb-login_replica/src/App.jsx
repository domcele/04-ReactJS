import "./App.css";
import { Hero, Login, Pit } from "./components";
// import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="rootContainer">
      <Hero
        alt="facebook logo"
        title="Facebook helps you connect and share with the people in your life."
      />
      <Login />
      <Pit rights={"Meta © 2024"} />
    </div>
  );
};

export default App;
