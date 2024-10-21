// import { motion } from "framer-motion";

// const timelineData = [
//   { date: "November 13th, 2023", event: "Page charts" },
//   { date: "November 13th, 2023", event: "In-product notifications for change control" },
//   { date: "November 8th, 2023", event: "DATE_DIFF function" },
//   { date: "November 2nd, 2023", event: "DISTANCE_OF_TIME_IN_WORDS function" },
//   { date: "November 2nd, 2023", event: "Linked cases and case buttons API", special: true },
//   { date: "October 31st, 2023", event: "Credentials and resources added to the INFO keyword" },
//   { date: "October 25th, 2023", event: "More charts for records reports" },
//   { date: "October 25th, 2023", event: "Change control via API" },
//   { date: "October 25th, 2023", event: "Custom roles" },
// ];

// const Timeline = () => {
//   return (
//     <div className="container mx-auto my-10 px-4">
//       <h2 className="text-3xl font-bold mb-8 text-center"> 

//       Experince Timeline

//       </h2>
//       <div className="relative">
//         {/* Vertical line in the center */}
//         <div className="hidden sm:block border-r-2 border-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

//         {timelineData.map((item, index) => (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}

//             viewport={{ once: true }}
//             key={index}
//             className="mb-8 flex flex-col sm:flex-row items-center w-full"
//           >
//             {/* Left side */}
//             <div
//               className={`flex ${
//                 index % 1 === 0 ? "sm:justify-end" : "sm:justify-start"
//               } sm:w-1/2 sm:px-4`}
//             >
//               {index % 2 !== 0 && (
//                 <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 max-w-md w-full">
//                   <p className="text-sm text-gray-500">{item.date}</p>
//                   <h3 className="font-semibold text-lg">{item.event}</h3>
//                 </div>
//               )}
//             </div>

//             {/* Center circle */}
//             <div className="rounded-full bg-white border-4 border-purple-500 w-8 h-8 z-10 my-4 sm:my-0"></div>

//             {/* Right side */}
//             <div
//               className={`flex ${
//                 index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//               } sm:w-1/2 sm:px-4`}
//             >
//               {index % 2 === 0 && (
//                 <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 max-w-md w-full">
//                   <p className="text-sm text-gray-500">{item.date}</p>
//                   <h3 className="font-semibold text-lg">{item.event}</h3>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;
