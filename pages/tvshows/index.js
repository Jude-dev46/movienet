import { useState, useEffect } from "react";
import Head from "next/head";

import ActionTvshows from "../../components/tvshows/ActionTv";
import AiringTv from "../../components/tvshows/AiringTvshows";
import PopularTvShows from "../../components/tvshows/PopularTvshows";
import TopratedTv from "../../components/tvshows/TopratedTvshows";
import TvAnimation from "../../components/tvshows/TvAnimation";
import TvComedy from "../../components/tvshows/TvComedy";
import TvCrime from "../../components/tvshows/TvCrime";
import TvDrama from "../../components/tvshows/TvDrama";
import TvSci_Fantasy from "../../components/tvshows/TvSci";
import Footer from "../../components/UI/footer/Footer";
import TvHeader from "../../components/UI/header/TvHeader";
import Preloader from "../../components/UI/preloader/Preloader";

const Tvshows = ({ data, popular_tvshows, toprated_tvshows, airing }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>Tvshows</title>
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
          <TvHeader data={data} />
          <PopularTvShows data={popular_tvshows} />
          <TopratedTv data={toprated_tvshows} />
          <AiringTv data={airing} />
          <ActionTvshows
            data={airing}
            result={popular_tvshows}
            action={toprated_tvshows}
          />
          <TvAnimation
            data={airing}
            result={popular_tvshows}
            action={toprated_tvshows}
          />
          <TvComedy
            data={airing}
            result={popular_tvshows}
            action={toprated_tvshows}
          />
          <TvCrime
            data={airing}
            result={popular_tvshows}
            action={toprated_tvshows}
          />
          <TvDrama
            data={airing}
            result={popular_tvshows}
            action={toprated_tvshows}
          />
          <TvSci_Fantasy
            data={airing}
            result={popular_tvshows}
            action={toprated_tvshows}
          />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Tvshows;

export async function getServerSideProps() {
  const { heromovie } = await import("../../components/data/new_tv.json");
  const { popular_tvshows } = await import(
    "../../components/data/popular_tvshows.json"
  );
  const { toprated_tvshows } = await import(
    "../../components/data/toprated_tvshows.json"
  );
  const { airing } = await import("../../components/data/tv.json");

  return {
    props: {
      data: heromovie,
      popular_tvshows,
      toprated_tvshows,
      airing,
    },
  };
}
