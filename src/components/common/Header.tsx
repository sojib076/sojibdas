import React, { useState, useEffect } from 'react';
import {
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineSearch,
} from 'react-icons/ai';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'what-i-do', 'what-i-know', 'projects', 'contact-me' ,];
      let currentSection = activeTab;
      let found = false;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();

          
          const isSectionVisible = top < window.innerHeight * 0.5 && bottom >= window.innerHeight * 0.2;
          if (isSectionVisible) {
            currentSection = sectionId;
            found = true;
          }
        }
      });

      if (found && currentSection !== activeTab) {
        setActiveTab(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab]); 

  const tabs = ['Home', 'What I do', 'What I know', 'Projects', 'Contact me' ,];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);

   
    const sectionId = tab.toLowerCase().replace(/\s+/g, '-');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="fixed bottom-0 left-0 right-0 bg-gray-200/90 shadow-lg p-4 rounded-t-2xl flex justify-around
       items-center z-50 font-[Rajdhani] lg:mb-0 lg:w-[70%] mx-auto pt-8"
    >
      {/* Tabs */}
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`relative flex flex-col items-center cursor-pointer ${
            activeTab === tab.toLowerCase().replace(/\s+/g, '-') ? 'text-gray-900' : ''
          }`}
        >
          {activeTab === tab.toLowerCase().replace(/\s+/g, '-') && (
            <motion.div
              className="absolute -top-8 bg-gray-500 lg:w-24 w-14 h-5 rounded-b-full"
              layoutId="notch"
              transition={{ type: 'spring', stiffness: 50 }}
            />
          )}

          {/* Icons */}
          {tab === 'Home' && <AiOutlineHome size={28} />}
          {tab === 'What I do' && <AiOutlineSearch size={28} />}
          {tab === 'What I know' && <AiOutlineHeart size={28} />}
          {tab === 'Projects' && <AiOutlineBell size={28} />}
          {tab === 'Contact me' && <AiOutlineUser size={28} />}
          

          <span className="text-sm capitalize">{tab}</span>
        </div>
      ))}
    </motion.header>
  );
};

export default Header;