/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from 'axios';

const AddSkills = () => {
 
    const [category, setCategory] = useState('');
    const [item, setItem] = useState({ name: '', icon: '' });

    const token = localStorage.getItem('token'); 


    const handleSubmit = async (e: any) => {
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
        } catch (error:any) {
            console.error('Failed to add skill', error.response);
        }
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Add Skills</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Category dropdown */}
                <div className="mb-6">
                    <label htmlFor="category" className="block text-lg font-medium">
                        Skill Category
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Database">Database</option>
                        
                    </select>
                </div>

                {/* Skill name input */}
                <div className="mb-6">
                    <label htmlFor="name" className="block text-lg font-medium">
                        Skill Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={item.name}
                        onChange={(e) => setItem({ ...item, name: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter skill name (e.g., React.js)"
                        required
                    />
                </div>

                {/* Skill icon URL input */}
                <div className="mb-6">
                    <label htmlFor="icon" className="block text-lg font-medium">
                        Icon (Image URL)
                    </label>
                    <input
                        id="icon"
                        type="text"
                        value={item.icon}
                        onChange={(e) => setItem({ ...item, icon: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter icon image URL"
                        required
                    />
                </div>

                {/* Submit button */}
                <div>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
                    >
                        Submit Skill
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddSkills;
