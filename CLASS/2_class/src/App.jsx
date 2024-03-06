import ArrowFunctionWelcome from "./components/ArrowFunctionWelcome";
import ArrowFunctionWelcomeV2 from "./components/ArrowFunctionWelcomeV2.jsx";
import Card from "./components/Card";
import ClassWelcome from "./components/ClassWelcome";
import Welcome from "./components/Welcome";
import WelcomeDestructed from "./components/WelcomeDestructed";
import "./App.css";
import FuncDiv from "./components/FuncDiv.jsx";
import ClassDiv from "./components/ClassDiv.jsx";
import InfoBar from "../../2_class/src/components/InfoBar";

function App() {
  return (
    <div>
      <ClassWelcome name="Justas" />
      <Welcome name="Migle" />
      <ArrowFunctionWelcome name="Domas" />
      <ArrowFunctionWelcomeV2 name="Giedrius" />
      <WelcomeDestructed name="Olga" />
      Hello world
      <div className="cards">
        <Card
          title="About"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi qui adipisci neque ab, ad iusto a deserunt earum eveniet iste quis fugiat ducimus voluptates magnam magni quia veniam quae delectus.
"
        />
        <Card
          title="Contacts"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi qui adipisci neque ab, ad iusto a deserunt earum eveniet iste quis fugiat ducimus voluptates magnam magni quia veniam quae delectus.
"
        />
        <Card
          title="Sales"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi qui adipisci neque ab, ad iusto a deserunt earum eveniet iste quis fugiat ducimus voluptates magnam magni quia veniam quae delectus.
"
        />
      </div>
      <div className="task1and2-container">
        <div className="task1-container">
          <FuncDiv h3="Todays topic" paragraph="Function" />
        </div>
        <div className="task2-container">
          <ClassDiv h3="Todays topic" paragraph="Class" />
        </div>
      </div>
      <InfoBar
        altInfoLock={"location"}
        infographLoc={"Kur mus rasti"}
        altInfoEm={"email"}
        infographEm={"Rasykite mums"}
        altInfoCont={"contacts"}
        infographCont={"1842"}
        infographComp={"Apie imone"}
        infographPren={"E. prenumerata"}
        infographFil={"E. filatelija"}
        infographLang={"EN"}
      />
    </div>
  );
}

export default App;
