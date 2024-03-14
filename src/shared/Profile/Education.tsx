import TitleAndEdit from "../pieces/TitleAndEdit";
import EducationItem from "../pieces/EducationItem";
import useApi from "../../context/hook";
import { useFindUserById } from "../../lib/Tanstackquery/queriesAndMutations";
import Spinner from "../pieces/Spinner";

interface educationType {
    institute: string,
    enrolled_in: string,
    fieldOfStudy: string,
    startDate: string,
    finishedDate: string
}

export default function Education() {
    const {user} = useApi()
    const {isLoading, data} = useFindUserById()

    if(isLoading){
        return (
            <Spinner />
        )
    }
    
    return (
        <section className="profile_container pb-5">
            {data?.user ? <h3 className="mt-3 text-lg text-black font-semibold"> Education </h3> : <TitleAndEdit title="Education" routeTo="/edit-education" add={Boolean(!user?.education)} />}
            <div className="w-full">
                {data?.user ? data.user.education ? data.user.education.map((education: educationType) => {
                    return (
                        <div key={education.fieldOfStudy}>
                            <EducationItem institute={education.institute} fieldOfStudy={education.fieldOfStudy} enrolled_in={education.enrolled_in} startDate={education.startDate} finishedDate={education.finishedDate} />
                            {data.user.education && data.user.education[data.user.education?.length - 1] === education ? null : <hr className="w-full mt-5 border-0.5 border-gray-300"/>}
                        </div>
                    )

                }) : <p className="mt-6 ml-4 text-base text-gray-600"> Education background is not specified </p>
                :
                !user?.education ? (
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
