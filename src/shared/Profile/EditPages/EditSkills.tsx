import { GoArrowLeft } from "react-icons/go";
import { IoAddSharp } from "react-icons/io5";
import Skill from "../../pieces/Skill";
import { useNavigate } from "react-router-dom";
import { skills } from "../../../constants";
import { useState } from "react";
import Goback from "../../pieces/Goback";
import PopOver from "../../PopOver";

export default function EditSkills() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const navigate = useNavigate()
    return (
        <section className="w-full min-h-screen mb-20">
            <div className="lg:hidden mt-10 mb-14 ml-10">
                <Goback />
            </div>
            <div className="max-lg:mt-10 mt-20 mx-auto max-lg:w-[400px] w-[900px] h-auto bg-white border border-gray-100 shadow-md rounded-lg">
                <div className="max-lg:mb-10 mb-20 flex flex-col flex-1 items-start max-lg:px-6 px-10 py-8">
                    {/* HEADER */}
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <span className="max-lg:hidden bg-gray-200 cursor-pointer hover:text-primary rounded-full flex justify-center items-center w-16 h-16" onClick={() => navigate(-1)}>
                                <GoArrowLeft style = {{fontSize: "20px"}} />
                            </span>
                            <h2 className="text-xl text-stone-600 font-palanquin font-semibold"> Skills </h2>
                        </div>
                        <div className="ml-8 cursor-pointer hover:text-primary">
                            <button onClick={handleOpen} className="focus:outline-none">
                                <IoAddSharp style = {{fontSize: "30px"}} />
                            </button>
                            {/* MODAL */}
                            <PopOver open = {open} handleClose={handleClose} />
                        </div>
                    </div>
                    {/* FILTERS */}
                    <div className="w-full flex items-center gap-4 max-lg:mt-7 mt-5 lg:ml-20">
                        <button className="bg-stone-800 max-lg:px-3 px-4 py-2 rounded-3xl text-slate-100 hover:text-primary max-lg:text-xs text-sm font-palanquin">
                            Hard Skills
                        </button>
                        <button className="bg-stone-800 px-4 py-2 rounded-3xl text-slate-100 hover:text-primary max-lg:text-xs text-sm font-palanquin">
                            Soft Skills
                        </button>
                    </div>
                    {/* SKILLS */}
                    <div className="w-full max-lg:mt-10">
                        {skills.map((skill) => {
                            return (
                                <Skill key={skill} skill={skill} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
