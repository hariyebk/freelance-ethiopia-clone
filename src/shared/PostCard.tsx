import { IoMdShareAlt } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { JobQualifications, jobDescription, jobRequirments, jobResponsibilities } from "../constants";
import JobParts from "./JobParts";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";


export default function PostCard() {
    const [expand, setExpand] = useState(false)
    return (
        <div className="flex flex-col items-start mt-10 ml-4 mr-3">
            <div className="flex items-center justify-between w-full">
                <h2 className="text-darkblue text-xl font-palanquin font-semibold opacity-95"> Accountant </h2>
                <div className="flex items-center gap-3">
                    <button> <IoMdShareAlt style = {{fontSize: "25px", color: "#ef754c"}}/> </button>
                    <button> <CiBookmark style = {{fontSize: "25px", color: "#ef754c"}} /> </button>
                </div>
            </div>
            <div className="flex items-center justify-evenly gap-7 mt-3 text-sm text-fade">
                <p className="hover:text-primary"> Jambo bet </p>
                <p className="hover:text-primary"> posted 4 hours ago</p>
                <p className="uppercase hover:text-primary "> Addis Ababa, Ethiopia</p>
            </div>
            <div>
                <JobParts label="Description" content={jobDescription} />
                {!expand && <div className="pb-7 flex items-center hover:text-primary cursor-pointer" onClick={() => setExpand(true)}> 
                <MdKeyboardArrowDown style = {{fontSize: "30px"}} />
                <p> Read more</p>
                </div>}
                {expand && <section>
                    <JobParts label="Responsibilities" content={jobResponsibilities} />
                    <JobParts label="Requirments" content={jobRequirments} />
                    <JobParts label="Qualifications" content={JobQualifications} />
                    {/* Tags */}
                    <div className="flex justify-start gap-20 my-10">
                        <button className="bg-stone-800 text-slate-100 rounded-full px-8 py-2 text-sm">
                            Accounting and Finance
                        </button>
                        <button className="bg-stone-800 text-slate-100 rounded-full px-8 py-2 text-sm">
                            On-site
                        </button>
                        <button className="bg-stone-800 text-slate-100 rounded-full px-8 py-2 text-sm">
                            Fulltime
                        </button>
                    </div>
                    {/* Details */}
                    <div className="flex items-center gap-8">
                        <div className="h-16 border-l border-gray-500" />
                        <div className="flex flex-col gap-3 text-sm text-fade font-sans">
                            <p className="text-base text-darkblue"> Compensation Type - Monthly </p>
                            <p className="text-primary text-base font-palanquin font-bold"> 25,000 birr</p>
                        </div>
                        <div className="h-16 border-l border-gray-500" />
                        <div className="flex flex-col gap-3 text-sm text-fade font-sans">
                            <p  className="text-base text-darkblue"> Experience-Level </p>
                            <p className="text-primary text-base font-palanquin font-bold"> SENIOR </p>
                        </div>
                        <div className="h-16 border-l border-gray-500" />
                        <div className="flex flex-col gap-3 text-sm text-stone-600 font-sans">
                            <p  className="text-base text-darkblue"> Application-Deadline </p>
                            <p className="text-primary text-base font-palanquin font-bold"> January 05 2024 </p>
                        </div>
                        <div className="h-16 border-l border-gray-500" />
                    </div>
                    <div className="my-16 flex items-center justify-between">
                        <div  className="flex items-center hover:text-primary cursor-pointer" onClick={() => setExpand(false)}>
                            <MdKeyboardArrowUp style = {{fontSize: "40px"}} />
                            <p> Collapse </p>
                        </div>
                        <Link to={"/"} className="mr-6">
                            <button className="w-[150px] text-base text-slate-100 bg-gradient-to-r from-primary to-secondary px-10 py-2 rounded-full"> Apply </button>
                        </Link>
                    </div>
                </section>}
            </div>
        </div>
    )
}
