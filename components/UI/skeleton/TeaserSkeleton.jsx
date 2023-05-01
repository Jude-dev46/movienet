const TeaserSkeleton = () => {
  return (
    <div>
      <h2 className="bg-gray-900 w-10 h-4 ml-3 rounded-full animate-pulse"></h2>
      <div className="flex flex-row mt-3 ml-3 mb-5 md:ml-4 md:mt-2 gap-1 overflow-scroll hide-scroll">
        <div className="bg-gray-900 w-24 h-15 rounded-md animate-pulse"></div>
        <div className="bg-gray-900 w-24 h-15 rounded-md animate-pulse"></div>
        <div className="bg-gray-900 w-24 h-15 rounded-md animate-pulse"></div>
        <div className="bg-gray-900 w-24 h-15 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};

export default TeaserSkeleton;
