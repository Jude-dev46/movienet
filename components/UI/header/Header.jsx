import Hero from "./Hero";
import Nav from "./Nav";

const Header = ({ data }) => {
  return (
    <div className="bg-hero bg-cover bg-center h-screen">
      <Nav />
      <Hero data={data} />
    </div>
  );
};

export default Header;
