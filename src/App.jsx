import './app.scss';
import Topbar from './Components/Topbar/Topbar';
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { useState } from 'react'
import Menu from "./Components/Menu/Menu";



function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div className="app">
        <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <div className="sections">
          <Intro />
          <About />
          <Contact />
        </div>
      </div>
    );
  }
  
  export default App;