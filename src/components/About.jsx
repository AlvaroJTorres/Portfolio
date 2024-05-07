import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>

        <p className='text-lg mt-20 text-justify md:text-3xl'>
          I'm a Full-Stack Web Developer with 2 years of experience coding in academic and professional
          environments. Proficient in building APIs with Ruby on Rails and using frameworks such as React for the FrontEnd.
        </p>

        <br/>

        <p className='text-lg text-justify md:text-2xl'>
          Proficient in building APIs with Ruby on Rails using PostgreSQL, Trailblazer,
          Service Objects, and Doorkeeper. Skilled in elaborating, maintaining, and optimizing Web
          Applications based on SPA, utilizing React as the framework for the FrontEnd. In my previous
          experiences I developed strong communication skills, leadership abilities, and effective
          teamwork techniques. I excel in problem-solving and possess the creativity to find innovative
          solutions. With a passion for web development and capable of efficiently managing time and
          resources while continuously seeking opportunities for professional growth.
        </p>
      </div>
    </div>
  )
}

export default About