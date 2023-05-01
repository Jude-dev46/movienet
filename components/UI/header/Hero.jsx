const Hero = ({ data }) => {
  return (
    <div className="container w-full md:w-7/12 -ml-2 md:ml-5 mt-10 md:mt-17 pl-5 md:pl-4 flex flex-col gap-1 font-sans font-semibold">
      <p className="text-white md:text-2xl mb-2 animate-pulse">{data.status}</p>
      <h1 className="text-white md:text-5xl">
        {data.title ? data.title : data.name}
      </h1>
      <p className="text-white md:text-2xl mb-2">{data.tagline}</p>
      <p className="text-white md:text-2xl mb-2">{data.overview}</p>
      <div className="flex items-center gap-2">
        <a href={data.homepage} className="w-6">
          <i className="fa fa-play circle-icon"></i>
        </a>
        <div className="bg-red-600 rounded-full p-1 px-2 cursor-pointer">
          <i className="fa fa-plus circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
