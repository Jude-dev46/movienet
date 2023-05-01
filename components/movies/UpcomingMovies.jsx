import Image from "next/image";

const UpcomingMovies = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((movie) => {
        <div>
          <h1 className="text-white">{movie.title}</h1>
          <Image src={movie.poster_path} width={100} height={100} alt="" />
        </div>;
      })}
    </div>
  );
};

export default UpcomingMovies;
