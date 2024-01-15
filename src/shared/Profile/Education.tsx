import { useLocation } from "react-router-dom";
import TitleAndEdit from "../pieces/TitleAndEdit";
import EducationItem from "../pieces/EducationItem";

export default function Education() {
    const {pathname} = useLocation()
    return (
        <section className="profile_container">
            <TitleAndEdit title="Education" routeTo={`${pathname}/edit-education`} />
            <EducationItem Institute="Dire Dawa University" EnrolledIn="Bachlor of Science" FieldOfStudy="Chemical Enginnering" StartDate="Oct, 2018" FinishedDate="July, 2023" />
            <hr className="w-full mt-3 border-t border-gray-200" />
            <EducationItem Institute="Ethio-Italy poly Techinc Colledge" EnrolledIn="Bachlor of Science" FieldOfStudy="Information Technology" StartDate="Oct, 2019" FinishedDate="July, 2024" />
        </section>
    )
}
