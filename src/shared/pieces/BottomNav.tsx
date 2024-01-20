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
    return (
        <div className="flex max-lg:gap-5 max-lg:mb-20 justify-between items-center cursor-pointer mx-20 max-lg:mt-14 mt-28">
            <div className="max-lg:hidden">
                <Goback />
            </div>
            <button className="bg-stone-800 max-lg:w-[200px] max-lg:ml-32 max-lg:px-5 px-10 py-2 text-slate-100 max-lg:text-sm text-base rounded-full" onClick={() => {
                if(place === bottomNavRoute.onboard && !newUser && !telegramUser) return
                navigate(`/${route}`)
            }}> Continue </button>
        </div>
    )
}
