import React from 'react'
import LeftBanner from './LeftBanner'
import {banner} from "../../assets/index"

const Banner = () => {
  
  return (
    <section id='about me' className='w-full flex flex-col lg:flex-row py-20 border-b-[1px] font-titleFont border-b-black'>
      {/* <LeftBanner /> */}

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 text-center lg:text-left">
    <LeftBanner />
  </div>
      
      
      {/* <div className='w-1/2 bg-red-800 flex justify-center items-center relative rounded-full'> 
        <img 
        className='w-[550px] h-[570px] object-cover rounded-full'

        src={banner} alt="banner" 
        />
        
      </div> */}
      <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0">
    <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[550px] lg:h-[570px] rounded-full overflow-hidden bg-red-800 flex justify-center items-center">
      <img
        src={banner}
        alt="banner"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
    </section>
  )
}

export default Banner