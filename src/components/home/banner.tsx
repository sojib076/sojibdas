// src/components/Banner.tsx
import sojibimg from '../../../src/assets/sojibdas.png';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="bg-black text-white flex items-center lg:h-screen px-4 lg:flex-row flex-col-reverse py-12 lg:py-0">
            <div className="lg:w-[70%]">
                <h1 className="lg:text-[58px] text-[32px] font-extrabold font-[Oswald] "> Hard Work Make <br /> <span className='text-green-500 font-[Oswald]'> You Talented </span> </h1>
               
                <p className="text-lg md:text-xl mb-8 font-[Rubik] border-l-4 border-green-600 p-2">
                    I am a Full Sptack web developer. I have been working in this sector for 2 years
                </p>
                <button className="px-6 py-2
                 bg-green-500 text-black font-semibold rounded hover:bg-green-600 transition-all hover:scale-110 hover:text-white">
                    Download CV
                </button>
            </div>
            <div className="lg:w-[40%] relative transform h-[50vh] lg:h-auto ">
                <img
                    src={sojibimg}
                    alt="Banner Background"
                    className="lg:w-[990px] w-full lg:h-[520px] object-cover "
                    style={{ width: '150%' }}
                />
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-[300px] h-[200px] z-[-10]">
                        <div className="icon-container absolute top-0 left-1/2 transform -translate-x-1/2 bg-black rounded-full ">
                            <FaGithub className="text-white text-4xl" />
                        </div>
                        <div className="icon-container absolute top-1/2 left-0 transform -translate-y-1/2 bg-black rounded-full p-2">
                            <FaLinkedin className="text-white text-4xl" />
                        </div>
                        <div className="icon-container absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full pr-10">
                            <FaFacebook className="text-white text-4xl" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Banner;
