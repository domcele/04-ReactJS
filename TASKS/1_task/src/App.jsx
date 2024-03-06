import "./App.css";
import Avatar from "./components/Avatar";
import Card from "./components/Card";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Card
        imageUrl="https://www.apa.org/images/2020-03-feature-giraffe_tcm7-269465.png"
        title="Giraffe"
        subtitle="qwnekq"
      />
      <Card
        imageUrl="https://s28151.pcdn.co/wp-content/uploads/sites/2/2022/03/Coyote-animal-sentience-research.jpg"
        title="Wolf"
        subtitle="qw1290jfiafonekq"
      />
      <Avatar name="Dominykas Pavilionis" />
      <Avatar name="Ponas Tadas" />

      <Products title="BEST SELERS" />
    </div>
  );
};

export default App;
