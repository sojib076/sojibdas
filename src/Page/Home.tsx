

import Banner from '../components/home/banner';
import BlogSection from '../components/home/blogSection';
import ContactForm from '../components/home/ContactForm';
import Projects from '../components/home/Projects';
import SkillsShowcase from '../components/home/SkillsShowcase';


import SkillsSection from '../components/home/whatIdo';

const Home = () => {

    return (
        <div className='font-[Rajdhani]'>
            <Banner></Banner>
            <SkillsSection></SkillsSection> 
             <SkillsShowcase></SkillsShowcase>
            <Projects></Projects>
            <ContactForm></ContactForm>
            <BlogSection></BlogSection>
          
            
        
           
        </div>
    );
};

export default Home;