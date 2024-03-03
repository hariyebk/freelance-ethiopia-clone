import { GoArrowLeft } from "react-icons/go";
import useApi from "../../../context/hook";
import Skill from "../../pieces/Skill";
import { useNavigate } from "react-router-dom";
import SkillForm from "./components/SkillForm";
import { skills } from "../../../constants";


export default function EditSkills(){
    const {user} = useApi()
    const navigate = useNavigate()

    return (
        <section className="my-36 mx-auto max-lg:w-[450px] w-[620px] h-auto shadow-lg bg-slate-50 rounded-md pb-28 pt-10">
            <span className="max-lg:hidden bg-gray-200 cursor-pointer hover:text-primary rounded-full flex justify-center items-center ml-8 w-12 h-12" onClick={() => navigate(-1)}>
                <GoArrowLeft style = {{fontSize: "20px"}} />
            </span>
            <div className="max-lg:px-10 px-20">
                {user?.skills?.length === 8 ? (
                    <p className="no-posts"> You have reached your limits </p>
                ) : <SkillForm />}
                <div className="mt-3 flex flex-col">
                    <div className="max-lg:mt-6 max-lg:mx-10 mt-10 mx-auto flex flex-wrap items-center">
                        { skills.map((skill) => {
                                    return (
                                        <Skill key={skill} skill={skill} />
                                    )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
