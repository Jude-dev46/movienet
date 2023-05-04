import { useState, useEffect } from "react";
import Image from "next/image";
import ReviewSkeleton from "../UI/skeleton/ReviewSkeleton";

const TvReviews = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [revData, setRevData] = useState(null);

  useEffect(() => {
    setRevData(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [data]);

  const base_url = "https://image.tmdb.org/t/p/";

  const reviews = data.results;

  const filteredData = reviews
    ? reviews.filter((author) => author.author_details.avatar_path !== null)
    : [];

  return (
    <div>
      {isLoading ? (
        <ReviewSkeleton />
      ) : (
        <div>
          <h2 className="text-xl ml-3 mt-3 mb-2 md:mt-4 md:ml-4">Reviews</h2>
          <div className="container w-11/12 md:px-4 ml-3 mb-6 md:ml-4 font-mono h-24 shadow-xl overflow-scroll hide-scroll">
            {filteredData.length === 0 && (
              <h2 className="text-2xl font-sans">No Reviews Found</h2>
            )}
            {filteredData.map((cast) => (
              <div
                key={cast.id}
                className="w-auto md:w-auto bg-slate-900 border-1 rounded-lg pb-4 -ml-3 mb-3 font-sans"
              >
                <div className="w-full flex gap-3 p-4">
                  <Image
                    src={base_url + "w200" + cast.author_details.avatar_path}
                    width={30}
                    height={50}
                    alt="review profile picture"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="flex flex-col">
                    <p className="w-19">
                      A review by <span>{cast.author}</span>
                    </p>
                    <p className="text-sm">
                      written at <span>{cast.created_at}</span>
                    </p>
                  </div>
                </div>
                <p className="m-4">{cast.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TvReviews;
