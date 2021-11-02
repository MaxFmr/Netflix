import data from "/Users/maximekerlidou/Desktop/netflix/src/data.json";

const Section = () => {
  return (
    <>
      {data.map((movies) => {
        return (
          <>
            <div>
              <h2>{movies.category}</h2>
            </div>

            <div className="carroussel">
              {movies.images.map((pictures) => {
                return <img src={pictures} alt="" />;
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Section;
