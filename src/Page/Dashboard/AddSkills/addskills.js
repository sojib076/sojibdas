import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from 'axios';
const AddSkills = () => {
    const [category, setCategory] = useState('');
    const [item, setItem] = useState({ name: '', icon: '' });
    const token = localStorage.getItem('token');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSkill = {
            category,
            items: item, // Only sending one skill item at a time
        };
        try {
            // Send the skill data to the backend
            await axios.post('http://localhost:5000/api/v1/add-skill', newSkill, {
                headers: {
                    Authorization: `Bearer ${token}`, // Add authorization header if needed
                },
            });
            // Optionally reset the form or show a success message
            setCategory('');
            setItem({ name: '', icon: '' });
            alert('Skill added successfully');
        }
        catch (error) {
            console.error('Failed to add skill', error.response);
        }
    };
    return (_jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsx("h1", { className: "text-4xl font-bold mb-8", children: "Add Skills" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "category", className: "block text-lg font-medium", children: "Skill Category" }), _jsxs("select", { id: "category", value: category, onChange: (e) => setCategory(e.target.value), className: "w-full p-2 border border-gray-300 rounded", required: true, children: [_jsx("option", { value: "", children: "Select Category" }), _jsx("option", { value: "Frontend", children: "Frontend" }), _jsx("option", { value: "Backend", children: "Backend" }), _jsx("option", { value: "Database", children: "Database" })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "name", className: "block text-lg font-medium", children: "Skill Name" }), _jsx("input", { id: "name", type: "text", value: item.name, onChange: (e) => setItem({ ...item, name: e.target.value }), className: "w-full p-2 border border-gray-300 rounded", placeholder: "Enter skill name (e.g., React.js)", required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "icon", className: "block text-lg font-medium", children: "Icon (Image URL)" }), _jsx("input", { id: "icon", type: "text", value: item.icon, onChange: (e) => setItem({ ...item, icon: e.target.value }), className: "w-full p-2 border border-gray-300 rounded", placeholder: "Enter icon image URL", required: true })] }), _jsx("div", { children: _jsx("button", { type: "submit", className: "px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-all", children: "Submit Skill" }) })] })] }));
};
export default AddSkills;
