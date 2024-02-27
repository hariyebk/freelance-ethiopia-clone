import {POST1, POST2 } from "../../types";
import PostSubHeader from "../post/PostSubHeader";


interface PostCardProps {
    post?: POST1 & POST2 & {
        id: string,
        created_at: string
    },
    Header: React.ReactNode,
    MainSection: React.ReactNode
}

export default function PostCard({post, Header, MainSection}: PostCardProps){
    
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
