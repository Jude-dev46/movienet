import Image from "next/image";

const Cast = ({ data }) => {
  const base_url = "https://image.tmdb.org/t/p/";

  const filteredData = data.filter((d) => d.profile_path !== null);

  return (
    <div className="mb-8">
      <h1 className="text-xl ml-3 mt-3 md:mt-4 md:ml-4">Cast &rarr;</h1>
      <div className="flex flex-col ml-3 mt-3 md:ml-4 md:mt-2 gap-2 overflow-auto hide-scroll">
        <div className="flex gap-4">
          {filteredData.map((cast) => (
            <div key={cast.id} className="container w-25 flex flex-col">
              <Image
                className="max-w-none"
                src={base_url + "w500" + cast.profile_path}
                width={200}
                height={50}
                alt=""
                style={{ width: "auto", height: "auto" }}
              />

              <h1 className="text-white font-mono font-base">{cast.name}</h1>
              {/* <p className="bg-slate-50 w-8 text-center rounded text-red-600">
              {movie.vote_average}
            </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cast;
