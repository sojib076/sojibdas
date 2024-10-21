

const ProjectGridSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-5 lg:p-10 p-2">
      {Array.from({ length: 3}).map((_, index) => (
        <div
          key={index}
          className="relative text-center rounded-lg lg:p-4 p-3 border-white shadow-lg transition-all bg-gray-900 border border-opacity-20 cursor-pointer animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="relative overflow-hidden lg:w-full h-48 w-full mx-auto bg-gray-700 rounded-md">
            {/* Empty div acts as image placeholder */}
          </div>

          {/* Title Placeholder */}
          <div className="flex justify-between lg:w-[90%] mx-auto mt-4">
            <div className="h-6 bg-gray-700 rounded w-1/2"></div>
          </div>

          {/* Divider */}
          <hr className="lg:w-[90%] mx-auto my-2 border-gray-700" />

          {/* Description Placeholder */}
          <div className="text-white">
            <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
          </div>

          {/* Tech Stack Placeholder */}
          <div className="mt-4">
            <div className="flex space-x-2 flex-wrap justify-center">
              {Array.from({ length: 3 }).map((_, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 py-1 px-3 rounded-lg font-[Rajdhani] text-sm"
                >
                  &nbsp;
                </span>
              ))}
            </div>
          </div>

          {/* Buttons Placeholder */}
          <div className="mt-6 flex justify-center lg:space-x-4 bg-gray-400 bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-md p-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="h-10 bg-gray-700 rounded w-1/3 mx-1"
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGridSkeleton;
