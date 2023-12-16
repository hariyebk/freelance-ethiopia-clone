import { contactInfo, footerLinks} from "../constants"
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <section className="bg-stone-700 max-container">
            <div className="flex justify-between items-center">
                <div className="my-20 max-lg:ml-12 ml-20 flex max-lg:flex-col justify-between items-center gap-10">
                    <div className="flex flex-1 max-lg:flex-row max-lg:gap-10 flex-col">
                        <img src="./Images/footer-logo.png" alt="footer-logo" className="h-16 w-36 object-contain" />
                        <p className="mt-5 font-montserrat text-slate-200 max-lg:text-sm max-lg:w-[200px] text-base font-normal  max-w-[400px]"> Powerful Freelance Marketplace System with ability to change the Users (Freelancers & Clients)</p>
                    </div>
                    <div className="flex justify-between items-center max-lg:max-w-[450px] w-[500px] gap-2">
                        {
                            footerLinks.map((catagory) => {
                                return (
                                    <div key={catagory.Title} className="flex flex-1 flex-col gap-5 text-slate-200">
                                        <h3 className="font-bold font-palanquin max-lg:text-base text-lg"> {catagory.Title} </h3>
                                        <ul>
                                            {catagory.link.map((link) => {
                                                return (
                                                    <li key={link.label} className="font-montserrat text-sm mb-2">
                                                        <a href={link.path}>
                                                            {link.label}
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="mr-10 max-lg:mx-auto">
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
    )
}
