import { useEffect, useState } from "react";
import Image from "next/image";
import TvCast from "./TvCast";
import Nav from "../UI/header/Nav";
import SideNav from "../UI/header/SideNav";
import Icons from "./ActionIcons";
import Skeleton from "../UI/skeleton/Skeleton";
import CastSkeleton from "../UI/skeleton/CastSkeleton";
import Error from "next/error";

const TvDetail = ({ data, cast, watch }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tvData, setTvData] = useState(null);
  const [tvCast, setTvCast] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const showNav = () => {
    setIsOpen(true);
  };

  const hideNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setTvData(data);
      setTvCast(cast);
      setIsLoading(false);
    }, 5000);
  }, [data, cast]);

  if (data.status_code === 34) {
    return <Error statusCode={data.status_code} title={data.status_message} />;
  }

  const { results } = watch;

  const base_url = "https://image.tmdb.org/t/p/";

  return (
    <div>
      <div>
        <Nav toggleNav={showNav} open={isOpen} onHide={hideNav} />
        {isOpen && <SideNav open={isOpen} />}
        {isLoading ? (
          <Skeleton />
        ) : (
          <div className="container px-4 mx-auto flex flex-col md:flex-row mt-5 gap-6">
            <div>
              <Image
                src={base_url + "w500" + tvData.poster_path}
                alt={tvData.original_name}
                width={450}
                height={200}
                style={{ width: "auto", height: "auto" }}
                className="rounded-lg md:h-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{tvData.name}</h2>
              <div className="flex gap-2 items-center mb-4">
                <div className="border -py-1 px-1">
                  {!tvData.adult ? "PG-13" : "PG-18"}
                </div>
                <p>{tvData.first_air_date}</p>
                <i className="fa fa-dot-circle-o"></i>
                {tvData.genres
                  ? tvData.genres.map((gen) => <p key={gen.id}>{gen.name}</p>)
                  : ""}
              </div>
              <Icons data={tvData} />
              <div className="flex items-baseline gap-2 mb-2">
                <h2 className="text-xl mb-1 font-semibold">Status:</h2>
                {tvData.status}
              </div>
              <div className="w-full mb-2 md:w-29">
                <h2 className="text-xl mb-1 font-semibold">Overview</h2>
                <p>{tvData.overview === "" ? "Not Found" : tvData.overview}</p>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h2 className="text-xl mb-1 font-semibold">Created by:</h2>

                {tvData.created_by
                  ? "Not found"
                  : tvData.created_by.map((dir) => (
                      <p key={dir.id} className="flex">
                        {dir.name}
                      </p>
                    ))}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h2 className="text-xl mb-1 font-semibold">
                  Last Episode air date:
                </h2>
                {tvData.last_episode_to_air.air_date}
              </div>
              <div className="flex items-baseline gap-2">
                <h2 className="text-xl mb-1 font-semibold">
                  Next Episode air date:
                </h2>
                {tvData.next_episode_to_air === null
                  ? "Not Found"
                  : tvData.next_episode_to_air.air_date}
              </div>
              <div className="flex items-baseline gap-2">
                <h2 className="text-xl mb-1 font-semibold">Where to watch:</h2>
                {results.US.flatrate === null
                  ? "Not Found"
                  : results.US.flatrate.map((prov) => (
                      <p key={prov.provider_id}>{prov.provider_name}</p>
                    ))}
              </div>
            </div>
          </div>
        )}

        {isLoading ? <CastSkeleton /> : <TvCast data={tvCast} />}
      </div>
    </div>
  );
};

export default TvDetail;
