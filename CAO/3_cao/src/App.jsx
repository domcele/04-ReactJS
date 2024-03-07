import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SectionBar from "./components/SectionBar";

function App() {
  return (
    <div>
      <Hero />
      <SectionBar
        name="Portfolio"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quisquam neque error magnam sequi consequatur."
      />
    </div>
  );
}

export default App;
