import { useEffect } from "react";
import { USER } from "../../types";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Link, useParams} from "react-router-dom";
import { useRejectApplicant } from "../../lib/Tanstackquery/queriesAndMutations";
import { Box, CircularProgress } from "@mui/material";

interface Props {
    applicant: USER,
    cover_letter: string
}

export default function UserApplication({applicant, cover_letter}: Props){
    const {isPending, mutate: reject} = useRejectApplicant()
    const {id} = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleReject(){
        reject({
            postId: id!,
            userId: applicant.id
        })
    }

    return (
        <div className="w-full mt-16 lg:pb-7 px-3">
            <div className="flex items-center gap-3">
                <img src={applicant.avatar ? applicant.avatar : "/Images/userAvatar.png"} alt="user-avatar" className="rounded-full w-7 h-7 object-contain" />
                <p className="text-black font-palanquin text-base font-semibold"> {`${applicant.firstName} ${applicant.lastName}`} </p>
                <Link to={`/applicant/${applicant.id}/profile`}>
                    <MdOutlineOpenInNew className="text-primary w-5 h-5" />
                </Link>
            </div>
            <p className="mt-6 text-justify lg:pl-9 pr-4 max-lg:text-sm"> {cover_letter} </p>
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
            <div className="mt-10 lg:ml-8">
                <button onClick={handleReject} className="bg-red-600 text-white text-sm font-palanquin max-lg:px-3 px-4 py-2 rounded-md"> 
                    { isPending ? (
                        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                            <CircularProgress size={20} color="inherit" />
                        </Box>
                    ) : "Reject" }
                </button>
            </div>
        </div>
    )
}
