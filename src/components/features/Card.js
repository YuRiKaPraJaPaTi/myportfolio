import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Card = ({title,des,icon}) => {
  return (
    <div className='w-full l px-12 h-80 py-10 rounded-lg shadow-ShadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:tp-[#1e2024] transition-colors duration-100 group'>
      <div className='h-72 overflow-y-hidden'>
        <div className='flex h-full flex-col gap-8 translate-y-14 group-hover:translate-y-0 transition-transform duration-500'>
          <div>
          <span className='text-5xl text-designColor'> {icon}</span>
          </div>

          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-titleFont text-gray-300'>
              <div>
                {title}
              </div>
            </h2>
            <p className='base'>{des}</p>
            <span className='text-2xl text-designColor'>
            <FaArrowRight />
            </span>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Card