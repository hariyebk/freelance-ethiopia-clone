import { IoSearchOutline } from "react-icons/io5"
import { FiMenu } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import { useState } from "react";
import HelpCards from "../shared/HelpCards";

export default function Help() {

    const [showHorizontal, setShowHorizontal] = useState(true)
    const [showVertical, setShowVertical] = useState(false)

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
            <div className="w-full h-[500px] max-lg:h-[380px] bg-gradient-to-t from-primary to-secondary relative flex flex-col items-center justify-center">
                <form className="mt-10 max-lg:mt-14 pl-4 pr-5 bg-white rounded-lg flex items-center gap-3">
                    <input type="text" placeholder="search your questions" className="w-[500px] max-lg:w-[250px] py-4 max-lg:py-3 px-2 focus:border-none focus-visible:outline-none focus-visible:ring-white" />
                    <button type="submit" className="hover:text-primary">
                        <IoSearchOutline className="w-6 h-6 max-lg:w-5 max-lg:h-5" />
                    </button>
                </form>
                {/* DIRECTION ICONS */}
                <div className="max-lg:hidden mt-14 flex items-center gap-5">
                    <button onClick={handleHorizontal} className={`${showHorizontal ? "bg-white" : "bg-white opacity-50"} w-11 h-11 px-3 py-3 rounded-sm`}>
                        <IoGridOutline className="w-6 h-6 pr-1 text-primary" />
                    </button>
                    <button onClick={handleVertical} className={`${showVertical ? "bg-white" : "bg-white opacity-50"} w-11 h-11 px-3 py-3 rounded-sm`}>
                        <FiMenu className = "w-6 h-6 pr-1 text-primary" />
                    </button>
                </div>
            </div>
            {/* CARDS */}
            <HelpCards isHorizontal={showHorizontal} />
        </section>
    )
}
