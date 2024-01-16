import { skills } from "../../../constants";
import Skill from "../../pieces/Skill";
import Layout from "./Layout";
import ModalForSkill from "./components/ModalForSkill";


export default function EditSkills() {
    return (
        <section className="w-full mt-36">
            <Layout title="Skills" ModalComponent = {
                <ModalForSkill />
            } MainComponent = {
                <div className="flex flex-col">
                    <div className="max-lg:mt-6 max-lg:mx-10 mt-10 mx-auto flex flex-wrap items-center">
                        {
                            skills.map((skill) => {
                                return (
                                    <Skill key={skill} skill={skill} />
                                )
                            })
                        }
                    </div>
                    <button className="mt-10 mx-auto w-[300px] rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-2 text-slate-100">
                        Update
                    </button>
                </div>
                }
            />
        </section>
    )
}
