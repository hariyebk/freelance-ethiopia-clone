import TitleAndEdit from "../pieces/TitleAndEdit";
import EducationItem from "../pieces/EducationItem";
import useApi from "../../context/hook";

export default function Education() {
    const {user} = useApi()
    
    return (
        <section className="profile_container pb-5">
            <TitleAndEdit title="Education" routeTo="edit-education" />
            {!user?.education ? (
                <p className="no-posts mt-7"> You have no education background in your profile 😣 </p>

            ) : (
                user.education.map((education) => {
                    return (
                        <div key={education.enrolled_in}>
                            <EducationItem institute={education.institute} fieldOfStudy={education.fieldOfStudy} enrolled_in={education.enrolled_in} startDate={education.startDate} finishedDate={education.finishedDate} />
                            <hr className="w-full mt-5 border-t border-gray-200" />
                        </div>
                    )
                })
            )
            }
        </section>
    )
}
