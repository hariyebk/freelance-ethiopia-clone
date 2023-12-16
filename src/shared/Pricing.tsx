import { enterpriseOpr, packages } from "../constants";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

export default function Pricing() {
    return (
        <div className="mt-10 flex flex-1 flex-col items-start min-h-screen">
            <h1 className="mx-auto font-bold font-montserrat text-6xl text-black"> Our <span className="text-primary font-bold"> Pricing </span></h1>
            <p className="mt-10 text-black text-xl font-palanquin"> Our subscription packages provide an easy and cost-efficient way to find qualified job candidates quickly. The three packages offer different lengths of subscription time, so you can choose the one that meets your needs. </p>
            <div className="mt-16 flex justify-between items-start w-full gap-7">
                {packages.map((plan) => {
                    return (
                        <div key={plan.name} className="flex flex-1 flex-col  h-[360px] border rounded-lg shadow-md">
                            <h3 className="mx-auto mt-10 font-semibold uppercase text-lg text-black font-palanquin"> {plan.name} </h3>
                            <h2 className="mx-auto mt-4 text-4xl font-bold font-montserrat"> {plan.duration} </h2>
                            <p className="mx-auto mt-3 text-primary text-2xl font-semibold font-palanquin"> {plan.price} </p>
                            <p className="mx-5 mt-3 text-stone-800 font-montserrat"> {plan.describtion} </p>
                            <div className="mx-4">
                                <Link to="/login" className="mt-6 w-full flex justify-center bg-stone-800 text-slate-100 px-5 py-2 rounded-full" > Try for free </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-[900px] my-20 shadow-lg border rounded-xl h-[270px] flex gap-5">
                <div className="flex flex-col mt-7 ml-7 mb-7">
                    <h3 className="text-xl uppercase font-bold font-palanquin text-stone-950"> Enterprise </h3>
                    <h1 className="mt-4 text-4xl text-black font-bold font-palanquin"> Flexible </h1>
                    <p className="mt-2 text-primary text-xl font-bold font-palanquin "> Custom Pricing </p>
                    <p className="mt-3 text-stone-800 font-montserrat text-base max-w-[300px]"> Ideal for enterprise customers with unique, scalable or high volume recruitment needs. </p>
                </div>
                <ul className="mt-7">
                    {enterpriseOpr.map((service) => {
                        return (
                            <li className="text-base flex items-center mb-1 font-montserrat text-stone-800"> <GoDotFill/> &nbsp; <span> {service} </span> </li>
                        )
                    })}
                </ul>
                <div className="flex flex-col gap-3 my-7 font-montserrat">
                    <Link to={`/`} className="text-sm hover:text-primary flex items-center gap-2"> 
                        <FaPhoneAlt />
                        <span> +251956666667 </span> 
                    </Link>
                    <Link to="tel:+251956666667" className="text-sm flex items-center gap-2 hover:text-primary"> 
                        <IoMdMail />
                        <span> semegn@freelanceethiopia.com </span>
                    </Link>
                    <Link to="mailto:semegn@freelanceethiopia.com" className="w-full flex justify-center items-center gap-3 text-slate-100 bg-stone-800 rounded-full px-5 py-2"> 
                        <span> contact sales </span> 
                        <HiOutlinePaperAirplane />        
                    </Link>
                </div>
            </div>
        </div>
    )
}
