

import Header from '@/components/common/Header';
import Banner from '../components/home/banner';
import BlogSection from '../components/home/blogSection';
import ContactForm from '../components/home/ContactForm';
import Projects from '../components/home/Projects';
import SkillsShowcase from '../components/home/SkillsShowcase';
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFramer,
    SiExpress,
    SiNodedotjs,
    SiMongodb,
  } from 'react-icons/si';


import SkillsSection from '../components/home/whatIdo';
import InfiniteScroll from '@/components/home/InfiniteScroll';

const Home = () => {

    const frontendIcons = [
        { icon: <SiReact />, name: 'React' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
        { icon: <SiFramer />, name: 'Framer Motion' },
        { icon: <SiExpress />, name: 'Express' },
        { icon: <SiNodedotjs />, name: 'Node.js' },
        { icon: <SiMongodb />, name: 'MongoDB' },
      ];
      
    
    return (
        <div className='font-[Rajdhani]'>
            <Header></Header>
            <Banner></Banner>
            <SkillsSection></SkillsSection> 
             <SkillsShowcase></SkillsShowcase>
            <Projects></Projects>
            <ContactForm></ContactForm>
          
         
           
          
              <BlogSection></BlogSection>
                 <InfiniteScroll  

            icons={frontendIcons}
            />
        
           
        </div>
    );
};

export default Home;