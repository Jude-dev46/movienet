const CastSkeleton = () => {
  // const filteredData = data.filter((d) => d.profile_path !== null);

  return (
    <div className="mb-8">
      <h1 className="bg-gray-900 w-10 h-4  ml-3 mt-3 md:mt-4 md:ml-4 rounded-full animate-pulse"></h1>
      <div className="flex flex-col ml-3 mt-3 md:ml-4 md:mt-2 gap-2">
        <div className="w-full flex gap-2 md:gap-4 overflow-hidden">
          <div className="bg-gray-900 container w-25 md:w-21 h-16 flex flex-col animate-pulse"></div>
          <div className="bg-gray-900 container w-25 h-16 flex flex-col animate-pulse"></div>
          <div className="bg-gray-900 container w-25 h-16 flex flex-col animate-pulse"></div>
          <div className="bg-gray-900 container w-25 h-16 flex flex-col animate-pulse"></div>
          <div className="bg-gray-900 container w-25 h-16 flex flex-col animate-pulse"></div>
          <div className="bg-gray-900 container w-25 h-16 flex flex-col animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default CastSkeleton;
