import React from 'react'
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience page'>
      <div className='titleBox'>
        <h2>Experience</h2>
      </div>

      <div className='halfPage '>
        <div className='stackedContainers center'>
          <div className='container'>       
                <h3>Lanuages</h3>
                  <p>Python - Experienced - 2 years</p>
                  <hr/>
                  <p>C++/C - Intermediate - 1 year </p>
                  <hr/>
                  <p>Javascript/React.js - Intermediate - 6 months</p>
                  <hr/>
                  <p>HTML/CSS - Intermediate - 1 year</p>
          </div>
          <div className='container'>
                <h3>Other</h3>
                <p>Git</p>
                <hr/>
                <p>AGILE Framework</p>
                <hr/>
                <p>Kanban</p>
                <hr/>
                <p>Research Computing</p>
            </div>
        </div>
      </div>
        
      <div className='halfPage'>
        <div className='largeContainer dark' id="workexp">
          <div className='leftText'>
            <p><b>Application Development Intern</b> - (May 2024 - Present)</p>
            <p>Florida Blue </p>
            <br/>
            <p><b>Research Assistant</b> - (September 2023 - Present)</p>
            <p>UF INDIE Lab </p>
            <br/>
            <p><b>Webmaster</b> - (January 2024 - Present)</p>
            <p>Kappa Kappa Psi - Alpha Eta Chapter </p>
            <br/>
            <p><b>Data Analyst Intern</b> - (January 2024 - May 2024)</p>
            <p>UF Active Learning Program </p>
            <br/>
            <p><b>Front Desk Assistant</b> - (August 2022 - May 2024)</p>
            <p>UF Student Activities and Involvement</p>
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