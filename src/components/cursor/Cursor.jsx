import { useState,useEffect } from "react";
import "./cursor.scss";
import {motion} from "framer-motion";

const Cursor=()=>{
    const [position,setPosition] = useState({x:0,y:0})
    const [enabled, setEnabled] = useState(false);

    useEffect(()=>{
        const pointerQuery = window.matchMedia("(pointer: fine)");
        const motionQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");
        const updateEnabled = () => setEnabled(pointerQuery.matches && motionQuery.matches);
        const mouseMove=(e)=>{
            if (pointerQuery.matches && motionQuery.matches) {
                setPosition({x:e.clientX,y:e.clientY});
            }
        };

        updateEnabled();
        window.addEventListener("mousemove",mouseMove);
        pointerQuery.addEventListener?.("change", updateEnabled);
        motionQuery.addEventListener?.("change", updateEnabled);

        return ()=>{
            window.removeEventListener("mousemove",mouseMove);
            pointerQuery.removeEventListener?.("change", updateEnabled);
            motionQuery.removeEventListener?.("change", updateEnabled);
        };
    },[]);

    if (!enabled) return null;

    return (
        <motion.div aria-hidden="true" className="cursor" animate={{x:position.x+20,y:position.y+20}}></motion.div>
    )
}
export default Cursor
