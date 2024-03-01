import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import JobParts from "../pieces/JobParts";
import PostTags from "./PostTags";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AccountRoles, POST} from "../../types";
import { useState } from "react";
import PostDeatils from "./PostDeatils";
import useApi from "../../context/hook";

interface PostMianProps {
    post: POST
}

export default function PostMain({post}: PostMianProps){
    const [expand, setExpand] = useState(false)
    const {role, user} = useApi()
    const applied = post.applications?.find((application) => application.applicant.id === user?.id)

    return (
        <section>
            <JobParts label="Description" content={post?.description.toLowerCase()} />
            {!expand && <div className="w-fit pb-7 mt-5 flex items-center hover:text-primary cursor-pointer" onClick={() => setExpand(true)}> 
            <MdKeyboardArrowDown style = {{fontSize: "30px"}} />
            <p> Read more</p>
            </div>}
            {expand && <section>
                <JobParts label="Responsibilities" content={post?.responsibilities} />
                <JobParts label="Requirments" content={post?.requirments} />
                {post?.qualifications && <JobParts label="Qualifications" content={post?.qualifications} />}
                {post.howToApply && <JobParts label= "How to Apply" content={post?.howToApply} /> }
                {/* Tags */}
                <PostTags sector={post?.sector} site={post?.site} type={post?.type} />
                {/* Details */}
                <PostDeatils compensationType={post?.compensationType} salary={post?.salary} level={post?.level} deadline={post?.deadline}/>
                <div className="my-16 flex items-center justify-between">
                    <div  className="flex items-center hover:text-primary cursor-pointer" onClick={() => setExpand(false)}>
                        <MdKeyboardArrowUp style = {{fontSize: "40px"}} />
                        <p> Collapse </p>
                    </div>
                    {role === AccountRoles.employer ? <Link to={`/post/${post?.id}`} className="w-[200px]  text-center text-base text-slate-100 bg-gradient-to-r from-primary to-secondary max-lg:px-3 px-5 py-2 rounded-full"> see applications </Link> : applied ? (
                        <div className="flex items-center gap-3">
                            <FaCheckCircle style = {{fontSize: "20px", color: "#ef754c"}} />
                            <p className="text-base font-palanquin font-semibold"> Applied </p>
                        </div>

                    ) : (
                    <Link to={`/post/${post?.id}/apply`} className="mr-6">
                        <button className="w-[120px] max-lg:text-sm text-base text-slate-100 bg-gradient-to-r from-primary to-secondary max-lg:px-4 px-10 py-2 rounded-full"> Apply </button>
                    </Link>
                    ) 
                    
                }
                </div>
                </section>
            }
        </section>
    )
}
