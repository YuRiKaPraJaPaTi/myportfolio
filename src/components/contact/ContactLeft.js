import React from 'react'
import {contact} from '../../assets/index'
import { FaFacebookF, FaLinkedinIn, FaGithub} from 'react-icons/fa';

const ContactLeft = () => {
  return (
    <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-ShadowOne flex flex-col gap-8'>
            <img 
              className='w-full h-64 object-cover rounded-lg  mb-2'
              src={contact} alt='src' 
            />
            <div className='flex flex-col gap-4'>
              <h3 className='text-3xl font-bold text-white'>
                YURIKA PRAJAPATI
              </h3>

              <p className='text-lg font-normal text-gray-400'>
                Currently a Student
              </p>
              
              <p className='text-base text-gray-400 tracking-wide'>
                Pursuing Bachelor's Degree in Compter Engineering at Khwopa College of Engineering.
              </p>
              
              <p className='text-base text-gray-400 flex items-center gap-2'>
                Phone : <span className='text-lightText'>+977 9818254372</span>
              </p>

              <p className='text-base text-gray-400 flex items-center gap-2'>
                Email : {""}
                <span className='text-lightText'>prajapatiyurika@gmail.com</span>
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-base uppercase font-titleFont mb-4'>
                Get in touch
              </h2>
              <div className='flex gap-4'>
                <span className='bannerIcon'>
                  <FaFacebookF />
                </span>
                <a className='bannerIcon'
                  href='https://www.linkedin.com/in/yurika-prajapati-4222742a1'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FaLinkedinIn />
                </a>
                <span className='bannerIcon'> 
                   <FaGithub />
                </span>
              </div>
            </div>
          </div>
  )
}

export default ContactLeft