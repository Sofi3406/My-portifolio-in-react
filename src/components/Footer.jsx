import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <div className='pt-10px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden text-white'id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          
            <p className='text-gray-400 mt-4'>Dedicated  Front-end Developer and Graphic Designer with a strong foundation in HTML, CSS,Tailwindcss, JavaScript, TypeScricpt and React. Passionate about creating user-friendly web applications and committed to continuous learning. Proficient in back-end development with skills in PHP, MySQL, Node.js, MongoDB,  Express and Next.js. Seeking opportunities to leverage my skills in a dynamic development team.
</p>
        </div>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
           <h3 className='text-white text-lg font-bold'>Sofiy Yasin</h3> 
           <ul className=' flex flex-col text-gray-400 gap-2'>
            <a href="#Header" className='text-gray-400 hover:text-white'>Home</a>
            <a href="#About" className='text-gray-400 hover:text-white'>About Me</a>
            <a href="#ContactMe" className='text-gray-400 hover:text-white'>Contact Me</a>
            <a href="#Projects" className='text-gray-400 hover:text-white'>My projects</a>
           </ul>
        </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 pt-4 text-center text-gray-500'>
    Copyright 2025 &copy; Sofiya. All Rights Reserved.
</div>
      
    </div>  
  );
}

export default Footer;
