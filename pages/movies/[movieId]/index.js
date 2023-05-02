import Error from "next/error";
import Head from "next/head";
import MovieBTS from "../../../components/movies/MovieBTS";
import MovieDetail from "../../../components/movies/MovieDetail";
import MovieReviews from "../../../components/movies/MovieReviews";
import MovieTeaser from "../../../components/movies/MovieTeasers";
import MoveiVideos from "../../../components/movies/MovieVideos";
import SimilarMovies from "../../../components/movies/SimilarMovies";
import Footer from "../../../components/UI/footer/Footer";

const MovieDetails = ({ movieDetail, cast, results, data, res, watch }) => {
  console.log(watch);
  if (!movieDetail || !cast || !results || !data || !res || !watch) {
    return (
      <Error
        statusCode={500}
        title="Unable to get movie details ☹, Check your Internet Connection"
      />
    );
  }

  return (
    <div>
      <Head>
        <title>{movieDetail.title}</title>
        <meta
          name="description"
          content="A Next Js built movie app using The MovieDatabase Api"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <MovieDetail data={movieDetail} cast={cast} watch={watch} />
        <MovieReviews data={results} />
        <MoveiVideos data={data} />
        <MovieTeaser data={data} />
        <MovieBTS data={data} />
        <SimilarMovies data={res} />
        <Footer />
      </div>
    </div>
  );
};

export default MovieDetails;

export async function getStaticPaths() {
  const { popular_movies } = await import(
    "../../../components/data/popular_movies.json"
  );
  const { upcoming } = await import(
    "../../../components/data/upcomingmovies.json"
  );
  const { weekly_movies } = await import(
    "../../../components/data/weekly_trend.json"
  );
  const { now_playing } = await import(
    "../../../components/data/now_playing.json"
  );
  const { top_movies } = await import(
    "../../../components/data/top_rated.json"
  );
  const weeklyMovies = weekly_movies.filter(
    (mov) => mov.media_type === "movie"
  );

  const allData = [
    ...popular_movies,
    ...upcoming,
    ...weeklyMovies,
    ...now_playing,
    ...top_movies,
  ];

  const allPaths = allData.map((mov) => {
    return {
      params: {
        movieId: mov.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.movieId.toString();

  const { popular_movies } = await import(
    "../../../components/data/popular_movies.json"
  );
  const { upcoming } = await import(
    "../../../components/data/Upcomingmovies.json"
  );
  const { weekly_movies } = await import(
    "../../../components/data/weekly_trend.json"
  );
  const { now_playing } = await import(
    "../../../components/data/now_playing.json"
  );
  const { top_movies } = await import(
    "../../../components/data/top_rated.json"
  );
  const weeklyMovies = weekly_movies.filter(
    (mov) => mov.media_type === "movie"
  );

  const allData = [
    ...popular_movies,
    ...upcoming,
    ...weeklyMovies,
    ...now_playing,
    ...top_movies,
  ];
  const data = allData.filter((mov) => mov.id.toString() === id);

  const uniqueData = data.filter((item, index, self) => {
    return index === self.findIndex((mov) => mov.id === item.id);
  });

  const movie_id = uniqueData.map((mov) => {
    return mov.id;
  });

  try {
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id[0]}?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`
    );

    const movieDetail = await movie.json();

    const crew = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id[0]}/credits?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`
    );

    const { cast } = await crew.json();

    const reviews = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id[0]}/reviews?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US&page=1`
    );

    const { results } = await reviews.json();

    const videoReq = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id[0]}/videos?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`
    );

    const data = await videoReq.json();

    const similarVid = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id[0]}/recommendations?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`
    );

    const res = await similarVid.json();

    const watchProvider = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id[0]}/watch/providers?api_key=ccbc07c5fb9e4a890336d35cdf1938e3`
    );

    const watch = await watchProvider.json();

    if (
      !movie.ok ||
      !crew.ok ||
      !reviews.ok ||
      !videoReq.ok ||
      !similarVid.ok ||
      !watchProvider.ok
    ) {
      throw new Error("Something went wrong");
    }

    return {
      props: {
        movieDetail,
        cast: cast,
        results: results,
        data: data,
        res: res,
        watch,
      },
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
}
