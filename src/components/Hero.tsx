import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className="flex justify-between items-center gap-10">
            <div className="flex flex-col justify-start max-w-[500px] mt-5">
                <h1 className="heading1 text-primary font-bold pt-7 mt-5"> Find The Right Talent Right Now!</h1>
                <p className="mt-4 text-stone-600 text-lg font-sans font-semibold"> Hire with a click of a button. Thousands of the best talents are waiting for you. </p>
                <Link to="/register" className=" flex justify-center mt-8 max-w-[200px] rounded-full bg-gradient-to-r from-primary to-secondary py-3 text-xl text-slate-100 font-sans font-semibold">
                    Start Hiring
                </Link>
            </div>
            <div>
                <img src="./Images/banner.png" />
            </div>
        </div>
    )
}
