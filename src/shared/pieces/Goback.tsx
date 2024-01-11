import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"

export default function Goback() {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(-1)} className="flex items-center cursor-pointer gap-2 mt-3 hover:text-primary"> 
            <FaLongArrowAltLeft style = {{fontSize: "20px"}}/>
            <p className="text-base font-palanquin font-semibold text-stone-600 hover:text-primary"> Go back </p>
        </div>
    )
}
