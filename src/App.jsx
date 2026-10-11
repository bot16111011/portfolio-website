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
    <Navbar/>
    <Cursor/>
    <Homearrow/>
    <section id="Homepage">
      <Home/> 
    </section>
    <section id="Experience"><Parallax type="experience"/> </section>
    <section><Experience/> </section>
    <section id="Projects"><Parallax type="portfolio"/> </section>
    <Portfolio/>
    <section id="About"><Parallax type="about"/> </section>
    <section><About/> </section>
    <section id="Contact"><Contact/> </section>

  </div>;
};

export default App;
