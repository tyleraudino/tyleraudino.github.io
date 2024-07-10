import './App.css';
import { Element } from 'react-scroll';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from './components/Navbar';
import Experience from "./pages/Experience";
import Footer from "./components/Footer.js";


// COLOR PALATE: Background: #FEFAE0, Accents: Soft Black: #1D1D1E, Dark Green: #223F39, light green: #606c38
// Font inspiration: https://modernfontstacks.com/


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Element name="Home" className="section">
        <Home/>
      </Element>

      <Element name="About" className="section">
        <About/>
      </Element>

      <Element name="Experience" className='section'>
        <Experience/>
      </Element>

      <Element name="Projects" className="section">
        <Projects/>
      </Element>  

       <Element name="Contact" className="section">
        <Contact/>
      </Element>

      <Footer/>

    </div>
  );
}

export default App;
