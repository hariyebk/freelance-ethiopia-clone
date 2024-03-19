import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className="flex justify-between items-center gap-16">
            <div className="w-full flex flex-col items-center lg:items-start justify-start lg:max-w-[500px] mt-5">
                <h1 className="heading1 max-lg:text-4xl text-primary max-lg:leading-snug font-bold pt-7 mt-5 max-lg:mb-5"> Find The Right Talent Right Now!</h1>
                <p className="mt-8 max-lg:mt-2 text-xl font-palanquin"> Hire with a click of a button. Thousands of the best talents are waiting for you. </p>
                <div className="flex items-start">
                    <Link to="/onboard" className="max-lg:mt-16 mt-8 w-[300px] lg:w-[200px] rounded-full bg-gradient-to-r from-primary to-secondary py-3 text-xl text-center text-slate-100 font-sans font-semibold">
                        Start Hiring
                    </Link>
                </div>
            </div>
            <div className="max-lg:hidden">
                <img src="./Images/banner.png" width={900} height={900} className="object-contain"/>
            </div>
        </div>
    )
}
