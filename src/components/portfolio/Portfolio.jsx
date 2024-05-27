import "./portfolio.scss";
import { useRef } from "react";
import {motion, useScroll,useSpring, useTransform} from "framer-motion";

const items =[
    {
        id:1,
        title:"Trading CLI",
        video:"/tradingApp.mp4",
        desc:"Crafted a robust CLI app automates the entire trading process – from fetching market data to executing orders – through Smart API, granting you control and efficiency unmatched by manual trading. Strategize and select: Filter Nifty 500 stocks using bespoke criteria, all automated thanks to the powerful Smart API. Execute with precision: Let the Smart API handle your orders while you focus on strategy refinement. Buy and sell triggers fire automatically based on your predefined rules. Gain historical insights: Seamlessly retrieve historical market data through the Smart API, empowering you to analyze trends and refine your strategies.",
    },
    {
        id:2,
        title:"Ipod",
        video:"/ipod.mp4",
        desc:"Developed a functional React app showcasing a sleek circular menu with options for Settings, Games, Music, and more. The central button acts as a gateway, while clicking individual options triggers screen transitions and hides the menu. User-friendly circular mouse movement enables effortless navigation, and menu items act as gateways back to the main hub.",
    },
    {
        id:3,
        title:"Key Logger",
        video:"/keylogger.mp4",
        desc:`Surreptitiously captures user activity, including keystrokes, system information, clipboard data, audio, and screenshots, then securely sends the logs via email. Carries out its mission by:
         Stealthily monitoring key presses and system behavior. Discreetly recording audio and taking screenshots. Encrypting the sensitive data for protection. Transmitting the encrypted logs to a designated email address. Covering its tracks by erasing local evidence.`,
    },
    {
        id:4,
        title:"Screen Recorder",
        video:"/screen.mp4",
        desc:"Crafted a Python screen recorder that captures both video and audio, synchronizing them for seamless playback. Employed OpenCV for video, PyAudio for audio, and threading for efficient simultaneous recording.",
    }
]

const Single=({item})=>{

    const ref=useRef();
    const {scrollYProgress} = useScroll({target:ref,});
    const y = useTransform(scrollYProgress,[0,1],[-100,100]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <motion.div className="imageContainer" ref={ref}>
                        <video src={item.video} alt="" loop muted
                            onMouseEnter={event => event.currentTarget.play()}
                            onMouseLeave={event => event.currentTarget.pause()}                    
                        />
                    </motion.div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href="https://github.com/rajarshiverma" target="_blank"><button>Go to Repo</button></a>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}

const Portfolio=()=>{

    const ref=useRef();
    const {scrollYProgress} = useScroll({target:ref,offset:["end end","start start"],});
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
    return (
        <div className="portfolio">
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{ scaleX }}></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}
export default Portfolio