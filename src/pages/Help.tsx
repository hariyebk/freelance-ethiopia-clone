import { useEffect, useState } from "react";
import HelpCards from "../shared/Help/HelpCards";
import HelpHeader from "../shared/Help/HelpHeader";

export default function Help() {

    const [showHorizontal, setShowHorizontal] = useState(true)
    const [showVertical, setShowVertical] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleHorizontal(){
        setShowHorizontal(true)
        setShowVertical(false)
    }

    function handleVertical(){
        setShowVertical(true)
        setShowHorizontal(false)
    }

    return (
        <section className="min-h-screen mb-44">
            {/* Header */}
            <HelpHeader showHorizontal={showHorizontal} showVertical={showVertical} handleHorizontal={handleHorizontal} handleVertical={handleVertical} />
            {/* CARDS */}
            <HelpCards isHorizontal={showHorizontal} />
        </section>
    )
}
