import Error from "next/error";
import Head from "next/head";
import SimilarTvshows from "../../../components/tvshows/SimilarTvshows";
import TvBTS from "../../../components/tvshows/TvBts";
import TvDetail from "../../../components/tvshows/TvDetails";
import TvReviews from "../../../components/tvshows/TvReviews";
import TvTeaser from "../../../components/tvshows/TvTeasers";
import TvTrailer from "../../../components/tvshows/TvTrailer";
import Footer from "../../../components/UI/footer/Footer";

const TvshowDetails = ({
  detail,
  cast,
  reviewsDetails,
  vidDetails,
  btsDetails,
  recDetails,
  watch,
}) => {
  if (
    !detail ||
    !cast ||
    !reviewsDetails ||
    !vidDetails ||
    !btsDetails ||
    !recDetails ||
    !watch
  ) {
    return (
      <Error
        statusCode={500}
        title="Unable to get Tvshow details ☹, Check your Internet Connection"
      />
    );
  }

  return (
    <div>
      <Head>
        <title>{detail.name}</title>
        <meta
          name="description"
          content="A Next Js built movie app using The MovieDatabase Api"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <TvDetail data={detail} cast={cast} watch={watch} />
        <TvReviews data={reviewsDetails} />
        <TvTrailer data={vidDetails} />
        <TvTeaser data={vidDetails} />
        <TvBTS data={btsDetails} />
        <SimilarTvshows data={recDetails} />
        <Footer />
      </div>
    </div>
  );
};

export default TvshowDetails;

export async function getStaticPaths() {
  const { weekly_movies } = await import(
    "../../../components/data/weekly_trend.json"
  );
  const weeklyMovies = weekly_movies.filter((mov) => mov.media_type === "tv");

  const { popular_tvshows } = await import(
    "../../../components/data/popular_tvshows.json"
  );
  const { toprated_tvshows } = await import(
    "../../../components/data/toprated_tvshows.json"
  );
  const { airing } = await import("../../../components/data/tv.json");

  const allData = [
    ...weeklyMovies,
    ...popular_tvshows,
    ...toprated_tvshows,
    ...airing,
  ];

  const allPaths = allData.map((tv) => {
    return {
      params: {
        tvshowsId: tv.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.tvshowsId.toString();

  const { weekly_movies } = await import(
    "../../../components/data/weekly_trend.json"
  );
  const weeklyMovies = weekly_movies.filter((mov) => mov.media_type === "tv");

  const { popular_tvshows } = await import(
    "../../../components/data/popular_tvshows.json"
  );
  const { toprated_tvshows } = await import(
    "../../../components/data/toprated_tvshows.json"
  );
  const { airing } = await import("../../../components/data/tv.json");

  const allData = [
    ...weeklyMovies,
    ...popular_tvshows,
    ...toprated_tvshows,
    ...airing,
  ];

  const data = allData.filter((tv) => tv.id.toString() === id);

  const uniqueData = data.filter((item, index, self) => {
    return index === self.findIndex((mov) => mov.id === item.id);
  });

  const tv_id = uniqueData.map((mov) => {
    return mov.id;
  });

  try {
    const tvDetails = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id[0]}?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`
    );
    const detail = await tvDetails.json();

    const tvCast = await fetch(`
    https://api.themoviedb.org/3/tv/${tv_id[0]}/credits?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`);

    const { cast } = await tvCast.json();

    const tvReviews = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id[0]}/reviews?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US&page=1`
    );

    const reviewsDetails = await tvReviews.json();

    const tvVideos = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id[0]}/videos?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`
    );

    const vidDetails = await tvVideos.json();

    const bts = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id[0]}/videos?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`
    );

    const btsDetails = await bts.json();

    const tvRecommedations = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id[0]}/recommendations?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US&page=1`
    );

    const recDetails = await tvRecommedations.json();

    const watchProvider = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id[0]}/watch/providers?api_key=ccbc07c5fb9e4a890336d35cdf1938e3`
    );

    const watch = await watchProvider.json();

    return {
      props: {
        data,
        detail: detail || {},
        cast: cast || {},
        reviewsDetails: reviewsDetails || {},
        vidDetails: vidDetails || {},
        btsDetails: btsDetails || {},
        recDetails: recDetails || {},
        watch,
      },
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
}
