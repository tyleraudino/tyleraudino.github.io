import React from 'react'
import "../styles/Home.css"
import headShot from "../assets/Headshot_Bright.jpg";
import resume from "../assets/Tyler_Audino_Resume.pdf";

function Home() {
  const openPdf = () => {
    window.open(resume, '_blank');
  };

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/tyleraudino/', '_blank')
  }

  return (
    <div className='home'>
      <div className='homeLeftSide'>
        <div className='homeLeftText'>
          <h1>Hello!</h1>
          <br></br>
          <h3>I'm <b>Tyler Audino</b>, an aspiring software engineer.</h3>
          <p>I'm passionate about creating programs that are centered around the user. Combining creativity with problem-solving to develop software that is intuitive and user-friendly is my goal.</p>
        </div>
        <br></br>
        <div className='buttonContainer'>
          <button className='green-midsize-button' onClick={openPdf}>
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