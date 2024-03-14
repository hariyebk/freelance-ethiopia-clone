import TitleAndEdit from "../pieces/TitleAndEdit"
import useApi from "../../context/hook"
import Skill from "../pieces/Skill"
import { useFindUserById } from "../../lib/Tanstackquery/queriesAndMutations"
import Spinner from "../pieces/Spinner"

export default function Skills() {
    const {user} = useApi()
    const {isLoading, data} = useFindUserById()

    if(isLoading){
        return (
            <Spinner />
        )
    }

    return (
        <section className="profile_container">
            {data?.user ? <h3 className="mt-3 text-lg text-black font-semibold"> Skills </h3> : <TitleAndEdit title="Skills" routeTo= "/edit-skills" add={Boolean(!user?.skills)} />}
            <div className="w-full flex flex-wrap items-start gap-2 mt-5 pr-2 pb-5">
                { data?.user ? data.user.skills ? data.user.skills.map((skill: string) => {
                    return (
                        <Skill key={skill} skill={skill} onlyShow={true} />
                    )
                }) : <p className="mt-6 ml-4 text-base text-gray-600"> No skills are specified </p> :
                
                !user?.skills ? <p className="no-posts"> You have no skills added to your profile 😣  </p> :
                    user.skills.map((skill) => {
                        return (
                            <Skill key={skill} skill={skill} onlyShow={true} />
                        )
                    })
                }
            </div>
        </section>
    )
}
