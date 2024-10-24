// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
// import { BsGithub } from 'react-icons/bs';
// import { DiMongodb } from 'react-icons/di';
// import { FaNodeJs } from 'react-icons/fa';
// import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
// import { SiExpress, SiMongoose, SiRedux, SiTypescript } from 'react-icons/si';

// const ProfileGrid = () => {
//     useEffect(() => {
//         AOS.init({
//             duration: 1000,
//             once: false,
//             easing: 'ease-in-out',
//             offset: 100,

//         });
//     }, []);

//     const iconData = [
//         { Icon: RiReactjsFill, color: 'text-blue-500', name: 'React' },
//         { Icon: RiNextjsFill, color: 'text-white', name: 'Next.js' },
//         { Icon: RiTailwindCssFill, color: 'text-blue-500', name: 'Tailwind CSS' },
//         { Icon: FaNodeJs, color: 'text-green-500', name: 'Node.js' },
//         { Icon: SiTypescript, color: 'text-blue-500', name: 'TypeScript' },
//         { Icon: SiExpress, color: 'text-green-500', name: 'Express' },
//         { Icon: BsGithub, color: 'text-white', name: 'GitHub' },
//         { Icon: DiMongodb, color: 'text-green-500', name: 'MongoDB' },
//         { Icon: SiMongoose, color: 'text-blue-500', name: 'Mongoose' },
//         // improt redux with SiRedux colors
//         { Icon: SiRedux, color: 'text-purple-500', name: 'Redux' },
//     ];


//     return (
//         <div className="overflow-hidden font-[Rubik]  z-[20] relative  py-20 ">
//             <div className={`grid lg:grid-cols-6 lg:grid-rows-10 lg:gap-4 gap-2 lg:p-10 py-10 px-2 transition-colors duration-500    `}>

//                 <div data-aos="fade-right"

//                     data-aos-delay="100"

//                     className="col-span-5 lg:row-span-2
                   
//                     p-2
//                  bg-gray-900
                   
//                     rounded-lg">
//                     <div > <h1 className="text-green-400 lg:text-xl font-bold  ">Who am I</h1>
//                         <p className="text-gray-300  ">

//                             I am normal boy who love to code and I am a full stack developer. I want to be better developer.
//                         </p>
//                     </div>
//                 </div>



//                 <div data-aos="fade-left"
//                     data-aos-delay="200"
//                     className="row-span-6 col-start-6 bg-gray-900   rounded-lg lg:flex flex-col justify-center items-center hidden ">


//                     <img src="
//                     https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
//                     " className='h-full w-full  rounded-lg ' alt=""

//                     />
//                 </div>


//                 <div data-aos="fade-left"
//                     data-aos-delay="300"

//                     className="col-span-3 lg:col-span-4 row-span-4 col-start-3 lg:row-start-7 
//                  bg-gray-900  p-4 rounded-lg">
//                     <h1 className=" text-xl font-bold text-green-500">Education </h1>
//                     <p className="text-gray-300 text-left">
//                         I have completed my graduation from the Nation University of Bangladesh in 2023 . I have completed my SSC and HSC from my city  Joypara Dohar  Dhaka. Education is important for me . I am non cse background student but I love to code and I am a full stack developer.
//                     </p>
//                 </div>


//                 <div data-aos="fade-up"
//                     data-aos-delay="350"

//                     className="col-span-3  lg:row-span-4 lg:row-start-3 row-span-3 
//                  col-start-3 row-start-2  bg-gray-900
//                  p-4 rounded-lg flex flex-col py-5 items-center ">
//                     <h1 className="text-white lg:text-2xl font-bold  ">
//                         Industry Projects
//                     </h1>
//                     <p className="text-gray-300 text-sm ">
//                         I have Done many Projects some them are URl Short (Saas) , E-commerce website , Blog website , Portfolio website , Social media website , Chatting website , Real time chat
//                     </p>
//                 </div>


//                 <div data-aos="fade-right"
//                     data-aos-delay="400"
//                     className=" col-span-2  lg:row-span-5 row-span-4 col-start-1 
//                 lg:row-start-5 row-start-4  bg-gray-900  
//          rounded-lg flex flex-col  items-center">
//                     <h1 className="text-white lg:text-xl font-bold py-5">Technology I know </h1>
//                     <div className='grid lg:grid-cols-6 grid-cols-3 lg:gap-5 gap-4'>
//                         {iconData.map((icon, index) => (
//                             <div className='icon-container-tooltip' key={index}>
//                                 <icon.Icon className={`text-4xl ${icon.color} icon`} />
//                                 <div className='icon-tooltip'>{icon.name}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>


//                 <div data-aos="fade-right"
//                     data-aos-delay="450"

//                     className="col-span-2 row-span-2 col-start-1 row-start-2 lg:row-start-3  bg-gray-900  p-4 rounded-lg flex flex-col justify-center items-center">
//                     <h1 className="text-white text-xl font-bold">
//                         Full Stack Developer
//                     </h1>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfileGrid;
