import { useFindPostById } from "../lib/Tanstackquery/queriesAndMutations"
import { Post, PostDescriptions } from "."
import Spinner from "../shared/pieces/Spinner"
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import useApi from "../context/hook";
import { AccountRoles } from "../types";
import { useNavigate } from "react-router-dom";


export default function EditPost(){
    const {isLoading, data} = useFindPostById()
    const [showNext, setShowNext] = useState(false)
    const {role} = useApi()
    const navigate = useNavigate()

    useEffect(() => {
        if(role !== AccountRoles.employer){
            navigate("/login")
        }
        window.scrollTo(0, 0);
    }, [role, navigate]);

    function handleClick(){
        window.scrollTo(0, 0);
        setShowNext((showNext) => !showNext)
    }

    // LOADING SPINNER
    if(isLoading){
        return (
            <Spinner />
        )
    }

    return (
        <div className="min-h-screen lg:mx-56 mb-20">
            {!showNext &&  <PostDescriptions id={data?.post.id} description={data?.post.description} responsibilities={data?.post.responsibilities.join(",")} requirments={data?.post.requirments.join(",")} qualifications={data?.post?.qualifications ?data?.post?.qualifications?.join(",") : ""} salary={data?.post?.salary ? data?.post?.salary : ""} howToApply={data?.post?.howToApply ? data?.post?.howToApply : ""} isTobeEdited={true} />}
            {!showNext ? null : (
                <Post
                isTobeEdited={true}
                id={data?.post.id}
                title={data?.post.title}
                site={data?.post.site}
                type={data?.post.type}
                level={data?.post.level}
                location={data?.post.location}
                sector={data?.post.sector}
                compensationType={data?.post.compensationType}
                gender={data?.post.gender}
                deadline={data?.post.deadline}
                quantity={data?.post.quantity}
                />
            )}
            <div className="-mt-20 max-lg:ml-36 pr-48 pb-28 w-full flex justify-end">
                <button onClick={handleClick} className="flex items-center gap-3 max-lg:px-5 px-8 py-2 bg-stone-800 text-white max-lg:text-sm text-base rounded-md ">
                {showNext && <IoIosArrowRoundBack className = "w-6 h-6 text-white hover:text-primary" />}
                <span> {showNext ? "Previous" : "Next"} </span>
                {!showNext && <IoIosArrowRoundForward className = "w-6 h-6 text-white hover:text-primary" />}
                </button>
            </div>
        </div>
    )
}
