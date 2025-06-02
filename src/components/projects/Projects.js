import React from 'react'
import Title from '../layouts/Title'; 
import { project1 } from '../../assets/index';
import { project2 } from '../../assets/index';
import { project3 } from '../../assets/index';
import { project4 } from '../../assets/index';
import { project5 } from '../../assets/index';
import { project6 } from '../../assets/index';

import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
      <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
          <Title 
            title='Visit my portfolio and keep feedbacks'
            des="My Projects"
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14'>
        <ProjectsCard 
          title="To Do List"
          des='Created a simple and user-friendly app to manage daily tasks.'
          src={project4}
          href='https://github.com/YuRiKaPraJaPaTi/TODOS'
           
          />
          
          <ProjectsCard 
          title='Nepali Sentiment Analysis'
          des='Built a machine learning model to analyze text sentiment of beauty product reviews and classify it as positive or negative.'
          src={project1}
          />
          <ProjectsCard 
            title='House Price Prediction'
            des='A predictive model to estimate house prices based on key features using regression techniques.'
            src={project2}
            
          />
          <ProjectsCard 
          title="Height Weight Prediction"
          des='A model to predict weight based on height using linear regression.'
          src={project3}
          href='https://github.com/YuRiKaPraJaPaTi/height-weight-prediction'
          />

          <ProjectsCard 
          title="Facial Key Point Detection"
          des='Implements a facial keypoint detection system using the VGG16 model that identifies key facial landmarks, such as eyes, nose, and mouth, making it applicable in various fields like facial recognition, emotion analysis, and augmented reality'
          src={project6}
          href='https://github.com/YuRiKaPraJaPaTi/facial_keypoint-training'
           
          />    
          
          <ProjectsCard 
            title='Recommendation System'
            des='A recommendation system to suggest tourist places based on user preferences and interests.'
            src={project5}
          />
          {/* <ProjectsCard /> */}
        </div>
      </section>
  )
}

export default Projects