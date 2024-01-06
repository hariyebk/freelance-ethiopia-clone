import { skills } from "../../constants"
import TitleAndEdit from "../pieces/TitleAndEdit"

export default function Skills() {
    return (
        <section className="profile_container">
            <TitleAndEdit title="Skills" routeTo="/edit-skills" />
            <div className="w-full flex flex-wrap items-start mt-5 pr-2">
                {
                    skills.map((skill) => {
                        return (
                            <button key={skill} className="mt-3 rounded-full text-sm text-slate-100 mx-2 px-8 py-2 bg-gradient-to-r from-primary to-secondary"> {skill} </button>
                        )
                    })
                }
            </div>
        </section>
    )
}
