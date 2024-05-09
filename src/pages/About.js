import React from 'react'
import "../styles/About.css"
import BandPic from "../assets/UF_Band.png"

function About() {
  return (
    <div className='about'>
      <div id='container'>
        <div className='ufPhoto'>
          <img src={BandPic}/>
        </div>
        <div id="textBoxRight">
          <h1>Education</h1>
          <p>I'm currently pursuing a B.S. in Computer Science with a minor in Statistics at the University of Florida. Go Gators!</p>
        </div>
      </div>

      <div id='container'>
        <div id="textBoxLeft">
          <h1>Skills</h1>
          <h3>Technical:</h3>
          <p></p>
          <h3>Non-Technical:</h3>
          <p></p>
        </div>
        <div className='skillsImages'>
          <p>Images here</p>
        </div>
      </div>

      <div id='container'>
        <div className='funFactsImages'>
        <p>Fun fact images here</p>
        </div>

        <div id="textBoxRight"> 
        <h1>Fun Facts!</h1>
        </div>
      </div>
    </div>
  )
}

export default About