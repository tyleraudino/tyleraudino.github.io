import React from 'react'
import "../styles/Home.css"
import headShot from "../assets/Headshot_Bright.jpg";

function Home() {
  return (
    <div className='home'>
      <div className='homeLeftSide'>
        <h1>Hello!</h1>
        <p>My Name is <b>Tyler Audino</b> and I'm an aspiring software engineer.</p>
        <p>I'm passionate about creating programs that are centered around the user. Combining creativity with problem-solving to develop software that is intuitive and user-friendly is my goal.</p>
        <p>Currently, I'm an Application Development Intern at Florida Blue!</p>
      </div>
      <div className='homeRightSide'>
        <img src = {headShot} alt="Headshot of Tyler in front of a walkway covered in trees"/>
      </div>
      

    </div>
  )
}

export default Home