import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { DiMongodb } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongoose, SiTypescript } from 'react-icons/si';

const ProfileGrid = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-in-out',
            offset: 100,

        });
    }, []);
    const [bgClass, setBgClass] = useState("bg-gray-900");

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            if (scrollY > windowHeight * .20 && scrollY < windowHeight * 0.8) {
                setBgClass("bg-gradient-to-tr from-[black] to-gray-900");
            } else if (scrollY >= windowHeight * 0.8) {
                setBgClass("bg-gradient-to-tr from-gray-900 to-gray-400 "); // Change to light when at the bottom
            } else {
                setBgClass("bg-gray-900"); // Reset to dark when at the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const iconData = [
        { Icon: RiReactjsFill, color: 'text-blue-500', name: 'React' },
        { Icon: RiNextjsFill, color: 'text-white', name: 'Next.js' },
        { Icon: RiTailwindCssFill, color: 'text-blue-500', name: 'Tailwind CSS' },
        { Icon: FaNodeJs, color: 'text-green-500', name: 'Node.js' },
        { Icon: SiTypescript, color: 'text-blue-500', name: 'TypeScript' },
        { Icon: SiExpress, color: 'text-green-500', name: 'Express' },
        { Icon: BsGithub, color: 'text-white', name: 'GitHub' },
        { Icon: DiMongodb, color: 'text-green-500', name: 'MongoDB' },
        { Icon: SiMongoose, color: 'text-blue-500', name: 'Mongoose' },
    ];


    return (
        <div className="overflow-hidden font-[Rubik] lg:mt-[-240px] mt-[-60%] z-[20] relative h-[750px] lg:h-auto    ">
            <div className={`grid lg:grid-cols-6 grid-rows-10 lg:gap-4 gap-2 lg:p-10 py-10 px-2 transition-colors duration-500 ${bgClass} `}>

                <div data-aos="fade-right"

                    data-aos-delay="100"

                    className="col-span-5 lg:row-span-2
                   
                    p-2
                 bg-gray-900
                   
                    rounded-lg">
                    <div > <h1 className="text-white lg:text-xl font-bold">Who am I</h1>
                        <p className="text-gray-300">Content for section 1</p></div>
                </div>



                <div data-aos="fade-left"
                    data-aos-delay="200"
                    className="row-span-6 col-start-6 bg-gray-900  p-4 rounded-lg lg:flex flex-col justify-center items-center hidden">
                    <h1 className="text-white text-xl font-bold">Section 2</h1>
                    <p className="text-gray-300">Content for section 2</p>
                </div>


                <div data-aos="fade-left"
                    data-aos-delay="300"

                    className="col-span-3 lg:col-span-4 row-span-4 col-start-3 lg:row-start-7 
                 bg-gray-900  p-4 rounded-lg">
                    <h1 className=" text-xl font-bold text-green-500">Education </h1>
                    <p className="text-gray-300 text-left">
                        I have completed my graduation from the Nation University of Bangladesh in 2023 . I have completed my SSC and HSC from my city  Joypara Dohar  Dhaka. Education is important for me . I am non cse background student but I love to code and I am a full stack developer.
                    </p>
                </div>


                <div data-aos="fade-up"
                    data-aos-delay="350"

                    className="col-span-3  lg:row-span-4 lg:row-start-3 row-span-3 
                 col-start-3 row-start-2  bg-gray-900
                 p-4 rounded-lg flex flex-col py-5 items-center ">
                    <h1 className="text-white lg:text-2xl font-bold  ">
                        Industry Projects
                    </h1>
                    <p className="text-gray-300 text-sm ">
                        I have Done many Projects some them are URl Short (Saas) , E-commerce website , Blog website , Portfolio website , Social media website , Chatting website , Real time chat
                    </p>
                </div>


                <div data-aos="fade-right"
                    data-aos-delay="400"
                    className=" col-span-2  lg:row-span-5 row-span-4 col-start-1 
                lg:row-start-5 row-start-4  bg-gray-900  
         rounded-lg flex flex-col  items-center">
                    <h1 className="text-white lg:text-xl font-bold py-5">Technology I know </h1>
                    <div className='grid lg:grid-cols-6 grid-cols-3 lg:gap-5 gap-4'>
                        {iconData.map((icon, index) => (
                            <div className='icon-container-tooltip' key={index}>
                                <icon.Icon className={`text-4xl ${icon.color} icon`} />
                                <div className='icon-tooltip'>{icon.name}</div>
                            </div>
                        ))}
                    </div>
                </div>


                <div data-aos="fade-right"
                    data-aos-delay="450"

                    className="col-span-2 row-span-2 col-start-1 row-start-2 lg:row-start-3  bg-gray-900  p-4 rounded-lg flex flex-col justify-center items-center">
                    <h1 className="text-white text-xl font-bold">
                        Full Stack Developer
                    </h1>

                </div>
            </div>
        </div>
    );
};

export default ProfileGrid;
