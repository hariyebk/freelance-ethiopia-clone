import TitleAndEdit from "../pieces/TitleAndEdit";
import EducationItem from "../pieces/EducationItem";
import useApi from "../../context/hook";

export default function Education() {
    const {user} = useApi()
    
    return (
        <section className="profile_container pb-5">
            <TitleAndEdit title="Education" routeTo="/edit-education" add={Boolean(!user?.education)} />
            <div className="w-full">
                {!user?.education ? (
                    <p className="no-posts mt-7"> You have no education background in your profile 😣 </p>

                ) : (
                    user.education.map((education) => {
                        return (
                            <div key={education.fieldOfStudy}>
                                <EducationItem institute={education.institute} fieldOfStudy={education.fieldOfStudy} enrolled_in={education.enrolled_in} startDate={education.startDate} finishedDate={education.finishedDate} />
                                {user.education && user.education[user.education?.length - 1] === education ? null : <hr className="w-full mt-5 border-0.5 border-gray-300"/>}
                            </div>
                        )
                    })
                )
                }
            </div>
        </section>
    )
}
