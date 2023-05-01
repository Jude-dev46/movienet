import Image from "next/image";
import Link from "next/link";

const TopratedTv = ({ data }) => {
  const base_url = "https://image.tmdb.org/t/p/";

  return (
    <div className="mb-8">
      <h1 className="text-xl ml-3 mt-3 md:mt-4 md:ml-8">
        TopRated Tvshows On MovieNet &rarr;
      </h1>
      <div className="flex flex-col ml-3 mt-3 md:ml-8 md:mt-2 gap-2 overflow-auto hide-scroll">
        <div className="flex gap-4">
          {data.map((movie) => (
            <div key={movie.id} className="container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <Link href={`/tvshows/${movie.id}`}>
                <Image
                  className="max-w-none"
                  src={base_url + "w500" + movie.poster_path}
                  width={200}
                  height={50}
                  alt=""
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
              <h1 className="text-white font-mono font-base">{movie.name}</h1>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopratedTv;
