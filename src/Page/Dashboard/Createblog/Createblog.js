import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "../../../components/ui/card";
import axios from 'axios';
const CreateBlog = () => {
    const [editorValue, setEditorValue] = useState('');
    const token = localStorage.getItem('token');
    const handleSubmit = (e) => {
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
        }
        catch (error) {
            console.log(error.response);
        }
    };
    const handleChange = (value) => {
        setEditorValue(value);
    };
    return (_jsxs(Card, { className: "font-['Fredoka']", children: [_jsxs(CardHeader, { className: "space-y-1 ml-10", children: [_jsx(CardTitle, { className: "text-2xl", children: "Create a New Blog Post" }), _jsx(CardDescription, { children: "Please fill in the details of your blog post." })] }), _jsx(CardContent, { className: "grid gap-4", children: _jsxs("form", { onSubmit: handleSubmit, className: "p-6 border border-gray-300 rounded-md", children: [_jsxs("div", { className: "grid gap-2 mb-4", children: [_jsx("label", { htmlFor: "title", className: "block", children: "Title" }), _jsx("input", { id: "title", type: "text", placeholder: "Blog Title", className: "p-2 w-full border border-gray-300 rounded-md", required: true })] }), _jsxs("div", { className: "grid gap-2 mb-4", children: [_jsx("label", { htmlFor: "excerpt", className: "block", children: "Excerpt" }), _jsx("textarea", { id: "excerpt", placeholder: "Short summary of your blog", className: "p-2 w-full border border-gray-300 rounded-md", required: true })] }), _jsx(ReactQuill, { value: editorValue, onChange: handleChange, theme: "snow", className: 'h-72 my-10 w-full' }), _jsxs("div", { className: "grid gap-2 mb-4", children: [_jsx("label", { htmlFor: "image", className: "block", children: "Featured Image" }), _jsx("input", { id: "image", type: "text", placeholder: "Image URL", className: "p-2 w-full border border-gray-300 rounded-md", required: true })] }), _jsxs("div", { className: "grid gap-2 mb-4", children: [_jsx("label", { htmlFor: "tags", className: "block", children: "Tags" }), _jsx("input", { id: "tags", type: "text", placeholder: "Comma-separated tags", className: "p-2 w-full border border-gray-300 rounded-md", required: true })] }), _jsx("button", { type: "submit", className: "px-4 py-2 w-full bg-yellow-400 text-black rounded-md hover:scale-90 transition-all", children: "Submit Blog Post" })] }) })] }));
};
export default CreateBlog;
