import React from 'react'
import Title from '../layouts/Title'; 
import Card from './Card'
import { GiThink } from "react-icons/gi";
import { SiFuturelearn } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { SiHyperskill } from "react-icons/si";



const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
    <Title title="Features" des="What I Do ?" />
    
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
   <Card 
    title="Problem Solving Skills"
    des="I enjoy analyzing challenges and coming up with creative and effective solutions."
    icon={<GiThink />}
   />  
   <Card 
    title="Adaptive Learner"
    des="As a final-year engineering student, I’m always eager to learn new technologies and improve my skills."
    icon={<SiFuturelearn />}
   />  
    <Card 
    title="Team Collaboration"
    des="I work well in teams and can communicate ideas clearly to achieve best outcomes."
    icon={<RiTeamFill />}
   />  
   <Card 
    title="Technical Skills"
    des="I have knowledge of Python, React.js, and C++. I also worked on projects like sentiment analysis and facial keypoint detection."
    icon={<SiHyperskill />}
   />  
   </div>
    

  
  </section>
  )
}

export default Features