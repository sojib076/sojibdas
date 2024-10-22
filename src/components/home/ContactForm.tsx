
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactForm = () => {
  
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const formVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className=" lg:py-40 my-20 overflow-hidden "  id='contact-me'>
      <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <motion.div
          className="flex flex-col md:flex-row items-center  justify-between "
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >

          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            variants={itemVariant}
          >

            <h1 className="lg:text-9xl text-6xl font-[Rajdhani] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 lg:text-left text-center">
              Contact Me
            </h1>

            {/* Contact Information */}
            <p className="text-lg text-white lg:mb-4 ml-4  lg:text-left text-center">
              Feel free to reach out to me via email:
            </p>
            <a
              href="mailto:sojibdas123@gmail.com"
              className="text-blue-500 text-lg hover:underline ml-4 text-center"
            >
              sojibdas123@gmail.com
            </a>

            <p className="text-lg text-white lg:mb-4 mb-2 lg:ml-4  lg:text-left text-center mt-5">
              or connect with me on social media:
            </p>


            <div className=" flex  gap-10 ml-5">

              <a
                href="https://github.com/sojib076/"
                target="_blank"
              >
                <FaGithub className="text-white text-4xl bannerIconHover" />
              </a>
              <a href="https://www.linkedin.com/in/sojib-das-076das/" target="_blank">
                <FaLinkedin className="text-white text-4xl bannerIconHover" />
              </a>


              <a href="https://www.facebook.com/sojibds.sojib">
                <FaFacebook className="text-white text-4xl bannerIconHover" />
              </a>

            </div>


          </motion.div>


          <motion.div
            className="md:w-1/2 md:pl-12"
            variants={formVariant}
          >
            <motion.form
              className="grid grid-cols-1 gap-y-6 b"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className=" lg:w-full w-[320px] px-5 py-3 border
                   bg-gray-300
                  border-gray-400 rounded-md text-gray-900
                   
                   "
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full px-5 py-3 border
                   border-gray-400 rounded-md text-gray-900
                   bg-gray-300
                
                    "
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full px-5 py-3 border border-gray-500 rounded-md
                   text-gray-900 
                    bg-gray-300
                    "
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white 
                  bg-gradient-to-r from-green-400 to-blue-500
                   "
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
