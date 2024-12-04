import React from 'react'
import { useTypewriter, Cursor } from  'react-simple-typewriter'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNextdotjs } from 'react-icons/si';

const Banner = () => {
  const [text] = useTypewriter({
    words: ["An Enginering Student", "Coder", "Designer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section id='home' className='w-full h-[800px] py-20 flex border-b-[1px] font-titleFont border-b-black'>
      <div className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'> 
          <h4 className='text-lg font-normal'>WELCOME</h4>
          <h1 className='text-5xl font-bold text-white'>
            Hi, I am {" "}
            <span className='text-designColor capitalize'>
              YURIKA PRAJAPATI
            </span>
          </h1>
          <h2 className='text-3xl font-bold text-white'>a {" "}
            <span>
              {text}
            </span>
            <Cursor 
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor='#ff014f'

            />
          </h2>
          <p className='text-base font-bodyFont leading-6 -tracking-wide'>
            I am a Computer Engineering student currently pursuing a Bachelor's Degree in Computer at Khwopa College of Engineering.
          </p>
        </div>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>
              Find me in
            </h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'>
                <FaFacebookF />
              </span>
              <span className='bannerIcon'>
                <FaLinkedinIn />
              </span>
              <span className='bannerIcon'> 
                <FaGithub />
              </span>
            </div>
          </div>
          <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>
            Skills on
          </h2>
          <div className='flex gap-4'>
            <span className='bannerIcon'>
              <FaReact />
            </span>
            <span className='bannerIcon'>
              <SiNextdotjs />
            </span>
            <span className='bannerIcon'> 
              <SiTailwindcss />
            </span>
          </div>
        </div>
        </div>
      </div>
      <div className='w-1/2'></div>
    </section>
  )
}

export default Banner