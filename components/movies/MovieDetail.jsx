import Image from "next/image";
import Cast from "./Cast";
import Icons from "../tvshows/ActionIcons";
import Nav from "../UI/header/Nav";
import { useState, useEffect } from "react";
import Skeleton from "../UI/skeleton/Skeleton";
import CastSkeleton from "../UI/skeleton/CastSkeleton";

const MovieDetail = ({ data, cast, watch }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movData, setMovData] = useState(null);
  const [movCast, setMovCast] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMovData(data);
      setMovCast(cast);
      setIsLoading(false);
    }, 5000);
  }, [data, cast]);

  const { results } = watch;
  console.log(data);
  const base_url = "https://image.tmdb.org/t/p/";

  return (
    <div>
      <div>
        <Nav />
        {isLoading ? (
          <Skeleton />
        ) : (
          <div className="container px-4 mx-auto flex flex-col md:flex-row mt-5 gap-6">
            <div>
              <Image
                src={base_url + "w500" + movData.poster_path}
                alt={movData.original_title}
                width={375}
                height={200}
                className="rounded-lg md:h-full"
                priority
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{data.title}</h2>
              <div className="flex gap-2 items-center mb-4">
                <div className="border -py-1 px-1">
                  {!data.adult ? "PG-16" : "PG-18"}
                </div>
                <i className="fa fa-dot-circle-o"></i>
                <p>{movData.runtime}</p>
                <i className="fa fa-dot-circle-o"></i>
                {movData.genres.map((gen) => (
                  <p key={gen.id}>{gen.name}</p>
                ))}
              </div>
              <Icons data={movData} />
              <div className="flex items-baseline gap-2 mb-4">
                <h2 className="text-xl mb-1 font-semibold">Status:</h2>
                {movData.status}
              </div>
              <div className="w-full mb-4 md:w-29">
                <h2 className="text-xl mb-1 font-semibold">Overview</h2>
                <p>{movData.overview}</p>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h2 className="text-xl mb-1 font-semibold">Tagline:</h2>
                <p>{movData.tagline === "" ? "None" : movData.tagline}</p>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h2 className="text-xl mb-1 font-semibold">Release date:</h2>
                {movData.release_date}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h2 className="text-xl mb-1 font-semibold">Languages:</h2>
                {movData.spoken_languages.map((lan) => (
                  <p key={lan.id} className="flex">
                    {lan.name}
                  </p>
                ))}
              </div>
              <div className="h-5 flex items-baseline gap-2 mb-2">
                <h2 className="text-xl mb-1 font-semibold">Where to watch:</h2>
                {results.US
                  ? results.US.flatrate.map((prov) => (
                      <p key={prov.provider_id} className="flex">
                        {prov.provider_name}
                      </p>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        )}
        {isLoading ? <CastSkeleton /> : <Cast data={movCast} />}
      </div>
    </div>
  );
};

export default MovieDetail;
