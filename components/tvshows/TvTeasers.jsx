import { useState, useEffect } from "react";
import TeaserSkeleton from "../UI/skeleton/TeaserSkeleton";
const TvTeaser = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [vidData, setVidData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setVidData(data);
      setIsLoading(false);
    }, 5000);
  }, [data]);

  const videos = data.results;

  const filteredVideos = videos
    ? videos.filter((vid) => {
        return vid.type === "Teaser";
      })
    : [];

  return (
    <div className="mb-8">
      {isLoading ? (
        <TeaserSkeleton />
      ) : (
        <div>
          <h1 className="text-xl ml-3 mt-3 mb-2 md:mt-4 md:ml-4">
            Teasers &rarr;
          </h1>
          <div className="flex flex-row mt-3 ml-4 md:ml-4 md:mt-2 gap-1 overflow-auto hide-scroll">
            {filteredVideos.length === 0 && (
              <h2 className="text-2xl">No Teaser Found</h2>
            )}
            {filteredVideos.map((vid) => (
              <div key={vid.id} className="md:ml-3">
                <iframe
                  className="w-auto ml-3 md:w-29 md:h-23"
                  src={`https://www.youtube.com/embed/${vid.key}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TvTeaser;
