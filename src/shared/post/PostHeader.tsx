import { CiBookmark } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";
import useApi from "../../context/hook";
import { AccountRoles } from "../../types";
import { useSavePost, useUnSavePost } from "../../lib/Tanstackquery/queriesAndMutations";
import { Box, CircularProgress } from "@mui/material";
import { GoBookmarkFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

interface PostHeader {
    id: string
    title: string,
    children?: React.ReactNode
}

export default function PostHeader({id, children, title}: PostHeader){
    const {role, user} = useApi()
    const {isPending, mutate: savePost} = useSavePost()
    const navigate = useNavigate()
    const {isPending: isLoading, mutate: unSavePost} = useUnSavePost()
    const saved = user?.saved_posts?.find((post) => post.id === id)

    function handleSavePost(){
        if(!role){
            return navigate("/login")
        }
        window.scrollTo(0, 0);
        saved ? unSavePost(id) : savePost(id)
    }

    return (
        <div className="flex items-center justify-between w-full">
            <div className="w-full flex items-center justify-between">
                <h2 className="text-darkblue max-lg:text-lg text-xl font-palanquin font-semibold"> {title} </h2>
                {children}
            </div>
            { (role === AccountRoles.jobseeker || !role) && <div className="flex items-center gap-3">
                <button> <IoMdShareAlt  className = "text-primary w-6 h-6"/> </button>
                {isPending || isLoading ? (
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress size={20} />
                    </Box>

                ) : (
                    <button onClick={handleSavePost}> 
                        {saved ? <GoBookmarkFill className = "text-primary w-6 h-6" /> : <CiBookmark  className = "text-primary w-6 h-6" /> }
                    </button>
                )}
            </div>
            }
        </div>
    )
}
