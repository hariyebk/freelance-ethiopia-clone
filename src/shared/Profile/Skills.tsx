import TitleAndEdit from "../pieces/TitleAndEdit"
import useApi from "../../context/hook"
import Skill from "../pieces/Skill"

export default function Skills() {
    const {user} = useApi()

    return (
        <section className="profile_container">
            {<TitleAndEdit title="Skills" routeTo= "/edit-skills" add={Boolean(!user?.skills)} />}
            <div className="w-full flex flex-wrap items-start gap-2 mt-5 pr-2 pb-5">
                { !user?.skills ? <p className="no-posts"> You have no skills added to your profile 😣  </p> :
                    user.skills.map((skill) => {
                        return (
                            <Skill skill={skill} onlyShow={true} />
                        )
                    })
                }
            </div>
        </section>
    )
}
