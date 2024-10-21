
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img
          className="w-full h-56 object-cove
          r
          
          "
          src={blog.image}
          alt={blog.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 lg:p-4">
          <h2 className="text-2xl font-bold text-white bg-white bg-opacity-10 backdrop-blur-md p-2 rounded
          
          font-[Rajdhani]
  
          ">
            {blog.title}
          </h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src='https://i.ibb.co.com/616X09w/sojibdas-website-desinger.png'
              alt="Author"
            />
            <span className='font-bold'>By Sojib Das</span>
          </div>
          <span>{blog.date}</span>
        </div>
        <div className="flex flex-wrap mb-4">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
        <Link
          to={`/blog/${blog.id}`}
          className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
