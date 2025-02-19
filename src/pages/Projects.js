import React from 'react'
import "../styles/Projects.css"
import Minesweeper from "../assets/Minesweeper.png"
import KKPsi from "../assets/kkpsiAH_logo.png"
import Pawsitive_Minds from "../assets/Pawsitive_Minds.png"
import Fashion_Assassin from "../assets/Fashion_Assassin.png"
import MyUFL from "../assets/MyUFL.png"
import ContactUS from "../assets/ContactUS.png"
import Depop from "../assets/Depop.png"
import Portfolio from "../assets/Portfolio.png"

function Projects() {
  return (
    <div className='projects page'>
      <div className='titleBox'>
        <h2>Personal Projects</h2>
      </div>
      <div className='titleBox'>
        <h3>Coding Projects</h3>
      </div>
      <div className='horizontalContainers bottomMargin'>

          <div className='small container dark'>
            <h3 className='topMargin'>ContactUS.ai</h3>
            <img src = {ContactUS}/>
              <div className='horizontalContainers center'>
                <a className="largeLink center" href="https://www.figma.com/proto/pVd5XTzS1NL4JlodzrbQPf/SwampHacksX?node-id=2-7382&p=f&t=NantwCYUoHfphESe-1&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=2%3A7382" target='_blank'>Prototype</a>
                <a className="largeLink center" href="https://github.com/ashley44511/contactusai" target='_blank'>Github</a>
              </div>
              <br/>
          </div>
        
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
                <a className="largeLink center" href='https://kkpsiah.org' target="_blank">Live Website</a>
                <a className="largeLink center" href="https://github.com/KKPsiAH/website" target='_blank'>Github</a>
              </div>
              <br/>
          </div>

          <div className='small container dark'>
            <h3 className='topMargin'>Portfolio Website</h3>
            <img src = {Portfolio}/>
              <div className='horizontalContainers center'>
                <a className="largeLink center" href="https://tyleraudino.com" target='_blank'>Live Website</a>
                <a className="largeLink center" href="https://github.com/tyleraudino/tyleraudino.github.io" target='_blank'>Github</a>
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

        
      </div>
      <div className='titleBox'>
        <h3>UX Design Projects</h3>
      </div>
      <div className='horizontalContainers bottomMargin'>

        <div className='small container dark'>
              <h3 className='topMargin'>Depop Redesign</h3>
              <img src = {Depop}/>
                <div className='horizontalContainers center'>
                  <a className="largeLink center" href="https://docs.google.com/presentation/d/1UyrrmwPMc0l5n2k7r3J_70Hhj8RZCo0uCsacA7tbAys/edit?usp=sharing" target='_blank'>Proposal</a>
                  <a className="largeLink center" href="https://www.figma.com/design/r3wgzaZ3LLXt9trhYUbUDZ/Depop-Redesign?node-id=0-1&t=7heQ5LSy2v1t68JB-1" target='_blank'>Figma</a>
                </div> 
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
              <h3 className='topMargin'>MyUFL Redesign</h3>
              <img src = {MyUFL}/>
                <div className='horizontalContainers center'>
                  <a className="largeLink center" href="" target='_blank'></a>
                  <a className="largeLink center" href="https://www.figma.com/design/C1fHOvyh2NXY3q8CNagFkc/MyUFL-Redesign?node-id=0-1&t=bSAOG9euhZY5NgrR-1" target='_blank'>Figma</a>
                </div> 
            </div>
      </div>
    </div>
  )
}

export default Projects