import { useEffect, useState } from "react";
import { useFetchPostApplications} from "../lib/Tanstackquery/queriesAndMutations";
import PostLayout from "../shared/PostLayout";
import Spinner from "../shared/pieces/Spinner";
import UserApplication from "../shared/pieces/UserApplication";
import { USER } from "../types";
import { IoClose } from "react-icons/io5";
import PopOverReject from "../shared/PopOverReject";
import ReasonForRejection from "../shared/pieces/ReasonForRejection";

export default function PostDetails(){
    const {isLoading, applications} = useFetchPostApplications()
    const [openModal, setOpenModal] = useState(false)
    const handleCloseModal = () => setOpenModal(false)
    const [userId, setUserId] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleOpenModal(id: string){
        window.scrollTo(0, 0);
        setUserId(id)
        setOpenModal(true)
    }

    if(isLoading){
        return (
            <Spinner />
        )
    }

    if(openModal){
        return (
            <div className="min-h-screen ">
                <PopOverReject open = {openModal} handleClose={handleCloseModal}>
                    <div className="w-full flex justify-end mr-3">
                        <button onClick={handleCloseModal}>
                            <IoClose className = "w-5 h-5" />
                        </button>
                    </div>
                    <div>
                        <ReasonForRejection userId={userId} openModal={setOpenModal} />
                    </div>
                </PopOverReject>
            </div>
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
                                <UserApplication applicant={application.applicant} cover_letter={application.coverLetter} handleOpenModal={handleOpenModal} />
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
