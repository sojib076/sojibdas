import { motion } from 'framer-motion';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress, } from 'react-icons/si';
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const SkillShowcase = () => {
    const skills = [
        {
            category: 'Frontend',
            items: [


                { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
                { name: 'React.js', icon: <FaReact className="text-blue-400" /> },

            ],
        },

        {
            category: 'Backend',
            items: [
                { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
                { name: 'Express.js', icon: <SiExpress className="text-gray-600" /> },

            ],
        },

        {
            category: 'Database',
            items: [
                { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },

            ],
        },
    ];
    return (
        <div className='flex flex-col-reverse lg:flex-row  justify-around items-center py-20'>



            <div className='p-2'>


                <div className="flex flex-col items-center mb-5   ">
                    {skills
                        .filter((skill) => skill.category === 'Frontend')
                        .map(({ category, items }) => (
                            <motion.div
                                className="bg-gray-300 rounded-lg p-6 
                  w-full max-w-md
                  shadow-md"
                                key={category}
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                <h2 className="text-3xl font-semibold text-center mb-6">
                                    {category}
                                </h2>
                                <motion.ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4
                  
           
                  ">
                                    {items.map(({ name, icon }) => (
                                        <motion.li
                                            key={name}
                                            variants={itemVariants}
                                            viewport={{ once: true, amount: 0.5 }}
                                            className="flex items-center bg-gray-200 py-2 px-4 
                        rounded-md text-gray-700 cursor-pointer
                        
                        
                       
            
                        "
                                            whileHover={{ scale: 1.03, backgroundColor: '#e5e7eb' }}
                                        >
                                            <div className="mr-3 text-2xl">{icon}</div>
                                            <div className="flex-1 font-medium">{name}</div>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        ))}
                </div>


                <div className="flex justify-center lg:gap-8 gap-4">
                    {skills
                        .filter(
                            (skill) => skill.category === 'Backend' || skill.category === 'Database'
                        )
                        .map(({ category, items }) => (
                            <motion.div
                                className="bg-gray-300 rounded-lg p-6 w-full shadow-md"
                                key={category}
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                <h2 className="text-2xl font-semibold text-center mb-4">
                                    {category}
                                </h2>
                                <motion.ul>
                                    {items.map(({ name, icon }) => (
                                        <motion.li
                                            key={name}
                                            variants={itemVariants}
                                            className="flex items-center bg-gray-200 mb-2 py-2 px-3 rounded-md text-gray-700 cursor-pointer"
                                            whileHover={{ scale: 1.03, backgroundColor: '#e5e7eb' }}
                                            viewport={{ once: false, amount: 0.5 }}

                                        >
                                            <div className="mr-3 text-xl">{icon}</div>
                                            <div className="flex-1 font-medium">{name}</div>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        ))}
                </div>
            </div>
            <motion.div
                className="md:w-1/2 md:pr-12 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.h1
                    className="lg:text-9xl text-6xl font-[Rajdhani] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 lg:text-left text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    WHAT I Know
                </motion.h1>
                <motion.p
                    className="text-gray-400 mt-6 text-lg p-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                >
                    I know these technologies and tools. I am a MERN Stack Developer with nearly 2 years of experience. I've been building modern, high-performing web applications that deliver real results. Looking forward to sharing my skills with you!
                </motion.p>
            </motion.div>
        </div>
    );


};

export default SkillShowcase;


