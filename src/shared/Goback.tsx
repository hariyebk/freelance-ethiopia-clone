import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export default function Goback() {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 mt-3 hover:text-primary"> 
            <FaArrowLeft/>
            <p className="text-base font-palanquin font-semibold text-stone-600 hover:text-primary"> Go back </p>
        </button>
    )
}
