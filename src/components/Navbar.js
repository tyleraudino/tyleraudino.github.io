import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {

  const [openSidebar, setOpenSidebar] = useState(false)

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className='navbar'>
      <div className='firstRow'>
        <div className='leftSide'>
            <h2>Tyler Audino</h2>
        </div>
        <div className='rightSide'>
          <div className='shownLinks'>
            <Link to='/'> Home </Link>
            <Link to='/About'> About </Link>
            <Link to='/Projects'> Projects </Link>
            <Link to='/Contact'> Contact </Link>
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
          </div>  
    </div>
  );
}

export default Navbar