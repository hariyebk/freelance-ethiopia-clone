import useApi from "../../context/hook"
import { useFindUserById } from "../../lib/Tanstackquery/queriesAndMutations"
import Spinner from "../pieces/Spinner"
import TitleAndEdit from "../pieces/TitleAndEdit"
import Experience, { ExperienceProps } from "./Experience"

export default function WorkExperience() {
    const {user} = useApi()
    const {isLoading, data} = useFindUserById()
    
    if(isLoading){
        return (
            <Spinner />
        )
    }

    return (
        <section className="profile_container pb-5">
            {data?.user ? <h3 className="mt-3 text-lg text-black font-semibold"> Work Experience </h3> : <TitleAndEdit title="Work Experience" routeTo= "/edit-workExperiences" add={Boolean(!user?.experiences)} />}
            {/* Experience */}
            {data?.user ? data.user.experiences ? data.user.experiences.map((experience: ExperienceProps) => {
                return (
                    <div key={experience.company}>
                        <Experience
                        position={experience.position}
                        company={experience.company}
                        location= {experience.location}
                        startDate={experience.startDate}
                        finishedDate={experience.finishedDate}
                        contribution={experience.contribution}
                        />
                        {/* If this item is the last one in the array, skip it */}
                        {data.user.experiences && data.user.experiences[data.user.experiences?.length - 1] === experience ? null : <hr className="w-full mt-5 border-0.5 border-gray-300"/>}
                    </div>
                )

            }) : <p className="mt-6 ml-4 text-base text-gray-600"> Work Experiences are not specified </p>
            :
            !user?.experiences ? (
                <p className="mt-10 no-posts"> You have no Experiences added to your profile 😣  </p>
            ) :
            user.experiences.map((experience) => {
                return (
                    <div key={experience.company}>
                        <Experience
                        position={experience.position}
                        company={experience.company}
                        location= {experience.location}
                        startDate={experience.startDate}
                        finishedDate={experience.finishedDate}
                        contribution={experience.contribution}
                        />
                        {user.experiences && user.experiences[user.experiences?.length - 1] === experience ? null : <hr className="w-full mt-5 border-0.5 border-gray-300"/>}
                    </div>
                )
            })}
        </section>
    )
}
