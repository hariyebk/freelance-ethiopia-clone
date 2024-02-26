import { CiBookmark } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";
import { AccountRoles } from "../../types";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import useApi from "../../context/hook";
import { useNavigate } from "react-router-dom";

interface PostHeader {
    id?: string,
    title?: string,
    saved?: boolean,
    openModal: () => void,
}

export default function PostHeader({id, title, saved, openModal}: PostHeader){
    const {role} = useApi()
    const navigate = useNavigate()

    function handleEditPost(){
        navigate(`/edit-post/${id}`)
    }

    function handleSavePost(){
    }

    return (
        <div className="flex items-center justify-between w-full">
            <div className="w-full flex items-center justify-between">
                <h2 className="text-darkblue max-lg:text-lg text-xl font-palanquin font-semibold"> {title || "Accountant"} </h2>
                { role === AccountRoles.employer && <div className="flex items-center gap-7">
                        <button onClick={handleEditPost}>
                            <FaEdit className = "text-blue-600 w-5 h-5" />
                        </button>
                        <button onClick={openModal}>
                            <FaTrash className = "text-red-600 w-5 h-5" />
                        </button>
                    </div>  
                }
            </div>
            <div className={`${saved ? "hidden" : "block"} flex items-center gap-3`}>
                <button> <IoMdShareAlt style = {{fontSize: "25px", color: "#ef754c"}}/> </button>
                <button onClick={handleSavePost}> <CiBookmark style = {{fontSize: "25px", color: "#ef754c"}} /> </button>
            </div>
        </div>
    )
}
