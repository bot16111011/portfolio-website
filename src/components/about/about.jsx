import "./about.scss";
import { motion, useReducedMotion } from "framer-motion";
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
            duration:0.5,
            staggerChildren:0.1,
        }
    }
}
const About=()=>{

    const ref = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            className="about"
            ref={ref}
            variants={variants}
            initial={shouldReduceMotion ? false : "initial"}
            whileInView={shouldReduceMotion ? undefined : "animate"}
            viewport={{ once: true, amount: 0.15 }}
        >
            <motion.h1 variants={variants}><span>Know</span> Who I&apos;m </motion.h1>
            <motion.div className="title" variants={variants}>
                <h2><span>Hi</span> Everyone,</h2>
                <p>I am Rajarshi Verma from Shahjahanpur, India.</p>
                <p>I am currently employed as a Senior System Engineer at INFOSYS.</p>
                <p>I have completed B.Tech in Biotechnology at DR. B.R. AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY Jalandhar.</p>
            </motion.div>
            <motion.div className="textContainer" variants={variants}>
                <motion.div className="skills" variants={variants} aria-label="Technologies I work with">
                    <img src="/python.svg" alt="Python" loading="lazy" />
                    <img src="/javascript.svg" alt="JavaScript" loading="lazy" />
                    <img src="/java.svg" alt="Java" loading="lazy" />
                    <img src="/react.svg" alt="React" loading="lazy" />
                    <img src="/html.svg" alt="HTML" loading="lazy" />
                    <img src="/css.svg" alt="CSS" loading="lazy" />
                    <img src="/nodejs.svg" alt="Node.js" loading="lazy" />
                    <img src="/jira.svg" alt="Jira" loading="lazy" />
                    <img src="/linux.svg" alt="Linux" loading="lazy" />
                    <img src="/docker.svg" alt="Docker" loading="lazy" />
                    <img src="/kubernetes.svg" alt="Kubernetes" loading="lazy" />
                    <img src="/aws.svg" alt="Amazon Web Services" loading="lazy" />
                    <img src="/terminal.svg" alt="Terminal" loading="lazy" />
                    <img src="/git.svg" alt="Git" loading="lazy" />
                    <img src="/azure.svg" alt="Microsoft Azure" loading="lazy" />
                    <img src="/mongodb.svg" alt="MongoDB" loading="lazy" />
                    <img src="/firebase.svg" alt="Firebase" loading="lazy" />
                    <img src="/gitlab.svg" alt="GitLab" loading="lazy" />
                    <img src="/tensorflow.svg" alt="TensorFlow" loading="lazy" />
                </motion.div>
                <motion.div className="explore" variants={variants}>
                    <motion.div className="wrapper" variants={variants}>
                    <motion.p variants={variants}>I love to engage in projects that allow me to further explore this field and develop my skills.</motion.p>
                    <br></br>
                    <motion.h3 variants={variants}>Fun Projects</motion.h3>
                        <motion.ul variants={variants}>
                            <motion.li variants={variants}>Pc awake script so that pc does not sleep just run to show online status.</motion.li>
                            <motion.li variants={variants}>AI Assisstant for personal use like tony stark&apos;s Jarvis</motion.li>
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
                    <motion.span variants={variants}>In addition to my core interests, I also enjoy reading mangas and watching tech reviews</motion.span>
                    </motion.div>
                    <motion.a
                        href="https://leetcode.com/rajverma9719/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={shouldReduceMotion ? undefined : {scale:0.95}}
                        variants={variants}
                    >
                        Competetive Leetcode Profile
                    </motion.a>
                    <motion.a
                        href="https://leetcode.com/bot16111011/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={shouldReduceMotion ? undefined : {scale:0.95}}
                        variants={variants}
                    >
                        General Leetcode Profile
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
export default About
