import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoAdd } from "react-icons/io5";
import toast from "react-hot-toast";
import { AccountRoles, USER } from "../../types";

interface AccountCardProps {
    user: USER
}
export default function AcccountCard({user}: AccountCardProps) {
    const [selected, setSelected] = useState(false)
    const navigate = useNavigate()
    function handleClick(){
        if(!selected){
            return toast.error("please choose your account first")
        }
        return user?.type === AccountRoles.jobseeker ? navigate("/job") : navigate("/my-posts")
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="max-sm:w-[370px] sm:w-[400px] lg:w-[390px] h-[100px] max-lg:mt-6 mt-3 bg-white shadow-md rounded-md flex items-center justify-between gap-5 px-4 pt-7 pb-12">
                <div className="flex items-center justify-between space-x-9">
                    <img src={`${user?.avatar ? user.avatar : "./Images/userAvatar.png"}`} alt="profile-image" width={50} height={50} className="rounded-full object-contain mt-2" />
                    <div className="pt-7 flex flex-col items-start gap-3">
                        <h2 className="text-base text-darkblue font-palanquin font-medium"> {`${user?.firstName} ${user?.lastName}`} </h2>
                        <p className="text-sm text-darkblue font-palanquin font-semibold"> {user?.type} </p>
                    </div>
                </div>
                <p className={`${selected ? "bg-stone-800 ring-2 ring-primary" : "border-gray-600"} border rounded-full w-4 h-4 cursor-pointer focus:outline-none`} onClick={() => setSelected((select) => !select)} />
            </div>
            <div className="w-full max-lg:mt-7 mt-5 ml-3 flex flex-col items-start">
                <Link to="/profile-type/new" className="flex items-center gap-1">
                    <IoAdd style = {{fontSize: "22px"}} />
                    <p className="mt-1 text-sm text-stone-800 font-palanquin hover:text-primary"> Add New </p>
                </Link>
                <button onClick={handleClick} className= {`${!selected ? "bg-stone-800 opacity-50" : "bg-gradient-to-r from-primary to-secondary"} mt-14 ml-20 max-lg:text-base text-sm text-slate-100 cursor-pointer rounded-full px-7 py-2 focus-visible:outline-none`} disabled = {!selected}> Choose Account Type </button>
            </div>
        </div>
    )
}
