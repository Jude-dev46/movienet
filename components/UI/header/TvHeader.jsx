import Hero from "./Hero";
import Nav from "./Nav";

const TvHeader = ({ data }) => {
  return (
    <div className="bg-tvHero bg-cover bg-center h-screen">
      <Nav />
      <Hero data={data} />
    </div>
  );
};

export default TvHeader;
