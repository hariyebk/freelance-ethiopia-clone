import { IoMdShareAlt } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { HowToApply, jobDescription, jobRequirments, jobResponsibilities } from "../../constants"
import JobParts from "./JobParts";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import useApi from "../../context/hook";
import { AccountRoles, POST1, POST2 } from "../../types";
import PopOver from "../PopOver";
import { changeDateFromIsoToNormal, formatDateString, formatDistanceFromNow } from "../../utils/helpers";


interface PostCardProps {
    saved?: boolean,
    applied?: boolean,
    post?: POST1 & POST2 & {
        id: string,
        created_at: string
    }
}
export default function PostCard({saved, applied, post}: PostCardProps){
    const {role} = useApi()
    const navigate = useNavigate()
    const [expand, setExpand] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const closeModal = () => setOpenModal(false) 
    const handleOpenModal = () => setOpenModal(true)
    // TODO: GET THE ID OF THE POST
    const fakePostId = "65411d9672cba7889d66"
    function handleDeletePost(){
        // TODO: Delete the post
        closeModal()
    }
    function handleEditPost(){
        navigate(`/edit-post/${fakePostId}`)
    }

    function handleSavePost(){

    }

    if(openModal){
        return (
            <PopOver open={true} handleClose={closeModal}>
                <div>
                    <p className="text-lg font-palanquin"> Are you sure you want to delete this job post ? </p>
                    <div className="w-full mt-10 pr-10 flex items-center justify-end gap-7">
                        <button className="px-8 py-2 border border-stone-800 bg-stone-800 text-sm text-slate-100 rounded-full" onClick={closeModal}> cancel </button>
                        <button onClick={handleDeletePost} className="px-8 py-2 bg-red-600 text-slate-100 text-sm font-palanquin rounded-full"> Delete </button>
                    </div>
                </div>
            </PopOver>
        )
    }
    return (
        <div className="flex flex-col items-start mt-10 max-lg:mx-2 ml-4 mr-3">
            <div className="flex items-center justify-between w-full">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-darkblue max-lg:text-lg text-xl font-palanquin font-semibold"> {post?.title || "Accountant"} </h2>
                    { role === AccountRoles.employer && <div className="flex items-center gap-7">
                            <button onClick={handleEditPost}>
                                <FaEdit className = "text-blue-600 w-5 h-5" />
                            </button>
                            <button onClick={handleOpenModal}>
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
            <div className="flex items-center justify-evenly max-lg:gap-4 gap-7 mt-3 max-lg:text-xs text-sm text-fade">
                <p className="hover:text-primary"> {post?.postedBy.toUpperCase() || "Jambo bet"} </p>
                <p className="hover:text-primary"> {formatDistanceFromNow(changeDateFromIsoToNormal(post?.created_at as string)) || "posted 4 hours ago"} </p>
                <p className="uppercase hover:text-primary "> {post?.location || "Remote"}, {post?.location && "Ethiopia" }</p>
            </div>
            <div>
                <JobParts label="Description" content={post?.description || jobDescription} />
                {!expand && <div className="w-fit pb-7 mt-5 flex items-center hover:text-primary cursor-pointer" onClick={() => setExpand(true)}> 
                <MdKeyboardArrowDown style = {{fontSize: "30px"}} />
                <p> Read more</p>
                </div>}
                {expand && <section>
                    <JobParts label="Responsibilities" content={post?.responsibilities || jobResponsibilities} />
                    <JobParts label="Requirments" content={post?.requirments || jobRequirments} />
                    {post?.qualifications && <JobParts label="Qualifications" content={post.qualifications} />}
                    <JobParts label= "How to Apply" content={post?.howToApply || HowToApply} />
                    {/* Tags */}
                    <div className="flex flex-wrap justify-start max-lg:gap-5 gap-7 my-10">
                        <button className="bg-stone-800 text-slate-100 text-ellipsis rounded-full max-lg:px-4 px-8 py-2 text-sm">
                            {post?.sector || "Accounting and Finance"}
                        </button>
                        <button className="bg-stone-800 text-slate-100 rounded-full max-lg:px-4 px-8 py-2 text-sm">
                            {post?.site || "On-site"}
                        </button>
                        <button className="bg-stone-800 text-slate-100 rounded-full max-lg:px-4 px-8 py-2 text-sm">
                            {post?.type || " Fulltime"}
                        </button>
                    </div>
                    {/* Details */}
                    <div className="flex items-center justify-between max-lg:gap-3 gap-5">
                        <div className="h-16 border-l border-gray-500" />
                        <div className="flex flex-col gap-3 text-sm text-fade font-sans">
                            <p className="max-lg:text-sm text-base text-darkblue"> Compensation Type - {post?.compensationType || "Monthly"} </p>
                            {post?.salary ? <p className="text-primary max-lg:text-sm text-base font-palanquin font-bold"> {post.salary} birr </p> : <p className="text-primary  max-lg:text-sm text-base font-palanquin font-bold"> Not Specified </p>}
                        </div>
                        <div className="h-16 border-l border-gray-500" />
                        <div className="flex flex-col gap-3 text-sm text-fade font-sans">
                            <p  className="max-lg:text-sm text-base text-darkblue"> Experience-Level </p>
                            <p className="text-primary  max-lg:text-sm text-base font-palanquin font-bold"> {post?.level || "SENIOR"} </p>
                        </div>
                        <div className="h-16 border-l border-gray-500" />
                        <div className="flex flex-col gap-3 text-sm text-stone-600 font-sans">
                            <p  className="max-lg:text-sm text-base text-darkblue"> Deadline </p>
                            <p className="text-primary  max-lg:text-sm text-base font-palanquin font-bold"> {`${formatDateString(post?.deadline as string) || "January 05 2024"}`} </p>
                        </div>
                        <div className="h-16 border-l border-gray-500" />
                    </div>
                    <div className="my-16 flex items-center justify-between">
                        <div  className="flex items-center hover:text-primary cursor-pointer" onClick={() => setExpand(false)}>
                            <MdKeyboardArrowUp style = {{fontSize: "40px"}} />
                            <p> Collapse </p>
                        </div>
                        {applied ? (
                            <div className="flex items-center gap-3">
                                <FaCheckCircle style = {{fontSize: "20px", color: "#ef754c"}} />
                                <p className="text-base font-palanquin font-semibold"> Applied </p>
                            </div>

                        ) : saved && !applied ? (
                            <Link to={`/post/${post?.id}`} className="w-[200px]  text-center text-base text-slate-100 bg-gradient-to-r from-primary to-secondary max-lg:px-3 px-5 py-2 rounded-full"> see applications </Link>
                        ) : (
                        <Link to={`/post/${post?.id}/apply`} className="mr-6">
                            <button className="w-[120px] max-lg:text-sm text-base text-slate-100 bg-gradient-to-r from-primary to-secondary max-lg:px-4 px-10 py-2 rounded-full"> Apply </button>
                        </Link>
                        ) 
                        }
                    </div>
                </section>}
            </div>
        </div>
    )
}
