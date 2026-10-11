import "./sidebar.scss";
import Links from "./Links";
import Closebutton from "./closebutton";
import { useEffect, useRef, useState } from "react";
import {motion } from "framer-motion";

const variants={
    open:{
        clipPath: "circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:20,
        }
    },
    closed:{
        clipPath: "circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:400,
            damping:40,
        }
    }
}
const Sidebar =()=>{
    const [open,setOpen] =useState(false)
    const buttonRef = useRef(null);
    const panelRef = useRef(null);
    const wasOpen = useRef(false);

    useEffect(() => {
        if (!open) {
            if (wasOpen.current) {
                buttonRef.current?.focus();
                wasOpen.current = false;
            }
            return undefined;
        }

        const frame = window.requestAnimationFrame(() => {
            panelRef.current?.querySelector("a")?.focus();
        });
        wasOpen.current = true;

        return () => window.cancelAnimationFrame(frame);
    }, [open]);

    useEffect(() => {
        if (!open) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                setOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open]);

    const closeMenu = () => setOpen(false);

    return(
        <motion.div className="sidebar" animate={open?"open":"closed"} data-open={open}>
            <motion.nav
                className="bg"
                id="primary-navigation"
                aria-label="Primary navigation"
                aria-hidden={!open}
                variants={variants}
                initial="closed"
                animate={open ? "open" : "closed"}
                ref={panelRef}
            >
                <Links open={open} onNavigate={closeMenu}/>
            </motion.nav>
            <Closebutton open={open} setOpen={setOpen} buttonRef={buttonRef}/>
        </motion.div>
    )
}

export default Sidebar
