import Image from "next/image";

const TvCast = ({ data }) => {
  const base_url = "https://image.tmdb.org/t/p/";

  const filteredData = data.filter((d) => d.profile_path !== null);

  return (
    <div className="mb-8">
      <h1 className="text-xl ml-3 mt-3 md:mt-4 md:ml-4">Cast &rarr;</h1>
      <div className="flex flex-col ml-3 mt-3 md:ml-4 md:mt-2 gap-2 overflow-auto hide-scroll">
        <div className="flex gap-2">
          {filteredData.length === 0 && (
            <h2 className="text-2xl font-sans">No Cast Found</h2>
          )}
          {filteredData.map((cast) => (
            <div key={cast.id} className="container w-21 flex flex-col">
              <Image
                className="max-w-none"
                src={base_url + "w500" + cast.profile_path}
                width={200}
                height={50}
                alt=""
                style={{ width: "auto", height: "auto" }}
              />
              <h1 className="text-white font-mono font-base">{cast.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvCast;
