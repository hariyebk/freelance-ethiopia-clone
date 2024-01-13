import { IoClose } from "react-icons/io5";
import Experience from "../../Experience";


export default function MainComponentForWork() {
    return (
        <section className="mt-10 max-lg:mx-3 mx-16">
            <div className="flex items-center justify-between gap-5">
                <Experience
                position="Front-end Developer"
                company="The wild Oasis"
                country= "Remote"
                startDate="June-2023"
                finishedDate="Augest-2023"
                contribution="As the Front-end developer, I took charge of the conceptualizing and development process, bringing the application to life and ensuring it met the hotel's requirements."
                />
                <button className="hover:text-primary">
                    <IoClose style = {{fontSize: "20px"}} />
                </button>
            </div>
            <hr className="w-full mt-5 border-0.5 border-gray-300"/>
            <div className="flex items-center justify-between max-lg:gap-2 gap-5">
                <Experience
                position="Backend Developer"
                company="Natours"
                country= "Remote"
                startDate="March-2023"
                finishedDate="June-2023"
                contribution="I focused on building public and protected RESTful API endpoints using Express.js. Leveraging the power of this Nodejs framework"
                />
                <button className="hover:text-primary">
                    <IoClose style = {{fontSize: "20px"}} />
                </button>
            </div>

        </section>
    )
}
