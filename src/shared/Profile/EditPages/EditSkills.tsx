import { GoArrowLeft } from "react-icons/go";
import useApi from "../../../context/hook";
import Skill from "../../pieces/Skill";
import { useNavigate } from "react-router-dom";
import SkillForm from "./components/SkillForm";
import { useAddNewSkill } from "../../../lib/Tanstackquery/queriesAndMutations";
import Spinner from "../../pieces/Spinner";


export default function EditSkills(){
    const {isPending, mutate: addSkill} = useAddNewSkill()
    const {user} = useApi()
    const navigate = useNavigate()

    if(isPending){
        return (
            <Spinner />
        )
    }

    return (
        <section className="my-36 mx-auto max-lg:w-[450px] w-[620px] h-auto shadow-lg bg-slate-50 rounded-md pb-20 pt-10">
            <span className="max-lg:hidden bg-gray-200 cursor-pointer hover:text-primary rounded-full flex justify-center items-center ml-8 w-12 h-12" onClick={() => navigate(-1)}>
                <GoArrowLeft style = {{fontSize: "20px"}} />
            </span>
            <div className="max-lg:px-10 px-20">
                {user?.skills?.length === 9 ? (
                    <p className="no-posts"> You have reached your limits </p>
                ) : <SkillForm handleSubmit={addSkill} />}
                <div className="mt-6 flex flex-col">
                    <div className="max-lg:mt-6 max-lg:mx-10 mt-10 mx-auto flex flex-wrap items-center">
                        { !user?.skills ? null :
                            user?.skills.map((skill) => {
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
