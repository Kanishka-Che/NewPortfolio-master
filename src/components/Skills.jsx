import React from 'react';
import { skillsData } from '../assets/skills/skillsData';
import { skillsImage } from '../assets/skills/skillsImage';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const fadeInVariants = {
    hidden: { opacity: 3, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="min-h-screen bg-black-900 text-white flex flex-col justify-center items-center p-8">
      <motion.h1
        ref={ref}
        className="text-[8vw] md:text-4xl font-bold mb-12 text-center"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
      >
        Tech Stacks
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInVariants}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {skillsData.map((skill, id) => (
          <div
            key={id}
            className="bg-gradient-to-tr from-blue-200 white-600  p-4 rounded-xl flex flex-col items-center justify-center transform transition duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <img
              src={skillsImage(skill)}
              alt={skill}
              className="h-12 w-12 object-contain mb-3"
            />
            <h3 className="text-center text-white font-semibold">{skill}</h3>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
