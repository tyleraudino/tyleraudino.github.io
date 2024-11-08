import React from 'react'
import "../styles/Projects.css"
import Minesweeper from "../assets/Minesweeper.png"
import KKPsi from "../assets/kkpsiAH_logo.png"
import HIV_model from "../assets/HIV_Modeling.png"
import Pawsitive_Minds from "../assets/Pawsitive_Minds.png"
import Fashion_Assassin from "../assets/Fashion_Assassin.png"
import Bite_Back from "../assets/Bite_Back.png"

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
            <h3 className='topMargin'>Pawsitive Minds</h3>
            <img src = {Pawsitive_Minds}/>
              <div className='horizontalContainers center'>
                <a className="largeLink center" href="" target='_blank'></a>
                <a className="largeLink center" href="https://github.com/tyleraudino/PawsitiveMinds" target='_blank'>Github</a>
              </div>
              <br/>
          </div>

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
            <h3 className='topMargin'>BiteBack</h3>
            <img src = {Bite_Back}/>
              <div className='horizontalContainers center'>
                <a className="largeLink center" href="" target='_blank'></a>
                <a className="largeLink center" href="https://github.com/ashley44511/BiteBack" target='_blank'>Github</a>
              </div>
              <br/>
          </div>

          <div className='small container dark'>
            <h3 className='topMargin'>Fashion Assassin Prototype</h3>
            <img src = {Fashion_Assassin}/>
              <div className='horizontalContainers center'>
                <a className="largeLink center" href="https://www.figma.com/proto/wDpyJ8UJQiPgUHLiNUwxtA/Fashion-Assassin?node-id=155-21&node-type=canvas&t=t1ydvzUg0P4bzR2D-1&scaling=contain&content-scaling=fixed&page-id=107%3A2" target='_blank'>Protoype</a>
                <a className="largeLink center" href="https://www.figma.com/design/wDpyJ8UJQiPgUHLiNUwxtA/Fashion-Assassin?node-id=107-2&t=JAsFs3utPMlPVTz7-1" target='_blank'>Figma</a>
              </div> 
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