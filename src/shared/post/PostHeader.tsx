import { CiBookmark } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";
import useApi from "../../context/hook";
import { AccountRoles } from "../../types";

interface PostHeader {
    saved?: boolean,
    title: string,
    children?: React.ReactNode
}

export default function PostHeader({children, saved, title}: PostHeader){
    const {role} = useApi()

    function handleSavePost(){
    }

    return (
        <div className="flex items-center justify-between w-full">
            <div className="w-full flex items-center justify-between">
                <h2 className="text-darkblue max-lg:text-lg text-xl font-palanquin font-semibold"> {title} </h2>
                {children}
            </div>
            { role === AccountRoles.jobseeker && <div className={`${ saved ? "hidden" : "block"} flex items-center gap-3`}>
                <button> <IoMdShareAlt style = {{fontSize: "25px", color: "#ef754c"}}/> </button>
                <button onClick={handleSavePost}> <CiBookmark style = {{fontSize: "25px", color: "#ef754c"}} /> </button>
            </div>
            }
        </div>
    )
}
