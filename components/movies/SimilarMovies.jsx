import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SimSkeleton from "../UI/skeleton/SimSkeleton";

const SimilarMovies = ({ data }) => {
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

  const filteredData = sim.filter((d) => d.profile_path !== null);

  return (
    <div className="mb-8">
      {isLoading ? (
        <SimSkeleton />
      ) : (
        <div>
          <h1 className="text-xl ml-3 mt-3 md:mt-4 md:ml-4">
            Similar Movies &rarr;
          </h1>
          <div className="flex flex-col ml-3 mt-3 md:ml-4 md:mt-2 gap-2 overflow-auto hide-scroll">
            <div className="flex gap-4">
              {filteredData.map((mov) => (
                <div
                  key={mov.id}
                  className="container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <Image
                    className="max-w-none"
                    src={base_url + "w500" + mov.backdrop_path}
                    width={200}
                    height={50}
                    alt=""
                    style={{ width: "auto", height: "auto" }}
                  />

                  <h1 className="text-white font-mono font-base">
                    {mov.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimilarMovies;
