import { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveLink: string;
  frontendRepo: string;
  backendRepo: string;
  image: string;
}

interface LoaderData {
  project: Project;
}




const ProjectDetails = () => {
  const loaderData = useLoaderData() as LoaderData;
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const project = loaderData.project;
  const { pathname } = useLocation();

  useEffect(() => {
 
    window.scrollTo(0, 0);
   
  }, [pathname]);

  return (
    <div className="container mx-auto px-4 py-8 font-[Rajdhani]">
      {/* Project Title and Author Info */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src="https://i.ibb.co.com/616X09w/sojibdas-website-desinger.png"
            alt="Author"
          />
          <div>
            <p className="text-sm text-white">By Sojib Das</p>
          
          </div>
        </div>
      </div>

     
      <div className="relative overflow-hidden lg:w-[80%] lg:h-[500px] h-[200px] w-[100%] mx-auto">
        {!isImageLoaded && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-transparent">
            <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-md w-full h-full flex items-center justify-center">
              <span className="text-white">Loading...</span>
            </div>
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          className={`absolute top-0 left-0 w-full h-auto transition-transform ease-in-out hover:translate-y-[-86%] hover:rounded-sm ${
            isImageLoaded ? '' : 'hidden'
          }`}
          style={{ transitionDuration: '8000ms' }}
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setIsImageLoaded(true)}
        />
      </div>

      {/* Project Description */}
      <div className="prose lg:prose-xl dark:prose-dark max-w-none text-gray-200 font-medium lg:p-10">
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>

      {/* Technologies */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap">
          {project.tech.map((techItem: string) => (
            <span
              key={techItem}
              className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>

      {/* Project Links */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
        <ul className="list-disc list-inside text-gray-200">
          <li>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Live Site
            </a>
          </li>
          <li>
            <a
              href={project.frontendRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Frontend Repository
            </a>
          </li>
          <li>
            <a
              href={project.backendRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Backend Repository
            </a>
          </li>
        </ul>
      </div>

      {/* Back to Home Link */}
      <div className="mt-8 mb-20">
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

export default ProjectDetails;
