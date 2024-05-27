import "./about.scss";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";


const variants={
    initial:{
        x:-300,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duartion:0.5,
            staggerChildren:0.1,
        }
    }
}
const About=()=>{

    const ref = useRef();
    const isInView = useInView(ref,{margin:"-100px"});
    return (
        <motion.div className="about" ref={ref} variants={variants} initial="initial" whileInView="animate">
            <motion.h1 variants={variants}><span>Know</span> Who I'm </motion.h1>
            <motion.div className="title" variants={variants}>
                <h2><span>Hi</span> Everyone,</h2>
                <p>I am Rajarshi Verma from Shahjahanpur, India.</p>
                <p>I am currently employed as a Senior System Engineer at INFOSYS.</p>
                <p>I have completed B.Tech in Biotechnology at DR. B.R. AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY Jalandhar.</p>
            </motion.div>
            <motion.div className="textContainer" variants={variants}>
                <motion.div className="skills" variants={variants}>
                    <img src="/python.svg"/>
                    <img src="/javascript.svg"/>
                    <img src="/java.svg"/>
                    <img src="/react.svg"/>
                    <img src="/html.svg"/>
                    <img src="/css.svg"/>
                    <img src="/nodejs.svg"/>
                    <img src="/jira.svg"/>
                    <img src="/linux.svg"/>
                    <img src="/docker.svg"/>
                    <img src="/kubernetes.svg"/>
                    <img src="/aws.svg"/>
                    <img src="/terminal.svg"/>
                    <img src="/git.svg"/>
                    <img src="/azure.svg"/>
                    <img src="/mongodb.svg"/>
                    <img src="/firebase.svg"/>
                    <img src="/gitlab.svg"/> 
                    <img src="/tensorflow.svg"/>                     
                </motion.div>
                <motion.div className="explore" variants={variants}>
                    <motion.div className="wrapper" variants={variants}>
                    <motion.p variants={variants}>I love to engage in projects that allow me to further explore this field and develop my skills.</motion.p>
                    <br></br>
                    <motion.h3 variants={variants}>Fun Projects</motion.h3>
                        <motion.ul variants={variants}>
                            <motion.li variants={variants}>Pc awake script so that pc does not sleep just run to show online status.</motion.li>
                            <motion.li variants={variants}>AI Assisstant for personal use like tony stark's Jarvis</motion.li>
                            <motion.li variants={variants}>Tinder bot for automating right swipe and chatting with matches.</motion.li>
                            <motion.li variants={variants}>Recreated low spec- DOOM game using python</motion.li>
                        </motion.ul>
                    <br></br>
                    <motion.h3 variants={variants}>Achievements</motion.h3>
                        <motion.ul variants={variants}>
                            <motion.li variants={variants}>Achieved AIR 931 in GATE.</motion.li>
                            <motion.li variants={variants}>Produced Bio-Plastic from Bagasse using <em>ralstonia eutropha</em> under extreme pressure and temperature and inhibiting nutrients.</motion.li>
                            <motion.li variants={variants}>SEBI certified Stock dealer for euity and derivatives.</motion.li>
                        </motion.ul>
                    <motion.span variants={variants}>In addition to my core interests, I also enjoy reading mangas and watching tech reviews </motion.span>
                    </motion.div>
                    <motion.a href="https://leetcode.com/rajverma9719/" target="_blank">
                        <motion.button whileTap={{scale:".95"}} variants={variants}>Competitetive Leetcode Profile</motion.button>
                    </motion.a>
                    <motion.a href="https://leetcode.com/bot16111011/" target="_blank">
                        <motion.button whileTap={{scale:".95"}} variants={variants}>General Leetcode Profile</motion.button>
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
export default About
