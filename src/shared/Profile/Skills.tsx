import { useLocation } from "react-router-dom"
import { skills } from "../../constants"
import TitleAndEdit from "../pieces/TitleAndEdit"

export default function Skills() {
    const {pathname} = useLocation()
    return (
        <section className="profile_container">
            <TitleAndEdit title="Skills" routeTo= {`${pathname}/edit-skills`} />
            <div className="w-full flex flex-wrap items-start gap-2 mt-5 pr-2">
                {
                    skills.map((skill) => {
                        return (
                            <button key={skill} className="mt-3 -ml-3 rounded-full text-sm text-slate-100 mx-2 max-lg:px-4 px-8 py-2 bg-gradient-to-r from-primary to-secondary"> {skill} </button>
                        )
                    })
                }
            </div>
        </section>
    )
}
