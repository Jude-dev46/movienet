import { useState, useEffect } from "react";
import BtsSkeleton from "../UI/skeleton/BtsSkeleton";

const MovieBTS = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [vidData, setVidData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setVidData(data);
      setIsLoading(false);
    }, 5000);
  }, [data]);

  const videos = data.results;

  const filteredVideos = videos.filter((vid) => {
    return vid.type === "Behind the Scenes";
  });

  return (
    <div className="mb-8">
      {isLoading ? (
        <BtsSkeleton />
      ) : (
        <div>
          <h1 className="text-xl ml-3 mt-3 mb-2 md:mt-4 md:ml-4">
            Behind The Scenes &rarr;
          </h1>
          <div className="flex mt-3 md:flex-row md:ml-4 md:mt-2 gap-1 overflow-auto hide-scroll">
            {filteredVideos.length === 0 && (
              <h2 className="text-2xl ml-3">No Video Found</h2>
            )}
            {filteredVideos.map((vid) => (
              <div key={vid.id} className="md:ml-3">
                <iframe
                  className="w-auto ml-3 md:w-29 md:h-23"
                  src={`https://www.youtube.com/embed/${vid.key}`}
                  frameBorder="0"
                  allowFullscreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieBTS;
