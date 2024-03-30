import { IoLayers } from "react-icons/io5";
import { Link } from "react-router-dom";
import { helpJobSeeker } from "../../constants";
import useApi from "../../context/hook";

interface JobSeekerCardProps {
    isHorizontal:  boolean
}

export default function JobSeekerCard({isHorizontal}: JobSeekerCardProps) {

    const {openNav} = useApi()

    return (
        <Link to="/help/job-seeker" className={`${isHorizontal ? "hover:-translate-y-5 hover:translate transition duration-700 pt-10 px-20" : "w-[600px] h-[135px] mx-auto  flex items-center gap-10 pl-11 pt-3"} bg-white w-[300px] h-[250px] border rounded-md shadow-lg hover:border hover:border-primary ${!openNav && "z-10"}`}>
            <IoLayers className = {` ${isHorizontal ? "w-10 h-10 mb-5 ml-9" : "w-14 h-14 mb-6"} text-[#3e3e3e]`} />
            <div>
                <p className="text-lg text-stone-600 font-palanquin font-semibold"> Job Seekers </p>
                <div className="flex items-center mt-2">
                    {!isHorizontal && <img src="/Images/afriwork.jpg" alt="afriwork logo" className="w-6 h-6 object-contain" />}
                    <button className={`${!isHorizontal && "pb-4"} mt-4 ml-4 text-[#3e3e3e] text-sm font-semibold`}>
                        {`${helpJobSeeker.length} articles`}
                    </button>
                </div>
            </div>
        </Link>
    )
}
