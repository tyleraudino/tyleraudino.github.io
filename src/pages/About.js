import React from 'react'
import "../styles/About.css"
import BandPic from "../assets/UF_Band.png"
import pythonLogo from "../assets/Python-logo.png"

function About() {
  return (
    <div className='about'>
      <div id='container'>
        <div className='ufPhoto'>
          <img src={BandPic} alt="Tyler in a Gator Marching Band uniform, playing mellophone on the UF football field at halftime."/>
        </div>
        <div id="textBoxRight">
          <h1>Education</h1>
          <p>I'm currently pursuing a B.S. in Computer Science with a minor in Statistics at the University of Florida!</p>
          <ul> 
            <li>Expected May 2026</li>
            <li>GPA: 3.88</li>
          </ul>
          <p id="tiny">Involvement:</p>
          <ul>
            <li>INDIE Lab</li>
            <li>Kappa Kappa Psi Honorary Fraternity</li>
            <li>UF Band Program</li>
          </ul>
          <p id="tiny">Relevant Completed Courses:</p>
          <ul>
            <li>Data Structures and Algorithms </li>
            <li>Programming Fundamentals 1 & 2</li>
            <li>Computer Organization</li>
          </ul>
          <h2> Go Gators!</h2>
        </div>
      </div>

      <div id='container'>
        <div id="textBoxLeft">
          <h1>Skills</h1>
          <h3>Technical:</h3>
          <ul>
            <li>Python (NumPy, Pandas, Plot.ly)</li>
            <li>Javascript (React.js, Node.js)</li>
            <li>C++/C (SFML)</li>
            <li>HTML/CSS</li>
            <li>Git</li>
          </ul>
          <h3>Non-Technical:</h3>
          <ul>
            <li>AGILE Framework</li>
            <li>Kanban</li>
            <li>Communication</li>
            <li>Problem Solving</li>
          </ul>
        </div>
        <div className='skillsImages'>
          <img src={pythonLogo} alt="The Python programming language logo" id="python"/>
        </div>
      </div>

      <div id='container'>
        <div className='funFactsImages'>
        <p>Fun fact images here</p>
        </div>

        <div id="textBoxRight"> 
        <h1>Fun Facts!</h1>
        <ul>
          <li>I've played the French horn for 8 years and the mellophone for 6 years!</li>
          <li>I founded <a href='https://www.depop.com/tyxplr/' target="_blank" rel="noopener noreferrer">my own buisness</a> at 15, selling upcycled and gently-loved clothing online.</li>
          <li>I've taught myself how to crochet and sew as a hobby!</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default About