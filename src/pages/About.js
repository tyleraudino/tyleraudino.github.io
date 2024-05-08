import React from 'react'
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
      <div className='first'>
        <div className='resume'>
          <p>You can find my resume here.</p>
        </div>
        <div className='education'>
          <h1>Education</h1>
        </div>
      </div>

      <div className='second'>
        <div className='skills'>
          <h1>Skills</h1>
        </div>
        <div className='skillsImages'>
          <p>Images here</p>
        </div>
      </div>

      <div className='third'>
        <div className='funFactsImages'>
        <p>Fun fact images here</p>
        </div>

        <div className='funFacts'> 
        <h1>Fun Facts!</h1>
        </div>
      </div>
    </div>
  )
}

export default About