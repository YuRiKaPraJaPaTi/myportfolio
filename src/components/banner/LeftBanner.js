import React from 'react'
import { useTypewriter, Cursor } from  'react-simple-typewriter'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaReact } from 'react-icons/fa';
// import { SiTailwindcss, SiFigma, SiNextdotjs } from 'react-icons/si';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["An Engineering Student"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'> 
          {/* <h4 className='text-lg text-designColor font-normal'>About Me</h4> */}
          <h1 className='text-5xl font-bold text-white'>
            Hi, I am {" "}
            <span className='text-designColor capitalize'>
              YURIKA PRAJAPATI
            </span>
          </h1>
          <h2 className='text-3xl font-bold text-white'>{" "}
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
            I am a Computer Engineering student dedicated to learning and applying new technologies. I have a strong academic foundation. I am eager to learn and grow in tech field. 
            <p>Feel free to connect with me. </p>
          </p>
        </div>
        <div className='flex justify-around'>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>
              Find me in
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
          <div>
          {/* <h2 className='text-base uppercase font-titleFont mb-4'>
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
            </span> */}
          {/* </div> */}
        </div>
        </div>
      </div>
  )
};

export default LeftBanner;