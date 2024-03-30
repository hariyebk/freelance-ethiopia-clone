import { useEffect } from "react";
import { ProfileLayout } from ".";
import Bio from "../shared/Profile/Bio";
import Certifications from "../shared/Profile/Certifications";
import Education from "../shared/Profile/Education";
import Languages from "../shared/Profile/Languages";
import MainServices from "../shared/Profile/MainServices";
import PortfolioLinks from "../shared/Profile/PortfolioLinks";
import Skills from "../shared/Profile/Skills";
import UserDetail from "../shared/Profile/UserDetail";
import WorkExperience from "../shared/Profile/WorkExperience";
import { useNavigate, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function JobSeekerProfile() {
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ProfileLayout MainProfile = {(
        <div className="md:w-[650px] sm:container max-sm:px-5 flex flex-col items-start">
            <div className="w-full">
                <div className="w-full h-[150px] rounded-t-2xl bg-gradient-to-r from-primary to-secondary" />
                <UserDetail />
            </div>
            <hr className="tiny_line" />
            <Skills />
            <hr className="tiny_line" />
            <Bio />
            <hr className="tiny_line" />
            <MainServices />
            <hr className="tiny_line" />
            <WorkExperience />
            <hr className="tiny_line" />
            <Education />
            <hr className="tiny_line" />
            <Certifications />
            <hr className="tiny_line" />
            <div className="hidden max-lg:block w-full">
                <PortfolioLinks />
                <hr className="tiny_line" />
                <Languages />
            </div>
        </div>
    )} SidebarLinks = {(
        <div>
            <PortfolioLinks />
            <Languages />
            {id && <div className="mt-20 ml-3">
                <button onClick={() => navigate(-1)} className="bg-stone-800 px-4 py-2 text-sm text-white rounded-md flex items-center gap-3"> 
                    <span>  <FaLongArrowAltLeft className = "w-5 h-5" /> </span>
                    <span> Go back to applications  </span>
                </button>
            </div>}
        </div>
    )}
    />
    )
}
