import './App.css';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// COLOR PALATE: Background: #FEFAE0, Accents: Soft Black: #1D1D1E, Dark Green: #223F39, light green: #606c38
// Font inspiration: https://modernfontstacks.com/


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Projects" exact element={<Projects/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
