import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import Logo from "../assets/TA_logo.jpg"

function Navbar() {

  const [openSidebar, setOpenSidebar] = useState(false)

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className='navbar'>
      <div className='firstRow'>
        <div className='leftSide'>
            <h2 id="logo">Tyler Audino</h2>
            <img src= {<Logo/>} alt="Logo of the letters T and A"/>
        </div>
        <div className='rightSide'>
          <div className='shownLinks'>
            <Link to='/'> Home </Link>
            <Link to='/About'> About </Link>
            <Link to='/Projects'> Projects </Link>
            <Link to='/Contact'> Contact </Link>
            <Link to='https://docs.google.com/document/d/15gCRM4ZKPOMjzYXz97ftzKUoQ3KKqno91AeZQ1nZQY0/edit?usp=sharing' target='_blank'>Resume</Link>
          </div>
          <button onClick={toggleSidebar}>
            <ReorderIcon/>
          </button>
          </div>
        </div>
        <hr/>
        <div className='sideBar' style={{ display: openSidebar ? 'flex' : 'none' }}>
            <Link to='/'> Home </Link>
            <Link to='/About'> About </Link>
            <Link to='/Projects'> Projects </Link>
            <Link to='/Contact'> Contact </Link>
            <Link to='https://docs.google.com/document/d/15gCRM4ZKPOMjzYXz97ftzKUoQ3KKqno91AeZQ1nZQY0/edit?usp=sharing' target='_blank'>Resume</Link>
          </div>  
    </div>
  );
}

export default Navbar