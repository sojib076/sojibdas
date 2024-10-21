import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
const CreateProject = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tech, setTech] = useState([]);
    const [liveLink, setLiveLink] = useState('');
    const [frontendRepo, setFrontendRepo] = useState('');
    const [backendRepo, setBackendRepo] = useState('');
    const [image, setImage] = useState('');
    const token = localStorage.getItem('token');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProject = {
            title,
            description,
            tech,
            liveLink,
            frontendRepo,
            backendRepo,
            image,
        };
        try {
            await axios.post('http://localhost:5000/api/v1/add-project', newProject, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTitle('');
            setDescription('');
            setTech([]);
            setLiveLink('');
            setFrontendRepo('');
            setBackendRepo('');
            setImage('');
            alert('Project added successfully!');
        }
        catch (error) {
            console.error('Failed to add project:', error.response);
        }
    };
    // Handle tech stack input
    const handleTechChange = (e) => {
        const value = e.target.value.split(','); // Splits tech stack by comma
        setTech(value);
    };
    return (_jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsx("h1", { className: "text-4xl font-bold mb-8", children: "Create New Project" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "title", className: "block text-lg font-medium", children: "Project Title" }), _jsx("input", { id: "title", type: "text", value: title, onChange: (e) => setTitle(e.target.value), className: "w-full p-2 border border-gray-300 rounded", placeholder: "Enter project title", required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "description", className: "block text-lg font-medium", children: "Project Description" }), _jsx(ReactQuill, { value: description, onChange: setDescription, className: " bg-white", placeholder: "Enter project description" })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "tech", className: "block text-lg font-medium", children: "Tech Stack (comma-separated)" }), _jsx("input", { id: "tech", type: "text", value: tech.join(','), onChange: handleTechChange, className: "w-full p-2 border border-gray-300 rounded", placeholder: "Enter technologies used (e.g., React, Node.js, MongoDB)", required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "liveLink", className: "block text-lg font-medium", children: "Live Project Link" }), _jsx("input", { id: "liveLink", type: "text", value: liveLink, onChange: (e) => setLiveLink(e.target.value), className: "w-full p-2 border border-gray-300 rounded", placeholder: "Enter live project link", required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "frontendRepo", className: "block text-lg font-medium", children: "Frontend Repository Link" }), _jsx("input", { id: "frontendRepo", type: "text", value: frontendRepo, onChange: (e) => setFrontendRepo(e.target.value), className: "w-full p-2 border border-gray-300 rounded", placeholder: "Enter frontend repository link", required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "backendRepo", className: "block text-lg font-medium", children: "Backend Repository Link" }), _jsx("input", { id: "backendRepo", type: "text", value: backendRepo, onChange: (e) => setBackendRepo(e.target.value), className: "w-full p-2 border border-gray-300 rounded", placeholder: "Enter backend repository link", required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "image", className: "block text-lg font-medium", children: "Image URL" }), _jsx("input", { id: "image", type: "text", value: image, onChange: (e) => setImage(e.target.value), className: "w-full p-2 border border-gray-300 rounded", placeholder: "Enter project image URL", required: true })] }), _jsx("div", { children: _jsx("button", { type: "submit", className: "px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-all", children: "Submit Project" }) })] })] }));
};
export default CreateProject;
