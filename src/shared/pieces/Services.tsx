import { Link } from "react-router-dom"
import { enterpriseOpr } from "../../constants"
import { FaPhoneAlt, FaRegCheckCircle } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { HiOutlinePaperAirplane } from "react-icons/hi2"

export default function Services() {
    return (
        <div className="max-lg:w-full w-[900px] max-lg:my-10 my-20 max-lg:px-10 max-lg:pt-5 shadow-lg border rounded-xl max-lg:h-auto h-auto pb-6 flex max-lg:flex-col lg:gap-5">
                <div className="flex flex-col mt-7 ml-7 mb-7">
                    <h3 className="text-lg font-semibold font-palanquin text-black"> Enterprise </h3>
                    <div className="max-lg:flex items-center gap-2.5 max-lg:my-2">
                        <h1 className="mt-4 max-lg:text-2xl text-4xl text-black font-bold font-palanquin"> Flexible </h1>
                        <p className="max-lg:mt-5 max-lg:mb-1 mt-2 text-primary text-xl font-bold font-palanquin "> Custom Pricing </p>
                    </div>
                    <p className="mt-3 text-black font-montserrat text-base max-w-[300px]"> Ideal for enterprise customers with unique, scalable or high volume recruitment needs. </p>
                </div>
                <hr className="lg:hidden bodrer-0.5 border-gray-300" />
                <ul className="mt-7 max-lg:px-9">
                    {enterpriseOpr.map((service) => {
                        return (
                            <li key={service} className="text-base flex items-center gap-3 max-lg:mb-2 mb-3 font-montserrat text-black"> 
                                <FaRegCheckCircle className="text-primary w-5 h-5" />
                                <span> {service} </span>
                            </li>
                        )
                    })}
                </ul>
                <hr className="lg:hidden mt-4 bodrer-0.5 border-gray-300" />
                <div className="flex flex-col gap-3 my-7 max-lg:px-8 text-sm font-palanquin">
                    <Link to={`/`} className="max-lg:text-base text-sm hover:text-primary flex items-center gap-2"> 
                        <FaPhoneAlt style = {{fontSize: "15px"}} />
                        <span> +251956666667 </span> 
                    </Link>
                    <Link to="tel:+251956666667" className="max-lg:text-base text-sm flex items-center gap-2 hover:text-primary"> 
                        <IoMdMail  style = {{fontSize: "15px"}} />
                        <span> semegn@freelanceethiopia.com </span>
                    </Link>
                    <Link to="mailto:semegn@freelanceethiopia.com" className="mt-6 w-full flex justify-center items-center gap-3 text-slate-100 bg-stone-800 rounded-full px-5 py-2"> 
                        <span> contact sales </span> 
                        <HiOutlinePaperAirplane />        
                    </Link>
                </div>
            </div>
    )
}
