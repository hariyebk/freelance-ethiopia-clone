import { IoLayers } from "react-icons/io5";
import { Link } from "react-router-dom";
import { helpEmployer } from "../../constants";

interface EmployerCardProps {
    isHorizontal: boolean
}

export default function EmployerCard({isHorizontal}: EmployerCardProps){
    return (
        <Link to="/help/employer" className={`${isHorizontal ? "hover:-translate-y-5 hover:translate transition duration-700 px-24 pt-10" : "w-[600px] h-36 mx-auto flex items-center gap-10 pl-5"} bg-white w-[300px] h-[250px] border rounded-md shadow-lg hover:border hover:border-primary z-10`}>
            <IoLayers className = {`${isHorizontal ? "w-10 h-10" : "w-14 h-14"} text-primary mb-5 ml-6`} />
            <div>
                <p className="text-lg text-stone-600 font-palanquin font-semibold"> Employer </p>
                <div className="flex items-center">
                    {!isHorizontal && <img src="/Images/afriwork.jpg" alt="afriwork logo" className="w-6 h-6 object-contain" />}
                    <button className={`${!isHorizontal && "pb-4"} mt-5 ml-3 text-sm text-primary font-semibold`}>
                        {`${helpEmployer.length} articles`}
                    </button>
                </div>
            </div>
        </Link>
    )
}
