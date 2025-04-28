import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import badge1 from '../assets/badge1.png';
import badge2 from '../assets/badge2.png';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const fadeInVariants = useMemo(() => ({
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }), []);

  const timelineLineVariants = useMemo(() => ({
    hidden: { scaleY: 0 },
    visible: { scaleY: 1 },
  }), []);

  return (
    <div className="w-full flex flex-col mx-auto p-4">
      {/* Heading */}
      <motion.h1
        ref={ref}
        className="text-[8vw] md:text-[4vw] font-bold text-white w-full ml-[12%]"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInVariants}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        Education
      </motion.h1>

      <div className="flex flex-col items-left mt-8 w-full md:ml-60">
        {/* Timeline */}
        <div className="relative flex flex-col items-left w-full md:ml-10 mt-4">
          {/* Line 1 */}
          <motion.div
            className="w-1 h-12 bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-700 ml-8"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={timelineLineVariants}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          ></motion.div>

          {/* Badge 1 and Tab */}
          <motion.div
            className="flex items-center justify-start w-full relative"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
          >
            <motion.img
              src={badge1}
              alt="Badge 1"
              className="w-16 h-16 z-10 rounded-full bg-opacity-10 backdrop-blur-md"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <div className="flex flex-col ml-4 p-4 bg-opacity-10 backdrop-blur-md rounded-lg">
              <span className="text-white font-bold">2022 to Present</span>
              <span className="text-white">
                BSc.(Hons) Computing and Information Systems<br />
                Sabaragamuwa University of Sri Lanka
              </span>
            </div>
          </motion.div>

          {/* Line 2 */}
          <motion.div
            className="w-1 h-12 bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-700 ml-8"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={timelineLineVariants}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
          ></motion.div>

          {/* Badge 2 and Tab */}
          <motion.div
            className="flex items-center justify-start w-full relative"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
          >
            <motion.img
              src={badge2}
              alt="Badge 2"
              className="w-16 h-16 z-10 rounded-full bg-opacity-10 backdrop-blur-md"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <div className="flex flex-col ml-4 p-4 bg-opacity-10 backdrop-blur-md rounded-lg">
              <span className="text-white font-bold">2020</span>
              <span className="text-white">
                G.C.E. Advanced Levels (Physics Stream)<br />
                T.B.M. Herath National School - Ragala
              </span>
            </div>
          </motion.div>

          {/* Line 3 */}
          <motion.div
            className="w-1 h-12 bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-700 ml-8"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={timelineLineVariants}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
          ></motion.div>

          {/* Badge 3 and Tab */}
          <motion.div
            className="flex items-center justify-start w-full relative"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.3 }}
          >
            <motion.img
              src={badge2}
              alt="Badge 2"
              className="w-16 h-16 z-10 rounded-full bg-opacity-10 backdrop-blur-md"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <div className="flex flex-col ml-4 p-4 bg-opacity-10 backdrop-blur-md rounded-lg">
              <span className="text-white font-bold">2016</span>
              <span className="text-white">
                G.C.E. Ordinary Levels<br />
                T.B.M. Herath National School - Ragala
              </span>
            </div>
          </motion.div>

          {/* Final Line */}
          <motion.div
            className="w-1 h-12 bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-700 ml-8"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={timelineLineVariants}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.3 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
