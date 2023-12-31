import { useReducer} from "react";
import { FiUserCheck } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { bottomNavRoute, userTypes } from "../constants";
import Goback from "../shared/pieces/Goback";
import BottomNav from "../shared/pieces/BottomNav";
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
    return (
        <section className="flex flex-col w-full min-h-screen">
            <div className="md:hidden ml-10 mt-8">
                <Goback />
            </div>
            <div className="mt-20 flex items-start justify-center">
                <img src="/Images/onboard.svg" alt="onboarding-image" className=" max-lg:hidden object-contain w-80 h-auto"/>
                <div className="flex flex-col ml-10">
                    <h1 className="max-lg:text-xl text-2xl text-slate-800 font-palanquin"> Are you new or our Telegram Bot user? </h1>
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
            <BottomNav place={bottomNavRoute.onboard} route={bottomNavRoute.register} newUser = {newUser} telegramUser = {telegramUser} />
        </section>
    )
}
