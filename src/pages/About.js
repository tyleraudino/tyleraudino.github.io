import React from 'react'
import "../styles/About.css"
import BandPic from "../assets/UF_Band.png"

function About() {
  
  return (
    <div className='about page'>
      <div className='titleBox'>
        <h2>About</h2>
      </div>

      <div className='halfPage'>
          <img src = {BandPic} id="bandPic" alt="Tyler in a Gator Marching Band uniform playing Mellophone during a UF football game."/>
      </div>

      <div className='halfPage center'>
        <div className='stackedContainers'>
          <div className='container'>
              <h3>Education</h3>
              <p>University of Florida</p>
              <p>B.S. Computer Science</p>
              <p>Minor Statistics</p>
          </div>

          <div className='container dark' >
          <h3>Involvement</h3>
              <p>INDIE Lab</p>
              <p>Kappa Kappa Psi Honorary Fraternity</p>
              <p>UF Band Program</p>
          </div>

          <div className='container'>
          <h3>Areas of Interest</h3>
              <p>Human-Computer Interaction</p>
              <p>Data Science</p>
              <p>UI/UX Design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About