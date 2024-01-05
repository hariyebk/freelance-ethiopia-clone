import { useReducer} from "react"
import { Link } from "react-router-dom"
// import { AccountTypes } from "../../constants"

interface STATEPROPS {
    Private: boolean,
    Coorporate: boolean,
    Lstartup: boolean,
    Ustartup: boolean
}
interface ACTIONPROPS {
    type: string,
    payload?: boolean

}
const initial = {
    Private: false,
    Coorporate: false,
    Lstartup: false,
    Ustartup: false
}

const reducer = (state: STATEPROPS, action: ACTIONPROPS) => {
    switch(action.type){
        case "Private":
            return {
                ...state,
                Private: !state.Private,
                Coorporate: false,
                Lstartup: false,
                Ustartup: false
            }
        case "Coorporate":
            return {
                ...state,
                Coorporate: !state.Coorporate,
                Lstartup: false,
                Ustartup: false,
                Private: false
            }
        case "Lstartup":
            return {
                ...state,
                Lstartup: !state.Lstartup,
                Ustartup: false,
                Private: false,
                Coorporate: false,
            }
        case "Ustartup":
            return {
                ...state,
                Ustartup: !state.Ustartup,
                Private: false,
                Coorporate: false,
                Lstartup: false,
            }
        default:
            throw new Error("unkown type");
    }
}

export default function NewProfile(){
    const [{Private, Coorporate, Lstartup, Ustartup}, dispatch] = useReducer(reducer, initial)
    return (
        <section className="max-lg:w-[300px] w-full h-auto">
            <div className="mt-7">
                <div className="account_card">
                    <p className="account_card_label"> Private client </p>
                    <p className={`${Private ? "bg-stone-800 ring-2 ring-primary" : "border-gray-600"} border rounded-full w-4 h-4 cursor-pointer focus:outline-none`} onClick={() => dispatch({type: "Private"})} />
                </div>
                <div className="account_card">
                    <p className="account_card_label"> Corporate Company </p>
                    <p className={`${Coorporate ? "bg-stone-800 ring-2 ring-primary" : "border-gray-600"} border rounded-full w-4 h-4 cursor-pointer focus:outline-none`} onClick={() => dispatch({type: "Coorporate"})} />
                </div>
                <div className="account_card">
                    <p className="account_card_label"> Licensed Startup </p>
                    <p className={`${Lstartup ? "bg-stone-800 ring-2 ring-primary" : "border-gray-600"} border rounded-full w-4 h-4 cursor-pointer focus:outline-none`} onClick={() => dispatch({type: "Lstartup"})} />
                </div>
                <div className="account_card">
                    <p className="account_card_label"> Unlicensed Startup  </p>
                    <p className={`${Ustartup ? "bg-stone-800 ring-2 ring-primary" : "border-gray-600"} border rounded-full w-4 h-4 cursor-pointer focus:outline-none`} onClick={() => dispatch({type: "Ustartup"})} />
                </div>
                <button className={`${!Private && !Coorporate && !Lstartup && !Ustartup ? "bg-stone-800 opacity-50" : "bg-gradient-to-r from-primary to-secondary"} text-base text-slate-100 text-center w-full cursor-pointer rounded-full max-lg:px-4 px-6 max-lg:py-2 py-3 my-10`}>
                    <Link to={"/"}>
                        Choose Account Type
                    </Link>
                </button>
            </div>
        </section>
    )
}
