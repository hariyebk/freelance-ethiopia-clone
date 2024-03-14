import { useReducer} from "react"
import { AccountRoles} from "../../types"
import { useUpdateAccountType } from "../../lib/Tanstackquery/queriesAndMutations"
import { Box, CircularProgress } from "@mui/material"
import useApi from "../../context/hook"
import toast from "react-hot-toast"

interface STATEPROPS {
    Jobseeker: boolean,
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
    Jobseeker: false,
    Private: false,
    Coorporate: false,
    Lstartup: false,
    Ustartup: false
}

const reducer = (state: STATEPROPS, action: ACTIONPROPS) => {
    switch(action.type){
        case "Jobseeker":
            return {
                ...state,
                Jobseeker: !state.Jobseeker,
                Private: false,
                Coorporate: false,
                Lstartup: false,
                Ustartup: false
            }
        case "Private":
            return {
                ...state,
                Private: !state.Private,
                Jobseeker: false,
                Coorporate: false,
                Lstartup: false,
                Ustartup: false
            }
        case "Coorporate":
            return {
                ...state,
                Coorporate: !state.Coorporate,
                Jobseeker: false,
                Lstartup: false,
                Ustartup: false,
                Private: false
            }
        case "Lstartup":
            return {
                ...state,
                Lstartup: !state.Lstartup,
                Jobseeker: false,
                Ustartup: false,
                Private: false,
                Coorporate: false,
            }
        case "Ustartup":
            return {
                ...state,
                Ustartup: !state.Ustartup,
                Jobseeker: false,
                Private: false,
                Coorporate: false,
                Lstartup: false,
            }
        default:
            throw new Error("unkown type");
    }
}

export default function NewProfile(){
    const {isPending, mutate: updateAccountType} = useUpdateAccountType()
    const [{Jobseeker, Private, Coorporate, Lstartup, Ustartup}, dispatch] = useReducer(reducer, initial)
    const {user} = useApi()
    // checks if at least one of the account type is selected , then it turn the button color to orange, if noting is selected it will stay inactive
    const isNotSelected = !Jobseeker && !Private && !Coorporate && !Lstartup && !Ustartup
    let currentlyActive: string
    if(Jobseeker){
        currentlyActive = AccountRoles.jobseeker
    }
    else if(Private){
        currentlyActive = AccountRoles.employer
    }
    else if(Coorporate){
        currentlyActive = AccountRoles.employer
    }
    else if(Lstartup){
        currentlyActive = AccountRoles.employer
    }
    else if(Ustartup){
        currentlyActive = AccountRoles.employer
    }


    function handleAccountType(){
        // If nothing is selected , return
        if(!currentlyActive) return
        if(user){
            return toast.error("This Feature will be implemented soon")
        }
        updateAccountType(currentlyActive)
    }

    if(isPending){
        return (
            <div className="w-full h-full flex items-center justify-center">
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress/>
                </Box>
            </div>
        )
    }

    return (
        <section className="max-lg:w-[300px] w-full">
            <div className="mt-5">
                <div className="account_card">
                    <p className="account_card_label"> Job Seeker </p>
                    <p className={`${Jobseeker ? "bg-stone-800 ring-2 ring-primary" : "border-gray-600"} border rounded-full w-4 h-4 cursor-pointer focus:outline-none`} onClick={() => dispatch({type: "Jobseeker"})} />
                </div>
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
                <button onClick={handleAccountType} className={`${isNotSelected ? "bg-stone-800 opacity-50" : "bg-gradient-to-r from-primary to-secondary"} text-base text-slate-100 text-center w-full cursor-pointer rounded-full max-lg:px-4 px-6 max-lg:py-2 py-3 my-10`}>
                        Choose Account Type
                </button>
            </div>
        </section>
    )
}
