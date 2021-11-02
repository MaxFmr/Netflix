import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <div className="global">
      <header>
        <img
          src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png"
          alt=""
        />
      </header>

      <Section />

      {/* <Section title={data[0].category} movies={data[0].images[0]} /> */}
    </div>
  );
}
export default App;
