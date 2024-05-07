import React from 'react'
import { portfolio } from '../data/store'

const Portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-gray-800 to-black w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid auto-rows-fr sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0'>
          {portfolio.map((project, index) => (
            <div key={index} className='flex flex-col justify-evenly items-center gap-4 shadow-md shadow-gray-600 rounded-lg'>
              <h3 className='text-2xl'>{project.title}</h3>
              <img src={project.image} alt={project.title} className='rounded-md duration-200 hover:scale-105 h-3/4 w-full'/>
              <div className='flex items-center justify-center'>
                {project.deploy_status && 
                  <button className='px-6 py-3 m-4 duration-200 hover:scale-105'>
                    <a
                      href={project.deploy_link}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Demo
                    </a>
                  </button>}
                <button className='px-6 py-3 m-4 duration-200 hover:scale-105'>
                  <a 
                    href={project.repo_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Portfolio