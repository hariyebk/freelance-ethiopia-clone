import TitleAndEdit from "../pieces/TitleAndEdit"
import Experience from "./Experience"

export default function WorkExperience() {
    return (
        <section className="profile_container">
            <TitleAndEdit title="Work Experience" routeTo="/" />
            {/* Experience */}
            <Experience
            position="Front-end Developer"
            company="The wild Oasis"
            location={{
                country: "Remote"
            }}
            startDate="June-2023"
            finishedDate="Augest-2023"
            contribution="As the Front-end developer, I took charge of the conceptualizing and development process, bringing the application to life and ensuring it met the hotel's requirements."
            />
            <hr className="w-full mt-5 border-0.5 border-gray-300"/>
            <Experience
            position="Backend Developer"
            company="Natours"
            location={{
                country: "Remote"
            }}
            startDate="March-2023"
            finishedDate="June-2023"
            contribution="I focused on building public and protected RESTful API endpoints using Express.js. Leveraging the power of this Nodejs framework"
            />
        </section>
    )
}
