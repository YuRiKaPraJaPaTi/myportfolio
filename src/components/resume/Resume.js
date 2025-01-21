import React from 'react'
import Title from '../layouts/Title'


const resume = () => {
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title title='Education and Skills' des='My Resume' />
      </div>
      
      <div className="w-full flex justify-center items-center py-10 bg-bodyColor">
  {/* Wrapper */}
  <div className="flex flex-wrap justify-center gap-10 max-w-5xl">
    {/* Education Section */}
    <div className="w-80 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-ShadowOne">
      <h3 className="text-xl text-designColor font-bold mb-4 text-center">Education</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Bachelor of Engineering in Computer (2020-2025)</li>
        <li>High School +2 Science (2018)</li>
        <li>Secondary Education Examination(SEE)</li>
      </ul>
    </div>

    {/* Skills Section */}
    <div className="w-80 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-ShadowOne">
      <h3 className="text-xl text-designColor font-bold mb-4 text-center">Skills</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>ReactJS</li>
        <li>Tailwind CSS</li>
        <li>MySQL</li>
        <li>Python</li>
        <li>C / C++</li>
        <li>ML</li>
      </ul>
    </div>
  </div>
</div>



    </section>
  )
}

export default resume