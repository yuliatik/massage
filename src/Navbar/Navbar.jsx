import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Pricing from './Pricing';
import Contact from './Contact';
import Home from './Home';
import './Navbar.css';


function Navbar() {
    return  <Router>
        <nav>
          <Link to = "/home" className='link'>Startseite</Link>
          <Link to = "/about" className='link'>Unsere Leistungen</Link>
          <Link to = "/pricing" className='link'>Preise</Link>
          <Link to = "/contact" className='link'>Kontakt</Link>
        </nav>
  
        <Routes>
          <Route path = "/Contact" element = {<Home/>} />
          <Route path = "/About" element = {<About/>} />
          <Route path = "/Pricing" element = {<Pricing/>} />
          <Route path = "/Contact" element = {<Contact/>} />    
  
        </Routes>      
      </Router>
    ;
  }
  
  export default Navbar;