const Hero = ({ data }) => {
  return (
    <div className="container mx-auto mt-17 flex flex-col gap-1 font-sans font-semibold">
      <p className="text-white text-2xl">{data.status}</p>
      <h1 className="text-white text-5xl">{data.title}</h1>
      <p className="text-white text-2xl">{data.tagline}</p>
      <p className="text-white text-2xl">{data.overview}</p>
    </div>
  );
};

export default Hero;
