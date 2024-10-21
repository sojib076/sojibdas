/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link, useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
  
    const loderData = useLoaderData() as any
    const blog = loderData.blogPost 
   
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
            <p className="text-sm text-white">By  Sojib Das </p>
            <p className="text-sm text-white">{blog.date}</p>
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
      <div className="prose lg:prose-xl dark:prose-dark max-w-none text-gray-200 font-medium p-10">
        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      </div>

      {/* Tags */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tags</h2>
        <div className="flex flex-wrap">
          {blog.tags.map((tag:string) => (
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
          to="/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
