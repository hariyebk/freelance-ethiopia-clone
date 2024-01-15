import { FaLongArrowAltLeft } from "react-icons/fa";
// import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom"

export default function Goback() {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(-1)} className="flex items-center cursor-pointer gap-2 mt-3 hover:text-primary"> 
            <FaLongArrowAltLeft style = {{fontSize: "20px"}}/>
            <p className="text-base font-palanquin font-semibold text-stone-600 hover:text-primary"> Go back </p>
            {/* <span className="max-lg:hidden bg-gray-200 cursor-pointer hover:text-primary rounded-full flex justify-center items-center w-16 h-16" onClick={() => navigate(-1)}>
                <GoArrowLeft style = {{fontSize: "20px"}} />
            </span> */}
        </div>
    )
}
