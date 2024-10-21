import BlogCard from "../Blog/blogCard";


const BlogSection = () => {
    // src/data/blogs.js

const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      excerpt: "An introduction to React Hooks and how to use them effectively in your projects.",
      descriobtion: "An introduction to React Hooks and how to use them effectively in your projects.",
      date: "October 21, 2024",
      image: "https://placehold.co/1280x600",
      tags: ["React", "JavaScript", "Hooks"],
    },
    // Add more blog posts as needed
  ];
  
  
    return (
        <div className="container mx-auto px-4 py-16 my-40">
        <div className="text-center mb-5">
        <h1 className="lg:text-9xl text-6xl font-[Rajdhani] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  text-center">
          Latest Blogs
        </h1>
          <p className="text-lg text-gray-600">
            Explore our latest news and articles to stay updated.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    );
};

export default BlogSection;