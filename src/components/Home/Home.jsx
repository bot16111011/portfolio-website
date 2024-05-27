import React, { useState } from 'react';
import "./home.scss";
import {motion} from "framer-motion";

const textvariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
     scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
     }
}

const slidervariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            duration:20,
            repeatType:"mirror",
            repeat:Infinity,
        },
    },
}

const Home=()=>{

    const [imageSrc, setImageSrc] = useState("/my.png");

    // const handleMouseOver = () => {
    //     if (window.innerWidth >= 1366) {
    //         setImageSrc("/dab.png");
    //     }
    // };

    // const handleMouseOut = () => {
    //     if (window.innerWidth >= 1366) {
    //         setImageSrc("/my2.png");
    //     }
    // };

    return (
        <div className="home">
            <div className="wrapper">
                <motion.div className="textcontainer" variants={textvariants} initial="initial" animate="animate">
                    <motion.h2 variants={textvariants}>RAJARSHI VERMA</motion.h2>
                    <motion.h1 id="heading" variants={textvariants}> DevOps Engineer  </motion.h1>
                    <motion.h1 id="heading" variants={textvariants}> Python Developer </motion.h1>
                    <motion.h1 id="heading" variants={textvariants}> Web Developer </motion.h1>
                    <motion.div variants={textvariants} className="buttons">
                        <motion.a  variants={textvariants} href="https://github.com/rajarshiverma" target="_blank">
                            <motion.button variants={textvariants}>See the Latest Work</motion.button>
                        </motion.a>
                        <motion.a  variants={textvariants} href="#Contact">
                            <motion.button variants={textvariants}>Contact Me</motion.button>
                        </motion.a>
                    </motion.div>
                    <motion.img variants={textvariants} animate="scrollButton" src="/scroll.png"/>
                </motion.div>
            </div>
            <motion.div className="slider" variants={slidervariants} initial="initial" animate="animate" >
                Tech enthusiast Trader 
            </motion.div>
            <div className="imagecontainer">
                <motion.img 
                    src={imageSrc} 
                    alt="Author" 
                    // onMouseOver={handleMouseOver} 
                    // onMouseOut={handleMouseOut}
                    // style={imageSrc === "/dab.png" ? { height: "100%",position:"relative",scale:1.07 } : {}}
                />
            </div>
        </div>
    )
};

export default Home
