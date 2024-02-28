import { useLocation} from "react-router-dom";
import {POST1, POST2 } from "../../types";
import PostSubHeader from "../post/PostSubHeader";
import { UrlPaths } from "../../constants";


interface PostCardProps {
    post?: POST1 & POST2 & {
        id: string,
        created_at: string
    }, 
    Header: React.ReactNode,
    MainSection: React.ReactNode
}

export default function PostCard({post, Header, MainSection}: PostCardProps){
    const {pathname} = useLocation()

    if(!post){
        return (
            <div className="m-10">
                { pathname === UrlPaths.myposts ? <p className="no-posts"> You have no posts 😣 </p> : 
                    pathname === UrlPaths.savedPosts ? <p className="no-posts mt-8 -ml-5"> You have no saved posts </p> :
                    <p className="no-posts"> No posts found 😣 </p> 
                }
            </div>
        )
    }
    
    return (
        <div className="flex flex-col items-start mt-10 max-lg:mx-2 ml-4 mr-3">
            {/* HEADER */}
            {Header}
            {/* SUB-HEADER */}
            <PostSubHeader postedBy={post?.postedBy} created_at={post?.created_at} location={post?.location} />
            {/* POST-MAIN-SECTION */}
            {MainSection}
        </div>
    )
}
