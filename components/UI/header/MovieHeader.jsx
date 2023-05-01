import Hero from "./Hero";
import Nav from "./Nav";

const MovieHeader = ({ data }) => {
  return (
    <div className="bg-movieHero bg-cover bg-center h-screen">
      <Nav />
      <Hero data={data} />
    </div>
  );
};

export default MovieHeader;
