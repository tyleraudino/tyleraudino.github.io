import React, {useState} from 'react';
import { Link, Element } from 'react-scroll'
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
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
            <img src={Logo} alt="Logo of the letters T and A"/>
        </div>
        <div className='rightSide'>
          <div className='shownLinks'>
            <Link to="Home" smooth={true} duration={500}>Home</Link>
            <Link to="About" smooth={true} duration={500}>About</Link>
            <Link to="Experience" smooth={true} duration={500}>Experience</Link>
            <Link to="Projects" smooth={true} duration={500}>Projects</Link>
            <Link to="Contact" smooth={true} duration={500}>Contact</Link>
          </div>
          <button onClick={toggleSidebar}>
            <ReorderIcon/>
          </button>
          </div>
        </div>
        <hr/>
        <div className='sideBar' style={{ display: openSidebar ? 'flex' : 'none' }}>
        <Link to="Home" smooth={true} duration={500}>Home</Link>
            <Link to="About" smooth={true} duration={500}>About</Link>
            <Link to="Projects" smooth={true} duration={500}>Projects</Link>
            <Link to="Contact" smooth={true} duration={500}>Contact</Link>
            <Link to='https://docs.google.com/document/d/15gCRM4ZKPOMjzYXz97ftzKUoQ3KKqno91AeZQ1nZQY0/edit?usp=sharing' target='_blank'>Resume</Link>
          </div>  
    </div>
  );
}

export default Navbar