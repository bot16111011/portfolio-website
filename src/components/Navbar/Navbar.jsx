import "./navbar.scss"
import {motion} from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ()=>{
    return (
        <header className="navbar">
            <Sidebar/>
            <div className="wrapper">
               <motion.span initial={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{duration:.5}}>Raj</motion.span>
               <div className="social">
                {/* <a href="#"><img src="/facebook.png" alt="facebook"/></a> */}
                <a href="https://github.com/rajarshiverma" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><img src="/github.svg" alt=""/></a>
                <a href="https://www.linkedin.com/in/rajarshi-verma-775a10184/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><img src="/linkedin1.svg" alt=""/></a>
                <a href="https://leetcode.com/rajverma9719/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile"><img src="/leetcode.svg" alt=""/></a>
                <a href="https://www.instagram.com/rajarshi1997verma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile"><img src="/instagram.png" alt=""/></a>
                <a href="#Contact" aria-label="Contact"><img src="/call.png" alt=""/></a>
                <a className="resume-link" href="https://drive.google.com/uc?export=download&id=1C8Wbk9m1PEouUneUj_qFPv0kXoDCuQ3V" aria-label="Download resume">
                    Resume <img src="/resume1.png" alt=""/>
                </a>       

               </div> 
            </div>
        </header>
    )
}

export default Navbar

// https://leetcode.com/bot16111011/
