import { useEffect, useReducer} from "react";
import { FiUserCheck } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { bottomNavRoute, userTypes } from "../constants";
import Goback from "../shared/pieces/Goback";
import BottomNav from "../shared/pieces/BottomNav";
import { useNavigate } from "react-router-dom";
interface STATEPROPS {
    newUser: boolean,
    telegramUser: boolean
}
interface ACTIONPROPS {
    type: string,
    payload?: boolean
}
const initial = {
    newUser: false,
    telegramUser: false
}
const reducer = (state: STATEPROPS, action: ACTIONPROPS) => {
    switch(action.type){
        case userTypes.newuser:
            return {
                ...state,
                newUser: state.newUser ? false : true,
                telegramUser: false
            }
        case userTypes.olduser:
            return {
                ...state,
                telegramUser: state.telegramUser ? false : true,
                newUser: false
            }
        default:
            throw new Error(userTypes.unknown);
    }
}
export default function Signup() {
    const [{newUser, telegramUser}, dispatch] = useReducer(reducer, initial)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleClick(){
        if(!newUser && !telegramUser) return
        if(newUser){
            return navigate("/register")
        }
        if(telegramUser){
            // TODO: the user should verfiy their phone number
            return navigate("/register")
        }
    }

    return (
        <section className="flex flex-col w-full max-lg:mt-28 lg:my-24 ">
            <div className="md:hidden ml-10 mt-8">
                <Goback />
            </div>
            <div className="mt-20 flex items-start justify-center gap-16">
                <img src="/Images/onboard.svg" alt="onboarding-image" className=" max-lg:hidden object-contain w-80 h-auto"/>
                <div className="flex flex-col max-sm:items-center md:ml-10">
                    <h1 className="max-sm:text-base max-lg:text-xl text-2xl text-slate-800 font-palanquin"> Are you new or our Telegram Bot user? </h1>
                    <div className="flex max-lg:flex-col justify-between items-center max-lg:gap-2 gap-7">
                        <div className={`w-[220px] h-[140px] mt-16 flex flex-col gap-7 items-center justify-center shadow-md rounded-xl cursor-pointer ${telegramUser ? "border-2 border-primary": ""}`} onClick={() => dispatch({type: userTypes.olduser})}>
                            <FiUserCheck style = {{fontSize: "50px", color: 'text-gray-400' }} />
                            <p className="text-base text-slate-700 font-palanquin"> I am already a bot User </p>
                        </div>
                        <div className={`w-[220px] h-[140px] mt-16 flex flex-col gap-7 items-center justify-center shadow-md rounded-xl cursor-pointer ${newUser ? "border-2 border-primary": ""}`} onClick={() => dispatch({type: userTypes.newuser})}>
                            <FiUserPlus style = {{fontSize: "50px", color: 'rgb(30, 41, 59)' }} />
                            <p className="text-base text-slate-700 font-palanquin"> I am a new User </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-16 mb-28">
                <button onClick={handleClick} className={`${!newUser && !telegramUser ? "bg-stone-800 opacity-50" : "bg-stone-800"} lg:hidden rounded-full md:ml-10 text-slate-100 text-sm w-[200px] px-3 py-2 text-center`}>
                    countinue
                </button>
            </div>
            <div className="max-lg:hidden -mt-48">
                <BottomNav place={bottomNavRoute.onboard} route={bottomNavRoute.register} newUser = {newUser} telegramUser = {telegramUser} />
            </div>
        </section>
    )
}
