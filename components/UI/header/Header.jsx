import { useState } from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import SideNav from "./SideNav";

const Header = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showNav = () => {
    setIsOpen(true);
  };

  const hideNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-hero bg-cover bg-center h-screen">
      {!isOpen && <Nav toggleNav={showNav} disableNav={hideNav} />}
      {isOpen && <SideNav onHide={hideNav} />}
      <Hero data={data} />
    </div>
  );
};

export default Header;
