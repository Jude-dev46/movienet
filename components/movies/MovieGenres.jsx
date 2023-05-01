const MovieGenres = ({ data }) => {
  return (
    <div className="container flex gap-4 ml-8 mt-3 mb-4">
      <h3 className="text-2xl text-mono">Movies</h3>
      <select className="bg-black">
        <option>Genre</option>
        {data.map((genre) => (
          <option key={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
};

export default MovieGenres;
