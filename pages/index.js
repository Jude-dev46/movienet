import Head from "next/head";
import UpcomingMovies from "../components/movies/UpcomingMovies";
import Header from "../components/UI/header/Header";

export default function Home({ data, results }) {
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

      <Header data={data} />
      <UpcomingMovies data={results} />
    </div>
  );
}
{
  /* <main className="bg-black mx-auto"></main> */
}

export async function getStaticProps() {
  const { heromovie } = await import("../components/data/new_movie.json");
  const { results } = await import("../components/data/upcomingmovies.json");

  console.log(results);

  return {
    props: {
      data: heromovie,
      results,
    },
  };
}
