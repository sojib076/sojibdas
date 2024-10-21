/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card"
import axios from 'axios';

const CreateBlog = () => {
    const [editorValue, setEditorValue] = useState<string>('');
    const token = localStorage.getItem('token');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { title, excerpt, image, tags } = e.target.elements;
        const newBlogPost = {
            title: title.value,
            excerpt: excerpt.value,
            description: editorValue,
            image: image.value,
            tags: tags.value.split(','), 
        };
        
        try {
            axios.post('http://localhost:5000/api/v1/create-blog/', newBlogPost, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                console.log('Blog created:', response.data);
            });
        } catch (error:any) {
            console.log(error.response);
        }
    };

    const handleChange = (value: string) => {
        setEditorValue(value);
    };

    return (
        <Card className="font-['Fredoka']">
            <CardHeader className="space-y-1 ml-10">
                <CardTitle className="text-2xl">Create a New Blog Post</CardTitle>
                <CardDescription>
                    Please fill in the details of your blog post.
                </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4">
                <form onSubmit={handleSubmit} className="p-6 border border-gray-300 rounded-md">
                    <div className="grid gap-2 mb-4">
                        <label htmlFor="title" className="block">Title</label>
                        <input id="title" type="text" placeholder="Blog Title" className="p-2 w-full border border-gray-300 rounded-md" required />
                    </div>
                    <div className="grid gap-2 mb-4">
                        <label htmlFor="excerpt" className="block">Excerpt</label>
                        <textarea id="excerpt" placeholder="Short summary of your blog" className="p-2 w-full border border-gray-300 rounded-md" required />
                    </div>

                    <ReactQuill
                        value={editorValue}
                        onChange={handleChange}
                        theme="snow"
                        className='h-72 my-10 w-full'
                    />

                    <div className="grid gap-2 mb-4">
                        <label htmlFor="image" className="block">Featured Image</label>
                        <input id="image" type="text" placeholder="Image URL" className="p-2 w-full border border-gray-300 rounded-md" required />
                    </div>

                    <div className="grid gap-2 mb-4">
                        <label htmlFor="tags" className="block">Tags</label>
                        <input id="tags" type="text" placeholder="Comma-separated tags" className="p-2 w-full border border-gray-300 rounded-md" required />
                    </div>

                    <button type="submit" className="px-4 py-2 w-full bg-yellow-400 text-black rounded-md hover:scale-90 transition-all">
                        Submit Blog Post
                    </button>
                </form>
            </CardContent>
        </Card>
    );
};

export default CreateBlog;
