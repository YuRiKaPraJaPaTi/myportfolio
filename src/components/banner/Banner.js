import React from 'react'
import LeftBanner from './LeftBanner'
import {banner} from "../../assets/index"

const Banner = () => {
  
  return (
    <section id='about me' className='w-full h-[800px] py-20 flex border-b-[1px] font-titleFont border-b-black'>
      <LeftBanner />
      
      <div className='w-1/2 bg-red-800 flex justify-center items-center relative rounded-full'> 
        <img 
        className='w-[550px] h-[570px] object-cover rounded-full'

        src={banner} alt="banner" 
        />
        
      </div>
    </section>
  )
}

export default Banner