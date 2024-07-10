import React from 'react'
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience page'>
      <div className='titleBox'>
        <h2>Experience</h2>
      </div>

      <div className='halfPage'>
        <div className='stackedContainers'>
          <div className='container'>       
                <h3>Lanuages</h3>
                  <p>Python - Experienced - 2 years</p>
                  <p>C++/C - Intermediate - 1 year </p>
                  <p>Javascript/React.js - Intermediate - 6 months</p>
                  <p>HTML/CSS - Intermediate - 1 year</p>
          </div>
          <div className='container'>
                <h3>Other</h3>
                <p>Git</p>
                <p>AGILE Framework</p>
                <p>Kanban</p>
                <p>Research Computing</p>
            </div>
        </div>
      </div>
        
      <div className='halfPage'>
        <div className='largeContainer dark' id="workexp">
          <div className='header'>
            <h3>Work Experience</h3>
          </div>
          <div className='leftText'>
            <p>Florida Blue (May 2024 - Present)</p>
            <p>Application Development Intern</p>
          </div>
          <div className='rightText'>
            <p></p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Experience