import "./App.scss"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import {useEffect} from "react";
import Parallax from "./components/parallax/Parallax";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Homearrow from "./components/homearrow/Homearrow";


const App = () => {

  useEffect(() => {
    document.title = 'Rajarshi Verma Portfolio';
  }, []);

  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/> 
      <Home/> 
      <Homearrow/>    
    </section>
    <section id="Experience"><Parallax type="experience"/><Homearrow/> </section>
    <section><Experience/><Homearrow/> </section>
    <section id="Projects"><Parallax type="portfolio"/><Homearrow/> </section>
    <Portfolio/><Homearrow/> 
    <section id="About"><Parallax type="about"/><Homearrow/> </section>
    <section><About/><Homearrow/> </section>
    <section id="Contact"><Navbar/><Contact/><Homearrow/> </section>

  </div>;
};

export default App;
