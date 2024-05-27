import {motion} from "framer-motion";
const Closebutton=({setOpen})=>{
    return (
        <button className="btn" onClick={()=>setOpen((prev)=>!prev)}>
            <motion.svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path strokeWidth="3" strokeLinecap="round" 
                variants={{
                    closed:{d:"M 2 2.5 L 20 2.5", stroke: "black"}, 
                    open:{d:"M 3 16.5 L 17 2.5", stroke: "red"},
                }}/>
                <motion.path strokeWidth="3" strokeLinecap="round" d="M 2 9.423 L 20 9.423"
                variants={{
                    closed:{opacity:1, stroke: "black"},
                    open:{opacity:0},
                }}/>
                <motion.path strokeWidth="3" strokeLinecap="round"
                variants={{
                    closed:{d:"M 2 16.346 L 20 16.346", stroke: "black"}, 
                    open:{d:"M 3 2.5 L 17 16.346", stroke: "red"},
                }}/>
            </motion.svg>        
        </button>
    )
}
export default Closebutton
