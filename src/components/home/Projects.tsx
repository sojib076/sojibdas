/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import computermockup from "../../assets/projectImage.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { CgRemove } from "react-icons/cg";

const projectData = [
  {
    title: "Pet Care Tips & Story Sharing",
    description: "A platform where users can share tips and stories about pet care.",
    tech: ["Next.js", "Tailwind", "Express.js"],
    moreLink: "/pet-care-tips",
    liveLink: "https://petcareblogs.vercel.app/",
    frontendRepo: "https://github.com/frontend-repo-link",
    backendRepo: "https://github.com/backend-repo-link",
    image: computermockup,
  },
  {
    title: "Bike Rental Service",
    description: "A complete bike rental system with inventory and user accounts.",
    tech: ["React", "Node.js"],
    moreLink: "/bike-rental",
    liveLink: "https://bike-rental-service.netlify.app/",
    frontendRepo: "https://github.com/frontend-repo-link",
    backendRepo: "https://github.com/backend-repo-link",
    image: computermockup,
  },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState() as any;

  const openModal = (project: any, e) => {
    const rect = e.target.getBoundingClientRect();
    setButtonPosition({ x: rect.left, y: rect.top });
    setSelectedProject(project); // Set the selected project
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null); // Clear the selected project
  };

  return (
    <div className="py-0 lg:my-40">
      <div className="overflow-hidden relative">
        <p className="text-white text-center animate-marquee whitespace-nowrap font-[Rajdhani] text-3xl">
          Click on the image to view it
        </p>
      </div>

      <h1 className="lg:text-9xl text-6xl font-[Rajdhani] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  text-center">
          Projects
        </h1>

      <div className="grid lg:grid-cols-3 gap-5 lg:p-10 p-2">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative text-center rounded-lg lg:p-4 p-3 border-white shadow-lg transition-all
             bg-gray-900
             border border-opacity-20 cursor-pointer"
          >
            <div className="relative overflow-hidden lg:w-[100%] h-48 w-[100%] mx-auto">
              <img
                src={project.image}
                alt={project.title}
                className="absolute top-0 left-0 w-full h-auto transition-transform ease-in-out hover:translate-y-[-86%] hover:rounded-sm"
                style={{ transitionDuration: "5000ms" }}
              />
            </div>

            <div className="flex justify-between lg:w-[90%] mx-auto">
              <h1 className="font-[Rajdhani] lg:text-3xl text-xl text-white mt-4 lg:text-left">
                {project.title}
              </h1>
            </div>

            <hr className="lg:w-[90%] mx-auto my-2 border-[1px] border-opacity-20" />

            <p className="text-gray-100 mt-2 mb-4">{project.description}</p>

            <div className="mt-4">
              <div className="flex space-x-2 flex-wrap justify-center">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className=" bg-opacity-20 text-white py-1 px-3 rounded-lg font-[Rajdhani] text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-center lg:space-x-4 bg-gray-400 bg-opacity-5  backdrop-filter backdrop-blur-lg border
             border-white border-opacity-20 rounded-md p-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-transparent hover:bg-white hover:bg-opacity-20 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out
            
                
                "
              >
                <FiExternalLink className="mr-2" />
                Live
              </a>

              <button
                className="flex items-center bg-transparen bg-white bg-opacity-20 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out

               
                
                "
                onClick={(e) => openModal(project, e)}
              >
                <FiGithub className="mr-2" />
                GitHub
              </button>

              <a
                href={project.moreLink}
                className="flex items-center bg-transparent hover:bg-white hover:bg-opacity-20 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                <FiEye className="mr-2" />
                View More
              </a>
            </div>

          </div>

        ))}
      </div>


      {isModalOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <motion.div
            initial={{
              top: buttonPosition.y,
              left: buttonPosition.x,
              scale: 0.5,
              opacity: 0,
            }}
            animate={{ top: "5%", left: "5%", scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative max-w-md w-full"
            style={{ transform: "translate(-50%, -50%)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <CgRemove size={24} />
            </button>

            {/* Modal Content */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              {selectedProject.title}
            </h2>






            <div className="flex flex-col space-y-4">
              <a
                href={selectedProject.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
              >
                <FiGithub className="mr-2" />
                Frontend Repository
              </a>
              <a
                href={selectedProject.backendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300"
              >
                <FiGithub className="mr-2" />
                Backend Repository
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

    </div>
  );
};

export default Projects;
