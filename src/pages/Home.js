import React from 'react'
import "../styles/Home.css"
import headShot from "../assets/Headshot_Bright.jpg";
import resume from "../assets/Tyler_Audino_Resume.pdf";

function Home() {
  const openResume = () => {
    window.open('https://docs.google.com/document/d/15gCRM4ZKPOMjzYXz97ftzKUoQ3KKqno91AeZQ1nZQY0/edit?usp=drive_link', '_blank');
  };

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/tyleraudino/', '_blank')
  }

  return (
    <div className='home page'>
      <div className='homeLeftSide'>
        <div className='homeLeftText'>
          <h1>Hello!</h1>
          <br></br>
          <h3>I'm <b>Tyler Audino</b>, an aspiring software engineer.</h3>
          <p>I'm passionate about creating programs that are centered around the user. Combining creativity with problem-solving to develop software that is intuitive and user-friendly is my goal.</p>
          <p>I would love to connect with you; I am currently looking for a Summer 2025 internship. Please fill out my contact form below or connect with me on LinkedIn! </p>
        </div>
        <br></br>
        <div className='buttonContainer'>
          <button className='green-midsize-button' onClick={openResume}>
            <p>Resume</p>
          </button>
          <button className='green-midsize-button' onClick={openLinkedin}>
            <p>LinkedIn</p>
          </button>
        </div>
      </div>
      <div className='homeRightSide'>
        <img src = {headShot} alt="Headshot of Tyler in front of a walkway covered in trees"/>
      </div>
      

    </div>
  )
}

export default Home