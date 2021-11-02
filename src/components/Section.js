const Section = (props) => {
  return (
    <menu>
      <h1>{props.title}</h1>

      <div>
        <img src={props.movies} alt="" />
      </div>
    </menu>
  );
};

export default Section;
