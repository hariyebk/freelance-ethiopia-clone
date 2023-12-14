import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa6";

export default function Login() {
    return (
        <section className="flex w-full min-h-screen items-center justify-center">
            <form className="shadow-xl h-auto px-10">
                <h2 className="font-semibold text-2xl my-10 text-center">  Log in to Afriworks </h2>
                <div className="flex flex-1 flex-col gap-5">
                    <div className="border border-stone-800 p-3 rounded w-[400px] flex flex-1 items-center gap-3">
                        <FaUser />
                        <input type="text" placeholder="username or Email" className="w-full outline-none"/>     
                    </div>
                    <div className="border border-stone-800 p-3 rounded w-[400px] flex flex-1 items-center gap-3">
                        <FaLock />
                        <input type="password" placeholder="password" className="w-full outline-none" />
                    </div>
                </div>
                <p className="flex items-center justify-end">
                    <Link to="/forgot-password" className="mt-3 text-stone-500 text-base text-right"> Forgot password ?</Link>
                </p>
                <div className="flex flex-col justify-center items-center">
                    <button className="mt-4 bg-stone-800 px-20 rounded-3xl text-slate-100 py-2"> Continue with email </button> 
                    <div className="flex items-center justify-evenly mt-8">
                        <hr className="w-16 h-0.5 bg-stone-700 ml-3" />
                        <p className="text-stone-800 text-base ml-3">
                        Don’t have an account? </p>
                        <hr className="w-16 h-0.5 bg-stone-700 ml-3"/>
                    </div>
                    <Link to="/register" className="my-10 rounded-3xl px-6 py-2 border-2 border-stone-600 text-stone-700 font-medium"> Sign up </Link>
                </div>
            </form>
        </section>
    )
}
