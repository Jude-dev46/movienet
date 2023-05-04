import { useState, useEffect } from "react";
import Image from "next/image";
import SimSkeleton from "../UI/skeleton/SimSkeleton";

const SimilarTvshows = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [vidData, setVidData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setVidData(data);
      setIsLoading(false);
    }, 5000);
  }, [data]);

  const base_url = "https://image.tmdb.org/t/p/";

  const sim = data.results;

  const filteredData = sim ? sim.filter((d) => d.profile_path !== null) : [];

  return (
    <div className="mb-8">
      {isLoading ? (
        <SimSkeleton />
      ) : (
        <div>
          <h1 className="text-xl ml-3 mt-3 md:mt-4 md:ml-4">
            Similar Tvshows &rarr;
          </h1>
          <div className="flex flex-col ml-3 mt-3 md:ml-4 md:mt-2 gap-2 overflow-auto hide-scroll">
            <div className="flex gap-4">
              {filteredData.length === 0 && (
                <h2 className="text-2xl font-sans">No Similar TvShow Found</h2>
              )}
              {filteredData.map((tv) => (
                <div
                  key={tv.id}
                  className="container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <Image
                    className="max-w-none"
                    src={base_url + "w500" + tv.backdrop_path}
                    width={200}
                    height={50}
                    alt=""
                    style={{ width: "auto", height: "auto" }}
                  />
                  <h1 className="text-white font-mono font-base">{tv.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimilarTvshows;
