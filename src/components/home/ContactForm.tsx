
import { motion } from 'framer-motion';

const ContactForm = () => {
  // Animation variants
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
    <div className=" lg:my-40 my-20">
      <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-start  justify-between"
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
            <p className="text-lg text-white mb-4 ml-4  lg:text-left text-center">
              Feel free to reach out to me via email:
            </p>
            <a
              href="mailto:sojibdas123@gmail.com"
              className="text-blue-500 text-lg hover:underline ml-4 text-center"
            >
              sojibdas123@gmail.com
            </a>
          </motion.div>

          
          <motion.div
            className="md:w-1/2 md:pl-12"
            variants={formVariant}
          >
            <motion.form
              className="grid grid-cols-1 gap-y-6"
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
                  className=" lg:w-full w-[350px] px-5 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
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
                  className="block w-full px-5 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
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
                  className="block w-full px-5 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
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
