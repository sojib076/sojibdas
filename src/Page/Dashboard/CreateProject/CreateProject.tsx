/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const CreateProject = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); 
  const [tech, setTech] = useState<string[]>([]);

  const [liveLink, setLiveLink] = useState('');
  const [frontendRepo, setFrontendRepo] = useState('');
  const [backendRepo, setBackendRepo] = useState('');
  const [image, setImage] = useState('');

  const token = localStorage.getItem('token'); 


  const handleSubmit = async (e: any) => {
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
  
      await axios.post('https://sojibdasbackup.vercel.app/api/v1/add-project', newProject, {
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
    } catch (error:any) {
      console.error('Failed to add project:', error.response);
    }
  };

  // Handle tech stack input
  const handleTechChange = (e: any) => {
    const value = e.target.value.split(','); // Splits tech stack by comma
    setTech(value);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Create New Project</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title input */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium">
            Project Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter project title"
            required
          />
        </div>

        {/* Description input with Quill editor */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-lg font-medium">
            Project Description
          </label>
          <ReactQuill
            value={description}
            onChange={setDescription}
          
            className=" bg-white"
            placeholder="Enter project description"
          />
        </div>

        {/* Tech stack input */}
        <div className="mb-6">
          <label htmlFor="tech" className="block text-lg font-medium">
            Tech Stack (comma-separated)
          </label>
          <input
            id="tech"
            type="text"
            value={tech.join(',')}
            onChange={handleTechChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter technologies used (e.g., React, Node.js, MongoDB)"
            required
          />
        </div>

        {/* More info link */}
      

        {/* Live link input */}
        <div className="mb-6">
          <label htmlFor="liveLink" className="block text-lg font-medium">
            Live Project Link
          </label>
          <input
            id="liveLink"
            type="text"
            value={liveLink}
            onChange={(e) => setLiveLink(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter live project link"
            required
          />
        </div>

        {/* Frontend repository link */}
        <div className="mb-6">
          <label htmlFor="frontendRepo" className="block text-lg font-medium">
            Frontend Repository Link
          </label>
          <input
            id="frontendRepo"
            type="text"
            value={frontendRepo}
            onChange={(e) => setFrontendRepo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter frontend repository link"
            required
          />
        </div>

        {/* Backend repository link */}
        <div className="mb-6">
          <label htmlFor="backendRepo" className="block text-lg font-medium">
            Backend Repository Link
          </label>
          <input
            id="backendRepo"
            type="text"
            value={backendRepo}
            onChange={(e) => setBackendRepo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter backend repository link"
            required
          />
        </div>

        {/* Image URL input */}
        <div className="mb-6">
          <label htmlFor="image" className="block text-lg font-medium">
            Image URL
          </label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter project image URL"
            required
          />
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
          >
            Submit Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
