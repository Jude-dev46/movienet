import { useState } from "react";
import FavTvshows from "../../components/tvshows/FavTvshows";
import Nav from "../../components/UI/header/Nav";
import Footer from "../../components/UI/footer/Footer";
import Icons from "../../components/tvshows/ActionIcons";

const MyList = ({ detail }) => {
  const [myList, setMyList] = useState([]);

  function addToMyList(movie) {
    setMyList((prevMovList) => {
      return [...prevMovList, movie];
    });
  }

  return (
    <>
      <Nav />
      <div className="heit">
        <Icons data={detail} onAddToList={addToMyList} />
        <FavTvshows data={myList} />
      </div>
      <Footer />
    </>
  );
};

export default MyList;
