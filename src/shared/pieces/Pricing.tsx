import { packages } from "../../constants";
import { Link } from "react-router-dom";
import Services from "./Services";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Pricing() {
    return (
        <div className="max-lg:mt-20 mt-10 flex flex-1 flex-col items-start min-h-screen">
            <h1 className="mx-auto font-bold font-palanquin max-lg:text-5xl text-6xl text-black"> Our <span className="text-primary font-bold"> Pricing </span></h1>
            <p className="mt-10 max-lg:ml-3 max-lg:px-4 text-black max-lg:text-lg text-lg font-palanquin leading-7 max-lg:tex-justify"> Our subscription packages provide an easy and cost-efficient way to find qualified job candidates quickly. The three packages offer different lengths of subscription time, so you can choose the one that meets your needs. </p>
            <div className="mt-16 flex max-lg:flex-col justify-between items-start w-full max-lg:w-[300px] max-lg:mx-auto gap-7">
                {packages.map((plan) => {
                    return (
                        <div key={plan.name} className="flex flex-col h-auto border rounded-lg max-lg:rounded-xl shadow-md max-lg:mb-4 max-lg:px-4 pb-10">
                            <h3 className="mx-auto mt-10 font-semibold uppercase text-lg text-black font-palanquin"> {plan.name} </h3>
                            <h2 className="mx-auto mt-4 max-lg:text-3xl text-4xl font-bold font-montserrat"> {plan.duration} </h2>
                            <p className="mx-auto mt-3 text-primary text-2xl font-semibold font-palanquin"> {plan.price} </p>
                            <p className="mx-6 mt-5 max-lg:text-sm text-sm leading-6 text-stone-800 font-montserrat"> {plan.describtion} </p>
                             {/* Features */}
                            <div className="flex flex-col gap-4 mx-8 mb-6 mt-6 text-sm font-palanquin">
                                {plan.features.map((feature) => {
                                    return (
                                        <ul key={feature} className="flex items-center gap-3">
                                            <FaRegCheckCircle className="text-primary w-5 h-5" />
                                            <li className="text-left"> {feature} </li>
                                        </ul>
                                    )
                                })}

                            </div>
                            <div className="mx-4 flex justify-center">
                                <Link to="/login" className="mt-6 w-full lg:w-[160px] text-center bg-stone-800 max-lg:text-sm text-slate-100 text-base px-5 py-2 rounded-full" > Try for free </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Services />
        </div>
    )
}
