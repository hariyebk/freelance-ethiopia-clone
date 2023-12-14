import { Link } from "react-router-dom";
import JobSeekers from "../components/JobSeekers";
import Brands from "../components/Brands";
import Pricing from "../components/Pricing";

export default function Home() {
    return ( 
        <section className="max-container min-h-screen mx-56">
            {/* HERO */}
            <div className="flex justify-between items-center gap-10">
                <div className="flex flex-col justify-start max-w-[500px] mt-5">
                    <h1 className="heading1 text-orange-600 font-bold pt-7 opacity-75 mt-5"> Find The Right Talent Right Now!</h1>
                    <p className="mt-4 text-stone-600 text-lg font-sans font-semibold"> Hire with a click of a button. Thousands of the best talents are waiting for you. </p>
                    <Link to="/register" className=" flex justify-center mt-8 max-w-[200px] rounded-full bg-gradient-to-r from-orange-600 to-pink-500 py-3 text-xl text-slate-100 font-sans font-semibold">
                        Start Hiring
                    </Link>
                </div>
                <div>
                    <img src="./Images/banner.png" />
                </div>
            </div>
            <Brands />
            <JobSeekers />
            <Pricing />
        </section>
    )
}
