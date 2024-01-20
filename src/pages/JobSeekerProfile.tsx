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

export default function JobSeekerProfile() {
    return (
        <ProfileLayout MainProfile = {(
            <div className="flex flex-col items-start">
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
            </div>
        )} />
    )
}
