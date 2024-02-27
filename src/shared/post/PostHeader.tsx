import { CiBookmark } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";

interface PostHeader {
    saved?: boolean,
    openModal: () => void,
    children: React.ReactNode
}

export default function PostHeader({children, saved}: PostHeader){

    function handleSavePost(){
    }

    return (
        <div className="flex items-center justify-between w-full">
            {children}
            <div className={`${saved ? "hidden" : "block"} flex items-center gap-3`}>
                <button> <IoMdShareAlt style = {{fontSize: "25px", color: "#ef754c"}}/> </button>
                <button onClick={handleSavePost}> <CiBookmark style = {{fontSize: "25px", color: "#ef754c"}} /> </button>
            </div>
        </div>
    )
}
