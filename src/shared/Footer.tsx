import { contactInfo, footerLinks} from "../constants"
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useApi from "../context/hook";
import SocialMedia from "./pieces/SocialMedia";

export default function Footer() {

    const {role} = useApi()

    return (
        <footer className="bg-[#3e3e3e] relative bottom-0 inset-x-0">
            {!role && <section>
                    <div className="flex flex-1 items-center justify-center max-sm:pl-4">
                        <div className="max-lg:mb-10 my-20 max-sm:ml-20 sm:ml-12 md:mx-20 xl:ml-24 flex max-lg:flex-col justify-between items-center max-lg:gap-10">
                            <div className="flex flex-1 max-lg:flex-row max-lg:gap-10 flex-col max-lg:-ml-16">
                                <img src="/Images/footer-logo.png" alt="footer-logo" className="h-16 w-36 object-contain" />
                                <p className="mt-5 font-montserrat text-slate-200 max-sm:text-xs max-lg:text-sm max-lg:w-[200px] text-base font-normal  max-w-[400px] max-sm:pr-5"> Powerful Freelance Marketplace System with ability to change the Users (Freelancers & Clients)</p>
                            </div>
                            <div className="flex max-sm:ml-3 max-sm:gap-3 items-center gap-10 md:ml-10 max-lg:max-w-[450px] w-[500px]">
                                {
                                    footerLinks.map((catagory) => {
                                        return (
                                            <div key={catagory.Title} className="flex flex-col gap-5 text-slate-200">
                                                <h3 className="font-bold font-palanquin max-lg:text-base text-lg"> {catagory.Title} </h3>
                                                <ul className="flex flex-col gap-2">
                                                    {catagory.link.map((link) => {
                                                        return (
                                                            <Link to={link.path} key={link.label} className="font-montserrat text-sm mb-2">
                                                                {link.label}
                                                            </Link>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="xl:mr-10 max-sm:-ml-20 sm:mx-auto">
                                {contactInfo.map((info) => {
                                    return (
                                        <div key={info.Title} className="flex flex-1 flex-col text-slate-200">
                                            <h3 className="font-bold font-palanquin text-xl mb-2"> {info.Title} </h3>
                                            <div className="flex items-center gap-3 mt-2">
                                                <FiPhoneCall />
                                                <p className=""> {info.phone}  </p>
                                            </div>
                                            <div className="flex items-center gap-3 mt-2">
                                                <CiMail />
                                                <p> {info.email} </p>
                                            </div>
                                            <div className="flex items-center gap-3 mt-2">
                                                <IoLocationOutline />
                                                <p> {info.location} </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 lg:mx-20 pb-10">
                        <hr className="bg-slate-200" />
                        <div className="flex max-lg:flex-col max-lg:gap-4 items-center justify-between text-slate-200 text-sm px-10 py-2 font-mono">
                            <p> Privacy Policy </p>
                            <p> 2023 Afriwork Inc. All right reserved </p>
                        </div>
                    </div>
                </section>
            }
            {role && <section className="w-full inset-x-0 bottom-0 h-auto">
                <div className="flex flex-1 flex-col items-center justify-center py-20">
                    <h2 className="text-xl text-white font-palanquin"> 2024 Afriworks. All right reserved </h2>
                    <div className="mt-10 flex flex-1 flex-col items-center gap-4 text-base text-white font-sans">
                        <Link to="/privacy-policy" className="hover:text-primary"> Privacy policy </Link>
                        <Link to="/help" className="hover:text-primary"> Help center </Link>
                    </div>
                    <hr className="w-full my-10 border border-white" />
                    <SocialMedia />
                </div>
            </section>
            }
        </footer>
    )
}
