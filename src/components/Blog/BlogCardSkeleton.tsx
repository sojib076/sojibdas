

const BlogCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        {/* Image Placeholder */}
        <div className="w-full h-56 bg-gray-300 dark:bg-gray-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        {/* Title Placeholder */}
        <div className="absolute bottom-0 left-0 lg:p-4">
          <div className="h-8 bg-gray-400 dark:bg-gray-600 rounded w-3/4"></div>
        </div>
      </div>
      <div className="p-6">
        {/* Excerpt Placeholder */}
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-5/6"></div>
        {/* Author and Date Placeholder */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 mr-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
          </div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
        </div>
        {/* Tags Placeholder */}
        <div className="flex flex-wrap mb-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2 w-16 h-6"
            ></div>
          ))}
        </div>
        {/* Button Placeholder */}
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
