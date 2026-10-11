import "./home.scss";
import {motion, useReducedMotion} from "framer-motion";

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
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="home">
            <div className="wrapper">
                <motion.div
                    className="textcontainer"
                    variants={textvariants}
                    initial={shouldReduceMotion ? false : "initial"}
                    animate={shouldReduceMotion ? undefined : "animate"}
                >
                    <motion.p className="eyebrow" variants={textvariants}>RAJARSHI VERMA</motion.p>
                    <motion.h1 variants={textvariants}>DevOps Engineer</motion.h1>
                    <motion.p className="role" variants={textvariants}>Python Developer</motion.p>
                    <motion.p className="role" variants={textvariants}>Web Developer</motion.p>
                    <motion.div variants={textvariants} className="buttons">
                        <motion.a variants={textvariants} className="button" href="https://github.com/rajarshiverma" target="_blank" rel="noopener noreferrer">
                            See the Latest Work
                        </motion.a>
                        <motion.a variants={textvariants} className="button" href="#Contact">
                            Contact Me
                        </motion.a>
                    </motion.div>
                    <motion.a className="scroll-link" variants={textvariants} href="#Experience" aria-label="Scroll to experience">
                        <motion.img variants={textvariants} animate={shouldReduceMotion ? undefined : "scrollButton"} src="/scroll.png" alt="" />
                    </motion.a>
                </motion.div>
            </div>
            <motion.div className="slider" variants={slidervariants} initial="initial" animate={shouldReduceMotion ? undefined : "animate"} aria-hidden="true">
                Tech enthusiast Trader 
            </motion.div>
            <div className="imagecontainer">
                <img src="/my.png" alt="Rajarshi Verma" />
            </div>
        </div>
    )
};

export default Home
