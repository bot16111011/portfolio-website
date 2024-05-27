import { useRef } from "react";
import "./parallax.scss";
import {motion, useScroll,useTransform} from "framer-motion";

const Parallax=({type})=>{

    const ref = useRef();

    const {scrollYProgress}= useScroll({
        target:ref,
        offset:["start start","end start"]
    });

    const ytext = useTransform(scrollYProgress,[0,1],["0%","500%"]);
    const yBg = useTransform(scrollYProgress,[0,1],["0%","100%"]);
    return (
        <div className="parallax" 
            ref={ref}
            style={{
            background:
                type ==="experience"
                ? "linear-gradient(180deg,#111132,#0c01d)"
                : type ==="portfolio"
                ? "linear-gradient(180deg,#111132,#505064)"
                : "transparent",
            }}>
            <motion.h1 style={{ y: ytext }}>{type==="experience"? "Experience": type === "portfolio" ? "Projects" : "About Me"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ x: yBg, }}className="stars"></motion.div>
            <motion.div className="planets" 
                style={{
                    y: yBg,
                    backgroundImage:`url(${
                        type==="experience"?"/planets.png": type==="portfolio"?"/sun.png":"/pix2.png"
                    })` 
                    }}>
            </motion.div>
            
        </div>
    )
}

export default Parallax