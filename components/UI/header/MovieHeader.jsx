import { useState } from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import SideNav from "./SideNav";

const MovieHeader = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showNav = () => {
    setIsOpen(true);
  };

  const hideNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-movieHero bg-cover bg-center h-screen">
      <Nav toggleNav={showNav} open={isOpen} onHide={hideNav} />
      {isOpen && <SideNav open={isOpen} />}
      <Hero data={data} />
    </div>
  );
};

export default MovieHeader;
