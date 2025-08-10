import React, { useEffect, useState } from 'react';
import { assets, graphicData } from '../assets/assets';
import {motion } from 'framer-motion';

function GraphichProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
     const [cardsToShow, setCardsToShow] = useState(1);
     
     useEffect(() => {
         const updateCardsToShow = () => {
             if (window.innerWidth >= 1024) {
                 setCardsToShow(graphicData.length); 
             } else {
                 setCardsToShow(1);
             }
         };
         
         updateCardsToShow();
         window.addEventListener('resize', updateCardsToShow);
         return () => window.removeEventListener('resize', updateCardsToShow);
     }, []);
 
     const nextProject = () => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % graphicData.length);
     };
 
     const prevProject = () => {
         setCurrentIndex((prevIndex) => prevIndex === 0 ? graphicData.length - 1 : prevIndex - 1);
     };
 
     return (
         <motion.div
         initial={{ opacity: 0, x: -200 }}
             transition={{ duration: 1 }}
             animate={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
         
         className='container mx-auto p-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='graphics'>
             <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Graphics Projects </h1>
             <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Designing Ideas, Creating Visual Impact - Explore Our Portfolio</p>
             {/* slider button */}
             <div className='flex justify-end items-center mb-8'>
                 <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2'> 
                     <img src={assets.left_arrow} alt="previous project" />
                 </button>
                 <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2'> 
                     <img src={assets.right_arrow} alt="next project" />
                 </button>
             </div>
             {/* Projects slider container */}
             <div className='overflow-hidden'>
                 <div className='flex gap-8 transition-transform duration-300 ease-in-out card' style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
                     {graphicData.map((project, index) => (
                         <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                             <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                             
                         </div>
                     ))}  
                 </div>
             </div>
         </motion.div>
     );
}

export default GraphichProject;
