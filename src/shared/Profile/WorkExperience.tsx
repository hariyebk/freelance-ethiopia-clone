import useApi from "../../context/hook"
import TitleAndEdit from "../pieces/TitleAndEdit"
import Experience from "./Experience"

export default function WorkExperience() {
    const {user} = useApi()

    return (
        <section className="profile_container pb-5">
            <TitleAndEdit title="Work Experience" routeTo= "/edit-workExperiences" />
            {/* Experience */}
            {!user?.experiences ? (
                <p className="mt-10 no-posts"> You have no Experiences added to your profile 😣  </p>
            ) :
            user.experiences.map((experience) => {
                return (
                    <div key={experience.companyName}>
                        <Experience
                        position={experience.role}
                        company={experience.companyName}
                        location= {experience.location}
                        startDate={experience.startDate}
                        finishedDate={experience.finishedDate}
                        contribution={experience.contribution}
                        />
                        {/* If this item is the last one in the array, skip it */}
                        {user.experiences && user.experiences[user.experiences?.length - 1] === experience ? null : <hr className="w-full mt-5 border-0.5 border-gray-300"/>}
                    </div>
                )
            })}
        </section>
    )
}
