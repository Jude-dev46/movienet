import { useReducer, useState } from "react";
import FavTvshows from "./FavTvshows";

const initialState = {
  list: false,
  like: false,
  bookmark: false,
  favourite: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_LIST":
      return { ...state, list: action.payload };

    case "SET_LIKE":
      return { ...state, like: action.payload };

    case "SET_BOOKMARK":
      return { ...state, bookmark: action.payload };

    case "SET_FAVOURITE":
      return { ...state, favourite: action.payload };

    default:
      throw new Error();
  }
}

const Icons = ({ data, onAddToList }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const base_url = "https://image.tmdb.org/t/p/";

  // const addToListHandler = (e) => {
  //   e.preventDefault();

  //   const movie = {
  //     movieId: data.id,
  //     movieTitle: data.name,
  //     movieImage: base_url + "w-500" + data.poster_path,
  //   };
  // };

  const handleMouse = (iconName) => {
    switch (iconName) {
      case "list":
        dispatch({ type: "SET_LIST", payload: true });
        break;
      case "like":
        dispatch({ type: "SET_LIKE", payload: true });
        break;
      case "bookmark":
        dispatch({ type: "SET_BOOKMARK", payload: true });
        break;
      case "favourite":
        dispatch({ type: "SET_FAVOURITE", payload: true });
        break;
      default:
        break;
    }
  };

  const handleRevMouse = (iconName) => {
    switch (iconName) {
      case "list":
        dispatch({ type: "SET_LIST", payload: false });
        break;
      case "like":
        dispatch({ type: "SET_LIKE", payload: false });
        break;
      case "bookmark":
        dispatch({ type: "SET_BOOKMARK", payload: false });
        break;
      case "favourite":
        dispatch({ type: "SET_FAVOURITE", payload: false });
        break;
      default:
        break;
    }
  };

  const handleLike = () => {
    const likeButton = document.getElementById("like");
    console.log(likeButton.style.backgroundColor);
    if (
      likeButton.style.backgroundColor === "" ||
      likeButton.style.backgroundColor === "white"
    ) {
      likeButton.style.backgroundColor = "red";
      likeButton.style.color = "white";
    } else if (likeButton.style.backgroundColor === "red") {
      likeButton.style.backgroundColor = "white";
      likeButton.style.color = "red";
    }
  };

  const handleBookmark = () => {
    const bookmarkButton = document.getElementById("bookmark");

    if (
      bookmarkButton.style.backgroundColor === "" ||
      bookmarkButton.style.backgroundColor === "white"
    ) {
      bookmarkButton.style.backgroundColor = "red";
      bookmarkButton.style.color = "white";
    } else if (bookmarkButton.style.backgroundColor === "red") {
      bookmarkButton.style.backgroundColor = "white";
      bookmarkButton.style.color = "red";
    }
  };

  const handleStar = () => {
    const starButton = document.getElementById("star");

    if (
      starButton.style.backgroundColor === "" ||
      starButton.style.backgroundColor === "white"
    ) {
      starButton.style.backgroundColor = "red";
      starButton.style.color = "white";
    } else if (starButton.style.backgroundColor === "red") {
      starButton.style.backgroundColor = "white";
      starButton.style.color = "red";
    }
  };

  return (
    <div className="flex gap-4 items-center mb-4">
      <p className="bg-red-600 p-1 rounded-full">{data.vote_average}</p>
      <div className="relative">
        <i
          className="fa fa-list circle-icon"
          onMouseEnter={() => handleMouse("list")}
          onMouseLeave={() => handleRevMouse("list")}
          // onClick={addToListHandler}
        ></i>
        {state.list ? (
          <p className="list-text w-10 rounded-md font-mono">Add to List</p>
        ) : (
          ""
        )}
      </div>
      <div className="relative">
        <i
          id="like"
          className="fa fa-heart circle-icon"
          onMouseEnter={() => handleMouse("like")}
          onMouseLeave={() => handleRevMouse("like")}
          onClick={handleLike}
        ></i>
        {state.like ? (
          <p className="list-text-1 w-5 rounded-md font-mono">Like</p>
        ) : (
          ""
        )}
      </div>
      <div className="relative">
        <i
          id="bookmark"
          className="fa fa-bookmark circle-icon"
          onMouseEnter={() => handleMouse("bookmark")}
          onMouseLeave={() => handleRevMouse("bookmark")}
          onClick={handleBookmark}
        ></i>
        {state.bookmark ? (
          <p className="list-text-2 w-10 rounded-md font-mono">Bookmark</p>
        ) : (
          ""
        )}
      </div>
      <div className="relative">
        <i
          id="star"
          className="fa fa-star circle-icon"
          onMouseEnter={() => handleMouse("favourite")}
          onMouseLeave={() => handleRevMouse("favourite")}
          onClick={handleStar}
        ></i>
        {state.favourite ? (
          <p className="list-text-3 w-9 rounded-md font-mono">Favourite</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Icons;
