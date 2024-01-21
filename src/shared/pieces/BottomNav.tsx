import { useNavigate } from "react-router-dom"
import Goback from "./Goback"
import { bottomNavRoute } from "../../constants"

interface NavProps {
    route: string,
    newUser?: boolean,
    telegramUser?: boolean,
    place: string
}

export default function BottomNav({route, newUser, telegramUser, place}: NavProps) {
    const navigate = useNavigate()
    // Check if bottom nav in on onboarding page both newuser or telegram options are not selected.
    const isOnboardingAndNothingisSelected = place === bottomNavRoute.onboard && !newUser && !telegramUser
    return (
        <div className="flex max-lg:gap-5 max-lg:mb-20 justify-between items-center cursor-pointer mx-20 max-lg:mt-14 mt-28">
            <div className="max-lg:hidden">
                <Goback />
            </div>
            <button className={`${ isOnboardingAndNothingisSelected ? "bg-stone-800 opacity-50" : "bg-stone-800"} max-lg:w-[200px] max-lg:ml-32 max-lg:px-5 px-10 py-2 text-slate-100 max-lg:text-sm text-base rounded-full`} onClick={() => {
                if(isOnboardingAndNothingisSelected) return
                // If the user is new redirect them to the register page
                if(newUser){
                    return navigate(`/${route}`)
                }
                // If the user is coming from telegram , redirect them to the phone verification page
                if(telegramUser){
                    return navigate('/verify-your-phone-number')
                }
            }}> Continue </button>
        </div>
    )
}
