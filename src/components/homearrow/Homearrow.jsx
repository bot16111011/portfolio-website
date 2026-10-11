import "./homearrow.scss";
import { useEffect, useState } from "react";

const Homearrow=()=>{
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const updateVisibility = () => setVisible(window.scrollY > 400);

        updateVisibility();
        window.addEventListener("scroll", updateVisibility, { passive: true });
        return () => window.removeEventListener("scroll", updateVisibility);
    }, []);

    if (!visible) return null;

    return (
        <div className="homearrow">
            <a href="#Homepage" aria-label="Back to homepage" title="Back to homepage">
                <i aria-hidden="true" className="fas fa-arrow-circle-up"></i>
            </a>
        </div>
    )
}
export default Homearrow
