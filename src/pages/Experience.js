import React from 'react'
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience page'>
      <div className='titleBox'>
        <h2>Experience</h2>
      </div>

      <div className='halfPage'>
        <div className='stackedContainers centerVertical'>
          <div className='container'>       
                <h3 className='topMargin'>Languages</h3>
                  <p>Python - Experienced - 2.5 years</p>
                  <hr/>
                  <p>C++/C - Intermediate - 1.5 yeas </p>
                  <hr/>
                  <p>Javascript/React.js - Intermediate - 1 year</p>
                  <hr/>
                  <p>HTML/CSS - Intermediate - 1 year</p>
                  <hr/>
                  <p>Dart/Flutter - Intermediate - 3 Months</p>
                  <hr/>
                  <p>R - Intermediate - 2 Years</p>

          </div>
          <div className='container'>
                <h3 className='topMargin'>Other</h3>
                <p>Git / GitHub</p>
                <hr/>
                <p>Agile Framework</p>
                <hr/>
                <p>Jira</p>
                <hr/>
                <p>Figma</p>
                <hr/>
                <p>Chrome DevTools</p>
                <hr/>
                <p>RESTful APIs</p>
            </div>
        </div>
      </div>
        
      <div className='halfPage'>
        <div className='large container dark' id="workexp">
          <div className='leftText'>
            <p><b>HCI Research Assistant</b> - (September 2023 - Present)</p>
            <p>UF INDIE Lab </p>
            <br/>
            <p><b>Webmaster</b> - (January 2024 - Present)</p>
            <p>Kappa Kappa Psi - Alpha Eta Chapter </p>
            <br/>
            <p><b>Front Desk Assistant</b> - (August 2022 - May 2024)</p>
            <p>UF Student Engagement</p>
            <br/>
            <p><b>Application Development Intern</b> - (May 2024 - August 2024)</p>
            <p>Florida Blue </p>
            <br/>
            <p><b>Data Analyst Intern</b> - (January 2024 - May 2024)</p>
            <p>UF Active Learning Program </p>
            <br/>
            
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