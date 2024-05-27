import "./navbar.scss"
import {motion} from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ()=>{
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
               <motion.span initial={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{duration:.5}}>Raj</motion.span>
               <div className="social">
                {/* <a href="#"><img src="/facebook.png" alt="facebook"/></a> */}
                <a href="https://github.com/rajarshiverma" target="_blank"><img src="/github.svg" alt="github"/></a>
                <a href="https://www.linkedin.com/in/rajarshi-verma-775a10184/" target="_blank"><img src="/linkedin1.svg" alt="linkedin"/></a>
                <a href="https://leetcode.com/rajverma9719/" target="_blank"><img src="/leetcode.svg" alt="leetcode"/></a>
                <a href="https://www.instagram.com/rajarshi1997verma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><img src="/instagram.png" alt="instagram"/></a>
                <a href="#Contact"><img src="/call.png" alt="contact"/></a>
                <a href="https://drive.google.com/file/d/1C8Wbk9m1PEouUneUj_qFPv0kXoDCuQ3V/view?usp=sharing">
                    <button>Resume <img src="/resume1.png"/></button>
                </a>       

               </div> 
            </div>
        </div>
    )
}

export default Navbar

// https://leetcode.com/bot16111011/