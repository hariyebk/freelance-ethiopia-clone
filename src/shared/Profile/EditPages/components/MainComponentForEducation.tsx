import EducationItem from "../../../pieces/EducationItem";
import { FaTrash } from "react-icons/fa";

// TODO: FETCH USERS EDUCATIONS 

export default function MainComponentForEducation() {

    function handleDeleteEducation(){

    }

    return (
        <section className="mx-3 mt-6"> 
            <div className="flex items-center gap-3">
                <EducationItem Institute="Dire Dawa University" EnrolledIn="Bachlor of Science" FieldOfStudy="Chemical Enginnering" StartDate="Oct, 2018" FinishedDate="July, 2023" />
                <button onClick={handleDeleteEducation} className="hover:text-primary">
                    <FaTrash className = "w-4 h-4 text-red-600" />
                </button>
            </div>
            <hr className="w-full mt-3 border-t border-gray-200" />
            <div className="mt-3 flex items-center gap-3">
                <EducationItem Institute="Ethio-Italy poly Techinc Colledge" EnrolledIn="Bachlor of Science" FieldOfStudy="Information Technology" StartDate="Oct, 2019" FinishedDate="July, 2024" />
                <button onClick={handleDeleteEducation} className="hover:text-primary">
                    <FaTrash className = "w-4 h-4 text-red-600" />
                </button>
            </div>
            <div className="mt-10">
                <button className="btn"> Update </button>
            </div>
        </section>
    )
}
