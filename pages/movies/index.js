import { useState, useEffect } from "react";
import Head from "next/head";

import AdventureMovies from "../../components/movies/Adventure";
import AnimeMovie from "../../components/movies/Animation";
import MovieDrama from "../../components/movies/Drama";
import FantasyMovie from "../../components/movies/Fantasy";
import NowPlaying from "../../components/movies/NowPlaying";
import PopularMovies from "../../components/movies/PopularMovies";
import TopRated from "../../components/movies/TopRated";
import Footer from "../../components/UI/footer/Footer";
import MovieHeader from "../../components/UI/header/MovieHeader";
import Preloader from "../../components/UI/preloader/Preloader";

const Movies = ({
  result,
  genres,
  now_playing,
  popular_movies,
  top_movies,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>Movies</title>
        <meta
          name="description"
          content="A Next Js built movie app using The MovieDatabase Api"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <MovieHeader data={result} />
          <NowPlaying data={now_playing} />
          <PopularMovies data={popular_movies} />
          <TopRated data={top_movies} />
          <AdventureMovies data={popular_movies} />
          <AnimeMovie data={popular_movies} result={now_playing} />
          <MovieDrama data={top_movies} />
          <FantasyMovie data={top_movies} result={popular_movies} />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Movies;

export async function getServerSideProps() {
  const { result } = await import("../../components/data/movie.json");
  const { genres } = await import("../../components/data/genres.json");
  const { now_playing } = await import(
    "../../components/data/now_playing.json"
  );
  const { popular_movies } = await import(
    "../../components/data/popular_movies.json"
  );
  const { top_movies } = await import("../../components/data/top_rated.json");

  return {
    props: {
      result,
      genres,
      now_playing,
      popular_movies,
      top_movies,
    },
  };
}
