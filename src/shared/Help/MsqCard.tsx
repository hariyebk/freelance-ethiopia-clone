import { IoLayers } from "react-icons/io5";
import { Link } from "react-router-dom";
import { msq } from "../../constants";
import useApi from "../../context/hook";

interface MsqCardProps {
    isHorizontal: boolean
}

export default function MsqCard({isHorizontal}: MsqCardProps){

    const {openNav} = useApi()
    
    return (
        <Link to="/help/maq" className={`${isHorizontal ? "hover:-translate-y-5 hover:translate transition duration-700 pt-10 px-10" : "w-[600px] h-[135px]  mx-auto flex items-center gap-10 pl-11 pt-3"} bg-white w-[300px] h-[250px] border rounded-md shadow-lg hover:border hover:border-primary ${!openNav && "z-10"}`}>
            <IoLayers className = {`${isHorizontal ? "w-10 h-10 mb-5 ml-20" : "w-14 h-14 mb-6"} text-[#3e3e3e]`} />
            <div>
                <p className="text-lg text-stone-600 font-palanquin font-semibold"> Mostly Asked Questions</p>
                <div className="flex items-center gap-3">
                    {!isHorizontal && <img src="/Images/afriwork.jpg" alt="afriwork logo" className="w-6 h-6 object-contain" />}
                    <button className={`${isHorizontal ? "px-16" : "pb-4"} mt-5 text-sm text-[#3e3e3e] font-semibold`}> 
                        {` ${msq.length} articles`}
                    </button>
                </div>
            </div>
        </Link>
    )
}
