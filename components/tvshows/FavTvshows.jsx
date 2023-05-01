import Image from "next/image";

const FavTvshows = ({ data }) => {
  const base_url = "https://image.tmdb.org/t/p/";
  console.log(data);

  return (
    <>
      {data.length === 0 ? (
        <p className="text-2xl mt-5 text-center">Add a movie to List</p>
      ) : (
        <div className="container mx-auto flex flex-wrap gap-2 mt-5">
          {data.map((mov) => (
            <div key={mov.id}>
              <Image
                src={base_url + "w-500" + mov.poster_path}
                width={200}
                height={200}
                alt={mov.original_title}
                style={{ width: "auto", height: "auto" }}
              />
              <h2>{mov.title}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FavTvshows;
