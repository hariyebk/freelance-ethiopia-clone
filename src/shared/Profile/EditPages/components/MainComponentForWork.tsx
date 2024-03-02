import Experience from "../../Experience";
import { FaTrash } from "react-icons/fa";

// TODO: FETCH USER WORK EXPERIENCES

export default function MainComponentForWork(){
    function handleDeleteExp(){

    }
    
    return (
        <section className="max-lg:mt-3 mt-10 max-lg:mx-3 mx-6">
            <div className="flex items-start justify-between">
                <Experience
                position="Front-end Developer"
                company="The wild Oasis"
                country= "Remote"
                startDate="June-2023"
                finishedDate="Augest-2023"
                contribution="As the Front-end developer, I took charge of the conceptualizing and development process, bringing the application to life and ensuring it met the hotel's requirements."
                />
                <button onClick={handleDeleteExp} className="hover:text-primary mt-7">
                    <FaTrash className = "w-4 h-4 text-red-600" />
                </button>
            </div>
            <hr className="w-full mt-5 border-0.5 border-gray-300"/>
            <div className="flex items-start justify-between max-lg:gap-2 gap-5 pt-6">
                <Experience
                position="Backend Developer"
                company="Natours"
                country= "Remote"
                startDate="March-2023"
                finishedDate="June-2023"
                contribution="I focused on building public and protected RESTful API endpoints using Express.js. Leveraging the power of this Nodejs framework"
                />
                <button onClick={handleDeleteExp} className="hover:text-primary mt-7 ml-10">
                    <FaTrash className = "w-4 h-4 text-red-600" />
                </button>
            </div>
            <div className="mt-10">
                <button className="btn"> Update </button>
            </div>
        </section>
    )
}
