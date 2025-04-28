import React from 'react';
import profimg from '../assets/profile.png';
import prof1 from '../assets/prof1.png';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

function Landing({ scrollToMyself }) {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = require('../assets/resume/Pasindu_Pathum.pdf');
        link.download = 'Pasindu_Pathum.pdf';
        link.click();
        alert('Resume downloaded successfully');
    };

    const navigateToContact = (e) => {
        e.preventDefault();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>G.A.P. Pathum - Full Stack Developer</title>
                <meta name="description" content="G.A.P. Pathum's portfolio. Full stack developer, designer, and software engineer." />
                <meta name="keywords" content="Full Stack Developer, Designer, Software Engineer, Portfolio" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, translateY: '10%' }}
                animate={{ opacity: 1, translateY: '-8%' }}
                transition={{ duration: 1 }}
                className="min-h-screen flex flex-col items-center justify-center mx-auto p-4"
                style={{ height: '100vh' }}
            >
                <motion.div
                    className="p-1 mb-6 bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700 rounded-full w-48 h-48 overflow-hidden hover:shadow-[0_0_15px_6px_rgba(128,90,213,0.7),0_0_25px_10px_rgba(59,130,246,0.7)] transition-shadow duration-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                        src={profimg}
                        alt="Profile of G.A.P. Pathum"
                        loading="lazy"
                        onMouseEnter={(e) => e.currentTarget.src = prof1}
                        onMouseLeave={(e) => e.currentTarget.src = profimg}
                    />
                </motion.div>
                <motion.h1
                    className="text-white text-center text-2xl font-bold"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Hello World!
                </motion.h1>

                <motion.h2
                    className="text-white text-center text-2xl font-bold mt-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    I'm G.A.P. Pathum
                </motion.h2>

                <motion.div
                    className="text-white text-center text-xl font-medium mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Typewriter
                        options={{
                            strings: ['A full stack developer', 'A designer', 'A Software Engineer'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    className="flex justify-center mt-6 gap-7"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <a
                        href="https://github.com/GAP-Pathum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300 text-white"
                        aria-label="GitHub"
                    >
                        <FaGithub className="w-8 h-8" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pasindu-pathum-98a299249/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300 text-white"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="w-8 h-8" />
                    </a>
                    <a
                        href="https://www.instagram.com/g_a_p_pathum/profilecard/?igsh=MXVuNXQ1eXY0NjBkMA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300 text-white"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="w-8 h-8" />
                    </a>
                    <a
                        href="https://www.behance.net/pasindupathum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300 text-white"
                        aria-label="Behance"
                    >
                        <FaBehance className="w-8 h-8" />
                    </a>
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row justify-center mt-9 md:mt-6 gap-4 md:gap-10"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                >
                    <button className="button-primary group" onClick={navigateToContact}>
                        <span className="group-hover:bg-opacity-0">Contact Me</span>
                    </button>
                    <button className="button-primary group" onClick={handleDownloadCV}>
                        <span className="group-hover:bg-opacity-0">My Resume</span>
                    </button>
                </motion.div>

                <div className="flex justify-center mt-4">
                    <motion.div
                        className="flex justify-center mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, -10, 0] }}
                        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'loop' }}
                    >
                        <a
                            href="#myself"
                            className="hover:scale-150 transition-transform duration-300 cursor-pointer"
                            aria-label="Scroll to Myself"
                        >
                            <svg
                                className="w-8 h-8 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 16.5l-8-8h16l-8 8z" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}

export default Landing;
