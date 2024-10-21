
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    const  blog = {
    id: 1,
    title: "Understanding React Hooks",
    excerpt: "An introduction to React Hooks and how to use them effectively in your projects.",
    content: "<p>An introduction to React Hooks and how to use them effectively in your projects.</p>",
    date: "October 21, 2024",
    image: "https://placehold.co/800x600",
    tags: ["React", "JavaScript", "Hooks"],


    }
  return (
    <div className="container mx-auto px-4 py-8 font-[Rajdhani]">
      {/* Blog Title and Author Info */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src='https://i.ibb.co.com/616X09w/sojibdas-website-desinger.png'
            alt= "Author"
          />
          <div>
            <p className="text-sm">By  Sojib Das </p>
            <p className="text-sm">{blog.date}</p>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <img
        className="w-full h-96 object-cover rounded-lg mb-8"
        src={blog.image}
        alt={blog.title}
      />

      {/* Blog Content */}
      <div className="prose lg:prose-xl dark:prose-dark max-w-none text-gray-200 font-medium">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      {/* Tags */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tags</h2>
        <div className="flex flex-wrap">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12">

 
        </div>

      {/* Back to Blog Link */}
      <div className="mt-8">
        <Link
          to="/blog"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          &larr; Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
