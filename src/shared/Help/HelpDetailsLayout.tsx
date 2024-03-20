import { Link } from "react-router-dom"
import HelpHeader from "./HelpHeader"
import { FaAngleRight } from "react-icons/fa"
import { CgNotes } from "react-icons/cg"
import { IoLayers } from "react-icons/io5"
import { FiUser } from "react-icons/fi"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { MdExpandMore } from "react-icons/md"
import { helpCatagories } from "../../constants"
import MsqCard from "./MsqCard"
import JobSeekerCard from "./JobSeekerCard"
import EmployerCard from "./EmployerCard"

interface HelpDetailsLayoutProps {
    label: string,
    questions: {question: string, answer: string}[],
}

export default function HelpDetailsLayout({label, questions}: HelpDetailsLayoutProps) {
    let OtherCatagories
    if(label === helpCatagories.employers){
        OtherCatagories = (
            <div className="mt-16 flex max-lg:flex-1 max-lg:flex-col items-center gap-20 max-lg:gap-10">
                <MsqCard isHorizontal={true} />
                <JobSeekerCard isHorizontal={true} />
            </div>
        )
    }
    if(label === helpCatagories.jobseekers){
        OtherCatagories = (
            <div className="mt-16 flex max-lg:flex-1 max-lg:flex-col items-center gap-20 max-lg:gap-10">
                <EmployerCard isHorizontal={true} />
                <MsqCard isHorizontal={true} />
            </div>
        )
    }
    if(label === helpCatagories.msq){
        OtherCatagories = (
            <div className="mt-16 flex max-lg:flex-1 max-lg:flex-col items-center gap-20 max-lg:gap-10">
                <JobSeekerCard isHorizontal={true} />
                <EmployerCard isHorizontal={true} />
            </div>
        )

    }

    return (
        <section className="min-h-screen mb-36">
            <HelpHeader showDetails={true} />
            <div className="flex max-lg:flex-1 max-lg:flex-col items-start max-lg:mx-7 gap-20 max-lg:gap-10">
                <div className="ml-48 max-sm:ml-10 max-md:mx-auto">
                    <div className="mt-10 flex items-center">
                        <Link to="/help" className="text-primary font-palanquin font-semibold"> All Catagories </Link>
                        <FaAngleRight className = "text-primary w-5 h-5" />
                        <p className="pl-3 text-sm text-black font-palanquin"> {label} </p>
                    </div>
                    <div className="mt-10 bg-white shadow-lg w-[320px] h-[340px] max-lg:h-[330px]">
                        <span className="w-full flex justify-end gap-2 pt-5 pr-10 max-lg:pr-5">
                            <CgNotes className = "text-primary w-5 h-5" />
                            <span className="text-sm text-black"> {questions.length} </span>
                        </span>
                        <div className="mt-10 max-lg:mt-5 flex flex-1 flex-col items-center justify-center">
                            <IoLayers className = "w-14 h-14 text-[#3e3e3e]"/>
                            <p className="mt-6 text-xl text-stone-600 font-palanquin font-semibold"> {label} </p>
                            <FiUser className = "mt-7 w-7 h-7 text-primary" />
                            <div className="flex items-center gap-3 mt-10">
                                <img src="/Images/afriwork.jpg" className="w-6 h-6 object-contain" />
                                <p className="text-sm text-stone-700 "> Freelance support </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[580px] max-lg:w-[400px] lg:mt-10 md:mx-auto">
                    {questions.map((q, i) => {
                        return (
                            <div key={i}>
                                <Accordion disableGutters elevation={0} className='mt-6 shadow-md hover:border hover:border-primary py-2 px-3'>
                                    <AccordionSummary
                                    expandIcon={<MdExpandMore />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                        <div className="flex items-center max-lg:gap-7 gap-5">
                                            <CgNotes className = "max-md:hidden text-primary w-4 h-4" />
                                            <Typography className='mb-3 text-base text-black font-palanquin'> {q.question} </Typography>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        <span className='text-sm pl-4 mx-4 my-3'> {q.answer} </span>
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`${label === helpCatagories.msq || label === helpCatagories.jobseekers ? "mt-14" : "mt-24"} flex flex-1 flex-col items-center justify-center`}>
                <h3 className="max-lg:text-xl text-2xl text-stone-600 font-palanquin font-semibold"> Other Catagories </h3>
                {OtherCatagories}
            </div>
        </section>
    )
}
