import React from 'react';
import { motion } from "framer-motion";
import { FaLinkedin, FaTelegram, FaInstagram, FaGithub, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <motion.div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto" id='ContactMe'>
      <h2 className="text-2xl font-bold mb-4">My Address</h2>
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center mb-2">
          <FaPhone className="text-blue-500 mr-2" />
          <span>+251930670088</span>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="text-blue-500 mr-2" />
          <a href="mailto:sofiyasin190@gmail.com" className="text-blue-600 hover:underline">Email</a>
        </div>
        <div className="flex items-center mb-2">
          <FaLinkedin className="text-blue-500 mr-2" />
          <a href="https://www.linkedin.com/in/sofiya-yasin-181345355/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>
        <div className="flex items-center mb-2">
          <FaTelegram className="text-blue-500 mr-2" />
          <a href="https://t.me/wisdom0746" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Telegram</a>
        </div>
        <div className="flex items-center mb-2">
          <FaInstagram className="text-blue-500 mr-2" />
          <a href="#insta" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Instagram</a>
        </div>
        <div className="flex items-center mb-2">
          <FaGithub className="text-blue-500 mr-2" />
          <a href="https://github.com/Sofi3406" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        </div>
        <div className="flex items-center mb-2">
          <FaFacebook className="text-blue-500 mr-2" />
          <a href="#facebook" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;