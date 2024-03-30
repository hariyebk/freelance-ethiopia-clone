import { useEffect } from "react";
import { USER, status} from "../../types";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useNavigate, useParams} from "react-router-dom";
import {  useShortListApplicant } from "../../lib/Tanstackquery/queriesAndMutations";
import { Box, CircularProgress } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
    applicant: USER,
    cover_letter: string,
    handleOpenModal:  (id: string) => void
}

export default function UserApplication({applicant, cover_letter, handleOpenModal}: Props){
    const {isPending: isLoading, mutate: shortList} = useShortListApplicant()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const {id} = useParams()

    const applicationStatus = applicant.appliedTo?.find((element) => element.application.post.id == id)?.application.status

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleShortList(){
        shortList({
            postId: id!,
            userId: applicant.id
        })
    }
    function handleProfileNavigation(){
        queryClient.removeQueries({
            queryKey: ["user"]
        })
        navigate(`/applicant/${applicant.id}/profile`)
    }

    return (
        <div className="w-full mt-16 lg:pb-7 px-3">
            <div className="flex max-sm:flex-col max-sm:gap-6 max-sm:items-start items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <img src={applicant.avatar ? applicant.avatar : "/Images/userAvatar.png"} alt="user-avatar" className="rounded-full w-7 h-7 object-contain" />
                    <p className="text-black font-palanquin text-base font-semibold"> {`${applicant.firstName} ${applicant.lastName}`} </p>
                    <button onClick={handleProfileNavigation}>
                        <MdOutlineOpenInNew className="text-primary w-5 h-5" />
                    </button>
                </div>
                {applicationStatus === status.shortListed && <div className="flex items-center gap-3">
                    <FaCheckCircle className = "text-green-500 w-5 h-5" />
                    <span className="text-black text-sm font-palanquin font-semibold"> short-listed </span>
                </div>}
            </div>
            <p className="mt-6 max-sm:pr-10 text-justify lg:pl-9 pr-4 max-lg:text-sm"> {cover_letter} </p>
            {!applicant.skills ? null : <div className="mt-5 lg:pl-4 max-lg:pr-5 flex max-lg:flex-col items-center max-lg:items-start gap-3 lg:mx-6 text-black max-lg:text-xs text-sm font-montserrat">
                <p className="text-base max-lg:text-sm max-lg:text-start text-black font-palanquin font-semibold"> Skills :- </p>
                <div className="flex items-center gap-3">
                    {
                        !applicant.skills ? null :
                        applicant.skills.map((skill) => {
                            return (
                                <p key={skill}> {skill} </p>
                            )
                        })
                    }
                </div>
            </div>}
            <div className="mt-10 lg:ml-8 flex items-center gap-5">
                <button onClick={() => handleOpenModal(applicant.id)} className="bg-red-600 text-white text-sm font-palanquin max-lg:px-3 px-4 py-2 rounded-md"> 
                    Reject
                </button>
                {applicationStatus === status.pending && <button onClick={handleShortList} className="bg-stone-800 text-white text-sm font-palanquin max-lg:px-3 px-4 py-2 rounded-md"> 
                    {isLoading ? (
                        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                            <CircularProgress size={20} color="inherit" />
                        </Box>
                    ) : "Short-list"}
                </button>}
            </div>
        </div>
    )
}
