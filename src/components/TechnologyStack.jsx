import React from 'react'
import Css from '../assets/tech/css.png'
import Docker from '../assets/tech/docker.png'
import Git from '../assets/tech/git.png'
import Github from '../assets/tech/github.png'
import Html from '../assets/tech/html.png'
import Javascript from '../assets/tech/javascript.png'
import Mongodb from '../assets/tech/mongodb.png'
import NodeJs from '../assets/tech/node.png'
import PostgreSQL from '../assets/tech/postgresql.png'
import Python from '../assets/tech/python.png'
import ReactJs from '../assets/tech/react.png'
import Ruby from '../assets/tech/ruby.png'
import RoR from '../assets/tech/rubyonrails.png'
import Tailwindcss from '../assets/tech/tailwind.png'

const TechnologyStack = () => {
  const techs = [
    {
      src: Ruby,
      title: 'Ruby',
      style: 'shadow-red-500'

    },
    {
      src: Javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'

    },
    {
      src: Python,
      title: 'Python',
      style: 'shadow-blue-500'

    },
    {
      src: Html,
      title: 'HTML',
      style: 'shadow-orange-500'

    },
    {
      src: Css,
      title: 'CSS',
      style: 'shadow-blue-500'

    },
    {
      src: ReactJs,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      src: Tailwindcss,
      title: 'Tailwindcss',
      style: 'shadow-cyan-600'
    },
    {
      src: RoR,
      title: 'Ruby on Rails',
      style: 'shadow-red-600'

    },
    {
      src: PostgreSQL,
      title: 'PostgreSQL',
      style: 'shadow-blue-400'
    },
    {
      src: Git,
      title: 'Git',
      style: 'shadow-orange-600'
    },
    {
      src: Github,
      title: 'Github',
      style: 'shadow-gray-700'
    },
    {
      src: NodeJs,
      title: 'NodeJs',
      style: 'shadow-green-600'
    },
    {
      src: Mongodb,
      title: 'MongoDb',
      style: 'shadow-green-500'
    },
    {
      src: Docker,
      title: 'Docker',
      style: 'shadow-cyan-500'
    },
  ]
  return (
    <div name='tech' className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Technology Stack</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map((tech, index) => (
            <div key={index} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}>
              <img src={tech.src} alt={tech.title} className='w-20 mx-auto'/>
              <p className='mt-4'>{tech.title}</p>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default TechnologyStack