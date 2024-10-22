import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../Blog/blogCard';
import BlogCardSkeleton from '../Blog/BlogCardSkeleton';


const BlogSection = () => {
    const [blogs, setBlogs] = useState([]); // Initialize state for blogs
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch blogs from the API
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://sojibdasbackup.vercel.app/api/v1/get-blog');
                setBlogs(response.data.blogPost);
                console.log(response.data.blogPost);

                setLoading(false);
            } catch (err) {
                setError('Failed to load blogs');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (error) {
            <h1> 

                something went wrong

            </h1>
        
    }




    return (
        <div className="container mx-auto px-4 py-16 lg:my-40 mb-10" >
            <div className="text-center mb-5">
                <h1 className="lg:text-9xl text-6xl font-[Rajdhani] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center">
                    Latest Blogs
                </h1>
                <p className="text-lg text-gray-600">
                    Explore our latest news and articles to stay updated.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-10">
                {loading &&

                    Array.from({ length: 3 }).map((_, index) => (
                        <BlogCardSkeleton key={index} />
                    ))
                }


                {

                    blogs?.map((blog) => (


                        <BlogCard key={blog._id} blog={blog} />


                    ))}
            </div>
        </div>
    );
};

export default BlogSection;
