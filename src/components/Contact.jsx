import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import {
  FaGithub, FaLinkedin, FaFacebook, FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';

const fadeInVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Contact = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [formStatus, setFormStatus] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_dx2pmvp',    
      'template_82sxn5a',    
      e.target,
      'btotwDHrylpZeD4x2'      
    ).then(
      (result) => {
        setFormStatus("✅ Message sent successfully!");
        showPopup("✅ Message sent successfully!", "success")
      },
      (error) => {
        setFormStatus("❌ Failed to send message. Please try again.");
        showPopup("❌ Failed to send message. Please try again.", "error")
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col justify-center items-center p-6 mt-20">
      <motion.h1
        ref={ref1}
        className="text-4xl font-bold text-white mb-10"
        initial="hidden"
        animate={inView1 ? 'visible' : 'hidden'}
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10 justify-between items-center">
       
        <motion.form
          ref={ref2}
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-6 shadow-lg w-full md:w-1/2 p-6 rounded-lg"
          initial="hidden"
          animate={inView2 ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label className="text-white text-lg font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-black-800 text-white placeholder-black-400 focus:outline-none backdrop-blur-sm"
            placeholder="Enter your name"
          />

          <label className="text-white text-lg font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-black-800 text-white placeholder-black-400 focus:outline-none backdrop-blur-sm"
            placeholder="Enter your email"
          />

          <label className="text-white text-lg font-medium">Message</label>
          <textarea
            name="message"
            required
            className="w-full p-3 h-28 rounded-lg bg-transparent border border-black-800 text-white placeholder-black-400 focus:outline-none backdrop-blur-sm"
            placeholder="Write your message"
          ></textarea>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 transition text-black px-6 py-2 rounded-lg font-medium"
          >
            Send
          </button>

          {formStatus && (
            <p className="text-center text-white mt-4">{formStatus}</p>
          )}
        </motion.form>

      
        <motion.div
          ref={ref3}
          className="flex flex-col gap-6 shadow-lg w-full md:w-1/2 p-6 rounded-lg"
          initial="hidden"
          animate={inView3 ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="mailto:kanishkachethana@gmail.com" className="text-white text-lg font-medium">
    kanishkachethana123@gmail.com
  </a>
  <a href="tel:+94789107363" className="text-white text-lg font-medium">
    +94 789 107 363
  </a>
  <p className="text-white text-lg font-medium">
    Anuradhapura, Sri Lanka
  </p>

  <div className="flex gap-6 justify-start mt-4 flex-wrap">
    <a href="https://github.com/Kanishka-Che" className="text-white hover:text-blue-400" aria-label="GitHub">
      <FaGithub className="w-8 h-8" />
    </a>
    <a href="https://www.linkedin.com/in/kanishka-chethana-55b618295/" className="text-white hover:text-blue-400" aria-label="LinkedIn">
      <FaLinkedin className="w-8 h-8" />
    </a>
    <a href="https://www.facebook.com/kanishka.chethana?mibextid=ZbWKwL" className="text-white hover:text-blue-400" aria-label="Facebook">
      <FaFacebook className="w-8 h-8" />
    </a>
    <a href="https://www.instagram.com/kanishkachethana?igsh=N2Z5N2x4bDN4YzU5" className="text-white hover:text-blue-400" aria-label="Instagram">
      <FaInstagram className="w-8 h-8" />
    </a>
    <a href="https://wa.me/94752955301" className="text-white hover:text-blue-400" aria-label="WhatsApp">
      <FaWhatsapp className="w-8 h-8" />
    </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
