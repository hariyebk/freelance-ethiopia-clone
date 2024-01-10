import Bio from "../shared/Profile/Bio"
import Certifications from "../shared/Profile/Certifications"
import Education from "../shared/Profile/Education"
import Languages from "../shared/Profile/Languages"
import MainServices from "../shared/Profile/MainServices"
import PortfolioLinks from "../shared/Profile/PortfolioLinks"
import Skills from "../shared/Profile/Skills"
import UserDetail from "../shared/Profile/UserDetail"
import WorkExperience from "../shared/Profile/WorkExperience"

export default function ProfilePage() {
    // const params = useParams()
    
    return (
        <section className="w-full min-h-screen">
            <div className="flex gap-20 mt-20 max-lg:mx-5 mx-40">
                <div className="max-lg:w-full w-[85%] h-full mb-48 shadow-lg">
                    <div className="flex flex-col items-start">
                        <div className="w-full h-[150px] rounded-t-2xl bg-gradient-to-r from-primary to-secondary" />
                        <UserDetail />
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
                </div>
                <div className="hidden lg:flex flex-col items-center">
                    <PortfolioLinks />
                    <Languages />
                </div>
            </div>
        </section>
    )
}
