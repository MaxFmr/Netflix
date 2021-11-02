import "./App.css";
import data from "./data.json";
import Section from "./components/Section";

function App() {
  return (
    <>
      <header>
        <img src="src/img/logo.696c2101.png" alt="" />
      </header>

      <Section title={data[0].category} movies={data[0].images[0]} />
    </>
  );
}

export default App;
