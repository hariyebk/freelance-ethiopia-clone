import { useState } from "react";
import toast from "react-hot-toast";
import { FiMenu } from "react-icons/fi";
import { IoGridOutline, IoSearchOutline } from "react-icons/io5";
import { useNavigate} from "react-router-dom";
import { helpEmployer, helpJobSeeker, msq } from "../../constants";

interface HelpHeader {
    showHorizontal?: boolean,
    showVertical?: boolean,
    handleHorizontal?: () => void,
    handleVertical?: () => void,
    showDetails?: boolean
}

export default function HelpHeader({showHorizontal, showVertical, handleHorizontal, handleVertical, showDetails}: HelpHeader) {

    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()

    function searchfromCatagories(query: string){
        const lowerQuery = query.toLowerCase()
        const isInMsq = msq.find((element) => element.question.toLowerCase() === lowerQuery || element.question.toLowerCase().startsWith(lowerQuery) || element.question.toLowerCase().endsWith(lowerQuery))
        if(isInMsq?.question) return navigate("/help/maq")
        const isInEmployer = helpEmployer.find((element) => element.question.toLowerCase() === lowerQuery || element.question.toLowerCase().startsWith(lowerQuery) || element.question.toLowerCase().endsWith(lowerQuery))
        if(isInEmployer?.question) return navigate("/help/employer")
        const isInJobSeeker = helpJobSeeker.find((element) => element.question.toLowerCase() === lowerQuery || element.question.toLowerCase().startsWith(lowerQuery) || element.question.toLowerCase().endsWith(lowerQuery))
        if(isInJobSeeker?.question) return navigate("/help/job-seeker")
        return toast.error("question not found")
    }

    function handleSearch(e?: React.FormEvent<HTMLFormElement>){
        if(e) e.preventDefault()
        if(!searchQuery) return toast.error("No query is provided")
        searchfromCatagories(searchQuery)
    }

    return (
        <div className={`w-full ${showDetails ? "h-[360px]" : "h-[480px]"} max-lg:h-[380px] bg-gradient-to-t from-primary to-secondary relative flex flex-col items-center justify-center`}>
                <form onSubmit={handleSearch} className="mt-10 max-lg:mt-14 pl-4 pr-5 bg-white rounded-lg flex items-center gap-3">
                    <input onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="search your questions" className="w-[500px] max-lg:w-[250px] py-4 max-lg:py-3 px-2 focus:border-none focus-visible:outline-none focus-visible:ring-white" />
                    <button onClick={() => handleSearch()} type="submit" className="hover:text-primary">
                        <IoSearchOutline className="w-6 h-6 max-lg:w-5 max-lg:h-5" />
                    </button>
                </form>
                {/* LAYOUT ICONS */}
                {!showDetails && <div className="max-lg:hidden mt-14 flex items-center gap-5">
                    <button onClick={handleHorizontal} className={`${showHorizontal ? "bg-white" : "bg-white opacity-50"} w-11 h-11 px-3 py-3 rounded-sm`}>
                        <IoGridOutline className="w-6 h-6 pr-1 text-primary" />
                    </button>
                    <button onClick={handleVertical} className={`${showVertical ? "bg-white" : "bg-white opacity-50"} w-11 h-11 px-3 py-3 rounded-sm`}>
                        <FiMenu className = "w-6 h-6 pr-1 text-primary" />
                    </button>
                </div>
                }
        </div>
    )
}
