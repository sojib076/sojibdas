import React, { useState, useEffect, useRef } from 'react';
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
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const sections = ['home', 'what-i-do', 'what-i-know', 'projects', 'contact-me'];
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isScrollingRef.current) {
          const id = entry.target.id;
          setActiveTab(id);
        }
      });
    }, options);

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const tabs = ['Home', 'What I do', 'What I know', 'Projects', 'Contact me'];

  const handleTabClick = (tab: string) => {
    const sectionId = tab.toLowerCase().replace(/\s+/g, '-');
    const section = document.getElementById(sectionId);
    if (section) {
      isScrollingRef.current = true;
 setActiveTab(sectionId);
      smoothScrollTo(section.offsetTop, 800).then(() => {
        
        isScrollingRef.current = false;
       
      });
    }
  };

  const smoothScrollTo = (targetY: number, duration: number) => {
    return new Promise<void>((resolve) => {
      const startY = window.scrollY;
      const distanceY = targetY - startY;
      let startTime: number | null = null;

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutQuad(progress);

        window.scrollTo(0, startY + distanceY * easedProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          resolve();
        }
      };

      requestAnimationFrame(animateScroll);
    });
  };

  return (
    <motion.header
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="fixed bottom-0 left-0 right-0 bg-gray-200/90 shadow-lg p-4 rounded-t-2xl flex justify-around
       items-center z-50 font-[Rajdhani] lg:mb-0 lg:w-[70%] mx-auto pt-8"
    >
      {tabs.map((tab) => {
        const sectionId = tab.toLowerCase().replace(/\s+/g, '-');
        const isActive = activeTab === sectionId;
        return (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`relative flex flex-col items-center cursor-pointer ${
              isActive ? 'text-blue-900' : ''
            }`}
          >
            {isActive && (
              <motion.div
                className="absolute -top-8 bg-gray-500 lg:w-24 w-14 h-5 rounded-b-full"
                layoutId="notch"
                transition={{ type: 'spring', stiffness: 50 }}
              />
            )}

            {tab === 'Home' && <AiOutlineHome size={28} />}
            {tab === 'What I do' && <AiOutlineSearch size={28} />}
            {tab === 'What I know' && <AiOutlineHeart size={28} />}
            {tab === 'Projects' && <AiOutlineBell size={28} />}
            {tab === 'Contact me' && <AiOutlineUser size={28} />}

            <span className="text-sm capitalize">{tab}</span>
          </div>
        );
      })}
    </motion.header>
  );
};

export default Header;
