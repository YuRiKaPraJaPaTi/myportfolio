import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({title, des, src, href}) => {
  return (
    <div className='w-full l px-12 h-auto py-10 rounded-lg shadow-ShadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:tp-[#1e2024] transition-colors duration-100 group'>
      <div className='w-full h-{80%} overflow-hidden rounded-lg'>
        <img 
          className='w-full h-60 object-cover group-hover:scale-110 duration-100 cursor-pointer'
          src={src} alt="src" />
      </div>

      <div className='w-full mt-5 flex flex-col gap-6'> 
        <div className='flex items-center justify-between'>
          <h3 className='text-base uppercase text-designColor font-normal'>
            {title}
          </h3>
          <div className='flex gap-2'>
            <a className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-100 cursor-pointer' 
                href={href}
                target='_blank'
                rel='noopener noreferrer'>
              <FaGithub />
            </a>
            <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-100 cursor-pointer'>
              <FaGlobe />
            </span>
          </div>
        </div>
        
          <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>{des}</p>
        
      </div>


    </div>
  )
}

export default ProjectsCard