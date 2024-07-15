import React from 'react'
import "../styles/Projects.css"
import Minesweeper from "../assets/Minesweeper.png"
import KKPsi from "../assets/kkpsiAH_logo.png"
import HIV_model from "../assets/HIV_Modeling.png"

function Projects() {
  return (
    <div className='projects page'>
      <div className='titleBox'>
        <h2>Projects</h2>
      </div>
      <div className='titleBox'>
        <h3>Personal Projects</h3>
      </div>
      <div className='horizontalContainers bottomMargin'>
        
          <div className='small container dark'>
            <h3 className='topMargin'>KKΨ - AH Website</h3>
              <img src = {KKPsi}/>
              <div className='horizontalContainers center'>
                <a className="largeLink center" href='https://kkpsiah.org' target="_blank">Live Demo</a>
                <a className="largeLink center" href="https://github.com/KKPsiAH/website" target='_blank'>Github</a>
              </div>
              <br/>
          </div>
  
        
          <div className='small container dark'>
            <h3 className='topMargin'>Minesweeper</h3>
            <img src = {Minesweeper}/>
              <div className='horizontalContainers center'>
                <a className="largeLink center" href="" target='_blank'></a>
                <a className="largeLink center" href="https://github.com/tyleraudino/minesweeper" target='_blank'>Github</a>
              </div>
              <br/>
          </div>
       
          <div className='small container dark'>
            <h3 className='topMargin'>HIV Modeling</h3>
            <img src = {HIV_model}/>
              <div className='horizontalContainers center'>
                <a className="largeLink center" href="" target='_blank'></a>
                <a className="largeLink center" href="https://github.com/tyleraudino/HIV_Interactive_Modeling" target='_blank'>Github</a>
              </div> 
          </div>
      </div>
      

    </div>
  )
}

export default Projects