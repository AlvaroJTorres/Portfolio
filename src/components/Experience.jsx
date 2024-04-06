import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experience } from '../data/store';

const Experience = () => {
  return (
    <div name="experience" className='w-full h-fit bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
          
        </div>

        <VerticalTimeline>
          {experience.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: '#f3f4f6',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3 rem 2rem',
                }}
                contentArrowStyle={{
                  borderRigth: '0.4rem solid #9ca3af'
                }}
                date={item.duration}
                dateClassName='mx-3'
                icon={item.icon}
                iconStyle={{
                  background: 'white',
                  fontSize: '1.5rem',
                  color: 'black'
                }}
              >
                <h3 className='text-2xl font-semibold capitalize text-gray-700'>{item.title}</h3>
                <h4 className='text-gray-700 text-xl mt-1'>{item.workplace}</h4>
                <p className='text-gray-700'>{item.location}</p>
                <p className='text-gray-700'>{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience