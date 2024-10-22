

const BlogCardSkeleton = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md animate-pulse">
      <div className="relative">
        <div className="w-full h-56 bg-gray-400 dark:bg-gray-700"></div>
      </div>
      <div className="p-6">
        <div className="h-6 bg-gray-400 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-400 dark:bg-gray-700 rounded-full mr-2"></div>
            <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-20"></div>
          </div>
          <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-16"></div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="h-6 bg-gray-400 dark:bg-gray-700 rounded-full w-16 mr-2 mb-2"></div>
          <div className="h-6 bg-gray-400 dark:bg-gray-700 rounded-full w-12 mr-2 mb-2"></div>
          <div className="h-6 bg-gray-400 dark:bg-gray-700 rounded-full w-20 mr-2 mb-2"></div>
        </div>
        <div className="block text-center bg-gray-400 dark:bg-gray-700 h-10 rounded-lg"></div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
