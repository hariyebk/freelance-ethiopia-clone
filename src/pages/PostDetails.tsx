import { useEffect } from "react";
import { useFetchPostApplications } from "../lib/Tanstackquery/queriesAndMutations";
import PostLayout from "../shared/PostLayout";
import Spinner from "../shared/pieces/Spinner";
import UserApplication from "../shared/pieces/UserApplication";
import { USER } from "../types";

export default function PostDetails(){
    const {isLoading, applications} = useFetchPostApplications()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if(isLoading){
        return (
            <Spinner />
        )
    }

    return (
        <PostLayout title="All Applications">
            <section className="pb-20">
                {!applications ? (
                    <div className="mt-20 ml-6">
                        <p className="no-posts"> No one has applied for this Job 😣 </p>
                    </div>
                ) :
                <div>
                    {applications.map((application: { applicant: USER, coverLetter: string}) => {
                        return (
                            <div key={application.applicant.id}>
                                <UserApplication applicant={application.applicant} cover_letter={application.coverLetter} />
                                <hr className="border-t border-gray-300 shadow-lg max-lg:my-5 my-2"/>
                            </div>
                        )
                    })}

                </div>
                }
            </section>
        </PostLayout>
    )
}
