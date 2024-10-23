import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InfiniteScroll = ({ icons }) => {
  const motionDivRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (motionDivRef.current) {
      setContentWidth(motionDivRef.current.scrollWidth / 2);
    }
  }, [icons]);

  return (
    <div className="flex flex-col md:flex-row items-center w-[90%] mx-auto lg:my-28 mb-28">
     
      <div className="w-full md:w-1/2 p-4">
      <h1 className="lg:text-9xl text-6xl font-[Rajdhani] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 lg:text-left text-center">
      Thank You 
        </h1>
        <p className="lg:text-xl text-lg text-gray-200 text-left">
            Thank you for visiting my website. I hope you enjoyed your time here.  I am looking forward to hearing from you.
        </p>
        {/* email sojibdas123@gmail.com */}
        <p className="lg:text-xl text-lg text-gray-200 text-left">
        
            <a href="mailto:sojibdas123gmiail.com" className="text-blue-500">   
                sojibdas123gmiail.com
                </a>

                    </p>
      </div>

     
      <div className="w-full md:w-1/2 overflow-hidden">
        <motion.div
          className="flex"
          ref={motionDivRef}
          animate={{ x: [0, -contentWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 10,
              ease: 'linear',
            },
          }}
        >
          {icons.concat(icons).map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-24 h-24 text-6xl mx-4 hover:scale-125 cursor-pointer transition-transform duration-300"
            >
              
              <span 
              
                className={item.name === 'React' ? 'text-blue-500' : item.name === 'Next.js' ? 'text-black' : item.name === 'Tailwind CSS' ? 'text-blue-400' : item.name === 'Framer Motion' ? 'text-blue-300' : item.name === 'Express' ? 'text-green-500' : item.name === 'Node.js' ? 'text-green-400' : item.name === 'MongoDB' ? 'text-green-300' : 'text-black   '}
              > 
                {item.icon}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
