import React from 'react'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { projects } from './index'
import Project from '../../pages/projects/Project'
import './projectpage.scss'
import Loader from 'react-loaders'

const ProjectPage = () => {
    const aboutArray = 'My Projects'.split('')

    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 2000)
      return () => clearTimeout(timer)
    }, [])

  return (
    <>
    <div className="container works-page">

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            Here are some selected and challenging personal projects that I have
            worked on so far which enabled me to level up my skills to a
            fascinating point that makes me feel confident in tackling more
            difficult challenges.
          </p>
      </div>  
      <div>
      <div className="section__projects-wrapper">
        {projects.map((project, index) =>{ return <div className='animie'> <Project {...project} key={index} /></div>}
        )}
        
      </div>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default ProjectPage