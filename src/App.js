import "./App.css";
import data from "./data.json";
// import Section from "./components/Section";

function App() {
  return (
    <>
      <header>
        <img src="src/img/logo.696c2101.png" alt="" />
      </header>

      {data.map((movies) => {
        return (
          <>
            <h1>{movies.category}</h1>
            <div>
              {movies.images.map((pictures) => {
                return <img src={pictures} alt="" />;
              })}
            </div>
          </>
        );
      })}

      {/* <Section title={data[0].category} movies={data[0].images[0]} /> */}
    </>
  );
}

export default App;
