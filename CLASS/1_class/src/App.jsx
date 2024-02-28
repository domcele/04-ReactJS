import "./App.css";
import sitelogo from "./assets/sitelogo.jpg";

function App() {
  return (
    <div id="logoContainer">
      <img
        src={sitelogo} // Using require for dynamic import
        alt="sitelogo"
        width="150px"
      />
      <nav></nav>
    </div>
  );
}

export default App;
