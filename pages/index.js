import { useState, useEffect } from "react";
import Head from "next/head";
import NowPlaying from "../components/movies/NowPlaying";
import PopularMovies from "../components/movies/PopularMovies";
import TopRated from "../components/movies/TopRated";
import UpcomingMovies from "../components/movies/UpcomingMovies";
import WeeklyTrend from "../components/movies/WeeklyTrend";
import AiringTv from "../components/tvshows/AiringTvshows";
import PopularTvShows from "../components/tvshows/PopularTvshows";
import TopratedTv from "../components/tvshows/TopratedTvshows";
import Footer from "../components/UI/footer/Footer";
import Header from "../components/UI/header/Header";
import Preloader from "../components/UI/preloader/Preloader";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home({
  data,
  airing,
  upcoming,
  weekly_movies,
  now_playing,
  popular_movies,
  top_movies,
  popular_tvshows,
  toprated_tvshows,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      <Head>
        <title>MovieNet</title>
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
          <Header data={data} />
          <NowPlaying data={now_playing} />
          <PopularMovies data={popular_movies} />
          <PopularTvShows data={popular_tvshows} />
          <WeeklyTrend data={weekly_movies} />
          <UpcomingMovies data={upcoming} />
          <TopRated data={top_movies} />
          <TopratedTv data={toprated_tvshows} />
          <AiringTv data={airing} />
          <Footer />
        </div>
      )}
    </div>
  );
}
{
}

export async function getServerSideProps() {
  const { heromovie } = await import("../components/data/new_movie.json");
  const { upcoming } = await import("../components/data/upcomingmovies.json");
  const { weekly_movies } = await import(
    "../components/data/weekly_trend.json"
  );
  const { now_playing } = await import("../components/data/now_playing.json");
  const { popular_movies } = await import(
    "../components/data/popular_movies.json"
  );

  const { top_movies } = await import("../components/data/top_rated.json");
  const { popular_tvshows } = await import(
    "../components/data/popular_tvshows.json"
  );
  const { toprated_tvshows } = await import(
    "../components/data/toprated_tvshows.json"
  );
  const { airing } = await import("../components/data/tv.json");

  return {
    props: {
      data: heromovie,
      upcoming,
      weekly_movies,
      now_playing,
      popular_movies,
      top_movies,
      popular_tvshows,
      toprated_tvshows,
      airing,
    },
  };
}
