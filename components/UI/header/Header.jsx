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

  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div className="bg-hero bg-cover bg-center h-screen">
      <Nav toggleNav={showNav} open={isOpen} onHide={hideNav} />
      {isOpen && <SideNav open={isOpen} />}
      <Hero data={data} />
    </div>
  );
};

export default Header;
