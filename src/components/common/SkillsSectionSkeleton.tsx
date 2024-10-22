

const SkillsSectionSkeleton = () => {
  return (
    <div className='p-2'>
      <div className="flex flex-col items-center mb-5">
       
        <div className="bg-gray-300 rounded-lg p-6 lg:w-[450px] w-80 max-w-md shadow-md animate-pulse">
          <div className="h-8 bg-gray-400 rounded w-1/3 mx-auto mb-6"></div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <li
                key={index}
                className="flex items-center bg-gray-200 py-2 px-4 rounded-md text-gray-700"
              >
                <div className="mr-3">
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                </div>
                <div className="flex-1 h-4 bg-gray-400 rounded"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center lg:gap-8 gap-4">
       
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            className="bg-gray-300 rounded-lg p-6 lg:w-52 w-full shadow-md animate-pulse"
            key={index}
        >
            <div className="h-6 bg-gray-400 rounded w-1/2 mx-auto mb-4"></div>
            <ul>
              {Array.from({ length: 2 }).map((_, idx) => (
                <li
                  key={idx}
                  className="flex items-center bg-gray-200 mb-2 py-2 px-3 rounded-md text-gray-700"
                >
                  <div className="mr-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 h-4 bg-gray-400 rounded"></div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSectionSkeleton;
