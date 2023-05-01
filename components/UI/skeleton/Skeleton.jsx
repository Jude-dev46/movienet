const Skeleton = () => {
  return (
    <div>
      <div className="container h-full mb-4 px-4 mx-auto flex flex-col md:flex-row mt-5 gap-6">
        <div className="h-25">
          <div className="bg-gray-900 w-25 rounded-lg h-full md:h-full animate-pulse"></div>
        </div>
        <div>
          <h2 className="bg-gray-900 h-4 w-12 rounded-full animate-pulse"></h2>
          <div className="flex gap-2 items-center mb-4 mt-2">
            <div className="bg-gray-900 h-4 w-12 -py-1 px-1 rounded-full animate-pulse"></div>
            <p className="bg-gray-900 h-4 w-12 rounded-full animate-pulse"></p>
            <p className="bg-gray-900 h-4 w-12 rounded-full animate-pulse"></p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-900 h-6 w-6 rounded-full animate-pulse"></div>
            <div className="bg-gray-900 h-6 w-6 rounded-full animate-pulse"></div>
            <div className="bg-gray-900 h-6 w-6 rounded-full animate-pulse"></div>
            <div className="bg-gray-900 h-6 w-6 rounded-full animate-pulse"></div>
            <div className="bg-gray-900 h-6 w-6 rounded-full animate-pulse"></div>
          </div>
          <div className="bg-gray-900 w-16 h-4 rounded-full animate-pulse mb-4"></div>
          <div className="bg-gray-900 w-24 h-8 rounded-full animate-pulse mb-4"></div>
          <div className="bg-gray-900 w-16 h-4 rounded-full animate-pulse mb-4"></div>
          <div className="bg-gray-900 w-16 h-4 rounded-full animate-pulse mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
