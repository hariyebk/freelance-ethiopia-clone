import { useEffect } from "react";
import { USER } from "../../types";
import { MdOutlineOpenInNew } from "react-icons/md";

interface Props {
    applicant: USER,
    cover_letter: string
}

export default function UserApplication({applicant, cover_letter}: Props){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full mt-16 lg:pb-7 px-3">
            <div className="flex items-center gap-3">
                <img src={applicant.avatar ? applicant.avatar : "/Images/userAvatar.png"} alt="user-avatar" className="rounded-full w-7 h-7 object-contain" />
                <p className="text-black font-palanquin text-base font-semibold"> {`${applicant.firstName} ${applicant.lastName}`} </p>
                <MdOutlineOpenInNew className="text-primary w-5 h-5" />
            </div>
            <p className="mt-6 text-justify lg:pl-9 pr-4 max-lg:text-sm"> {cover_letter} </p>
            <div className="mt-5 lg:pl-4 max-lg:pr-5 flex max-lg:flex-col items-center max-lg:items-start gap-3 lg:mx-6 text-black max-lg:text-xs text-sm font-montserrat">
                <p className="text-base max-lg:text-start text-black font-palanquin font-semibold"> Skills :- </p>
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
            </div>
        </div>
    )
}
