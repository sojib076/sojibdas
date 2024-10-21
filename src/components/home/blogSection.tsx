import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from "../Blog/blogCard";
import BlogCardSkeleton from '../Blog/BlogCardSkeleton';

const BlogSection = () => {
    interface Blog {
        _id: string;
        image: string;
        title: string;
        excerpt: string;
        createdAt: string;
        tags: string[];
    }

    const [blogs, setBlogs] = useState<Blog[]>([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
    
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/get-blog');
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
        return <p>{error}</p>; // Error handling
    }
    console.log(blogs);

    return (
        <div className="container mx-auto px-4 py-16 my-40">
            <div className="text-center mb-5">
                <h1 className="lg:text-9xl text-6xl font-[Rajdhani] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center">
                    Latest Blogs
                </h1>
                <p className="text-lg text-gray-600">
                    Explore our latest news and articles to stay updated.
                </p>
            </div>

            {
                loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-10">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <BlogCardSkeleton key={index} />
                        ))}
                    </div>
                )
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-10">

                {
                blogs &&
                blogs?.map((blog) => (
                    <BlogCard key={blog?._id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
