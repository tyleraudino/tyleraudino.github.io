import React from 'react'
import "../styles/Home.css"
import headShot from "../assets/Headshot_Bright.jpg";

function Home() {
  return (
    <div className='home'>
      <div className='homeLeftSide'>
        <h1>Hello!</h1>
        <p>My Name is Tyler Audino and I'm an aspiring software engineer.</p>
        <p>Write something about how you love comp sci and being well rounded here. Yadda yadda Yadda. 
          Write something about how you love comp sci and being well rounded here. Yadda yadda Yadda. 
          Write something about how you love comp sci and being well rounded here. Yadda yadda Yadda</p>
      </div>
      <div className='homeRightSide'>
        <img src = {headShot} alt="Headshot of Tyler in front of a walkway covered in trees"/>
      </div>
      

    </div>
  )
}

export default Home