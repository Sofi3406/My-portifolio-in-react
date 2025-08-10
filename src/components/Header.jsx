import React from 'react';
import Navbar from './NavBar';
import bg2 from '../assets/bg2.avif'; 
import { motion } from "framer-motion";
const Header = () => {
  return (
   <div 
    className="min-h-screen bg-cover bg-center flex w-full overflow-hidden" 
    style={{ backgroundImage: `url(${bg2})` }} 
    id='Header'>
      <Navbar />
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5}}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container text-center mx-auto py-20 px-4 px-6 mt-15 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl text-gray-600 font-bold">
  Hello, I'm Sofiya Yasin.<br />
  I'm a Web Developer and Graphic Designer.
</h2>
        <div className="space -x-6 mt-16 gap-4 flex justify-center">
          <p className='m-10 px-8 py-10 rounded'>
  Hello! I’m Sofiya Yasin, a computer science student in AAU, passionate Full-Stack Web Developer and Graphic Designer. 
  With expertise in both front-end and back-end development, I create seamless and dynamic web applications that prioritize user experience and efficiency.
  My journey in web development began with a fascination for creating interactive and visually appealing websites. Over the years,
   I have honed my skills in various technologies, including HTML, CSS,Tailwindcss, JavaScript,TypeScript,React, PHP, MySQL, Node.js, 
   MongoDB,Next.js and Express. I also have a strong foundation in graphic design, utilizing tools like Photoshop and Illustrator to create stunning 
   visuals that enhance user engagement.
  Additionally, I have programming knowledge in languages such as C++ and Python, allowing me to tackle diverse challenges in the tech space.

  I thrive on learning and collaborating with like-minded individuals to build impactful, scalable solutions. Whether embarking on a new project or optimizing 
  existing systems, I am committed to delivering high-quality results that make a significant difference.

  In my free time, I enjoy reading spiritual books, which enriches my understanding and inspires my work. I believe that continuous learning is essential for 
  personal and professional growth.
</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;