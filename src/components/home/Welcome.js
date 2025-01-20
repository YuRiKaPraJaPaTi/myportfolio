import React from 'react'

const Welcome = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-bodyColor text-white">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio!</h1>
      
      {/* Subtitle */}
      <p className="text-lg mb-8 text-center px-6">
        Explore my work, projects, and skills. I'm excited to share my journey with you.
      </p>
    </div>
  )
}

export default Welcome