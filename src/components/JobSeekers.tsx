import { Link } from "react-router-dom";

export default function JobSeekers() {
    return (
        <div className="max-w-full h-[530px] rounded-[48px] my-28 bg-gradient-to-b from-orange-600 to-pink-500">
            <div className="w-[400px] ml-20 pt-20 flex flex-col items-start">
                <h1 className="text-white text-6xl font-bold"> Free for Job Seekers </h1>
                <p className="w-full text-slate-100 text-lg font-palanquin mt-8"> Freelance Ethiopia is FREE for job seekers and our platform offers job and gig opportunities 365 days a year. So Get Started now and discover opportunities that are meant for you. </p>
                <Link to="/regiester" className=" mt-7 max-w-[150px] text-xl bg-slate-50 py-2 text-orange-500 px-5 rounded-full font-palanquin"> Get Started </Link>
            </div>
        </div>
    )
}
