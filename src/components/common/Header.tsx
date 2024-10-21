import React, { useState } from 'react';
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

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tabs = ['home', 'search', 'likes', 'notifications', 'profile'];

  return (
    <header
      className=" fixed bottom-0 left-0 right-0 bg-gray-200/90 shadow-lg p-4 rounded-t-3xl flex justify-around
       items-center z-50 font-[Rajdhani] lg:mb-0 lg:w-[70%] mx-auto pt-8  ">
      {/* Tabs */}
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`relative flex flex-col items-center cursor-pointer ${
            activeTab === tab ? 'text-blue-500' : ''
          }`}
        >
         
          {activeTab === tab && (
            <motion.div
              className="absolute -top-8 bg-gray-500 lg:w-24 w-14 h-5 rounded-b-full"
              layoutId="notch"
              transition={{ type: 'spring', stiffness: 50 }}
            />
          )}
        
          {tab === 'home' && <AiOutlineHome size={28} />}
          {tab === 'search' && <AiOutlineSearch size={28} />}
          {tab === 'likes' && <AiOutlineHeart size={28} />}
          {tab === 'notifications' && <AiOutlineBell size={28} />}
          {tab === 'profile' && <AiOutlineUser size={28} />}

         
          <span className="text-sm capitalize">{tab}</span>
        </div>
      ))}
    </header>
  );
};

export default Header;
