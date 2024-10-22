import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaServer } from "react-icons/fa";
import { CgCheck } from "react-icons/cg";

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-2xl text-blue-500" />,
    skills: [
      "Developing responsive user interfaces",
      "Web page development",
      "Proficient in  JavaScript reactjs redux tailwindcss ",
      "Experienced with React.js nextjs and framer-motion",
      "Familiar with browser developer tools",
      "Understanding of responsive design principles",
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-2xl text-green-500" />,
    skills: [
      "Creating servers with Node.js and Express.js",
      "Database management with MongoDB",
      "Understanding of RESTful API design",
      "Knowledge of server-side caching and performance optimizations",
    ],
  },
 
];

const SkillsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white lg:p-8 p-4 mb-20" id="what-i-do">
      {/* Left Side */}
      <aside className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
        <h1 className="lg:text-9xl text-6xl font-[Rajdhani] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 lg:text-left text-center">
          WHAT I DO
        </h1>
        <p className="text-gray-400 mt-6 text-lg">
        Hi, I'm Sojib! It's great to connect with you. As a MERN Stack Developer with nearly 2 years of experience, I've been building modern, high-performing web applications that deliver real results. Looking forward to sharing my skills with you!
        </p>
      </aside>

      {/* Right Side */}
      <div className="md:w-1/2 w-full">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left bg-gray-800 p-4 rounded-t-lg focus:outline-none flex justify-between items-center hover:bg-gray-700 transition-colors duration-200  

              font-[Rajdhani]
              

              "
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center">
                {skillCategory.icon}
                <span className="text-xl font-semibold ml-2">
                  {skillCategory.title}
                </span>
              </div>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-gray-800 overflow-hidden"
                >
                  <ul className="text-gray-300 font-semibold p-4 list-disc list-inside  font-[Rajdhani]">
                    {skillCategory.skills.map((skill, idx) => (
                      <div key={idx} className="mt-2 ">
                        
                        <li className="flex ">
                          <CgCheck 
                            size={30}
                          />
                          <div className="col-span-2 w-[88%] ">{skill}</div>
                        </li>


                      </div>
                    ))}
                  </ul>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
